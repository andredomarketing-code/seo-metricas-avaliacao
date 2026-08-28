const analyticsContext = { offer_name: 'diagnostico_presenca_digital', form_name: 'formulario_diagnostico_metricas' };
const params = new URLSearchParams(window.location.search);
const isDemo = params.get('demo') === 'true';
const eventLog = [];

function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', eventName, parameters);
  const safeParameters = Object.fromEntries(Object.entries(parameters).filter(([key]) => !['name','email','company','role'].includes(key)));
  eventLog.unshift({ eventName, parameters: safeParameters, time: new Date().toLocaleTimeString('pt-BR') });
  if (isDemo) renderEventLog();
}

function renderEventLog() {
  const list = document.querySelector('#event-list');
  list.innerHTML = eventLog.length ? eventLog.map(item => `<article class="event-item"><div class="event-meta"><span>Evento enviado</span><time>${item.time}</time></div><div class="event-name">${item.eventName}</div><div class="event-params">${Object.entries(item.parameters).map(([key,value]) => `${key}=${value}`).join('<br>') || 'Sem parâmetros adicionais'}</div></article>`).join('') : '<p>Nenhum evento registrado ainda.</p>';
}

const modal = document.querySelector('#form-modal');
const form = document.querySelector('#diagnostic-form');
let offerViewed = false;
let formStarted = false;
let leadGenerated = false;
let thankYouViewed = false;

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(section => section.classList.toggle('active', section.dataset.step === step));
}

function openForm(location) {
  trackEvent('cta_click', { ...analyticsContext, cta_name: 'quero_receber_meu_diagnostico', cta_location: location, funnel_stage: 'interesse' });
  form.reset();
  form.querySelectorAll('.has-error').forEach(field => field.classList.remove('has-error'));
  showStep('1');
  modal.showModal();
  document.querySelector('[name="name"]').focus();
}

function validateFields(names) {
  let valid = true;
  names.forEach(name => {
    const input = form.elements[name];
    const wrapper = input.closest('label, fieldset');
    const message = wrapper.querySelector('small');
    let text = '';
    if (!input.value.trim()) text = 'Este campo é obrigatório.';
    else if (input.type === 'email' && !input.validity.valid) text = 'Informe um e-mail válido.';
    wrapper.classList.toggle('has-error', Boolean(text));
    if (message) message.textContent = text;
    if (text) valid = false;
  });
  return valid;
}

document.querySelectorAll('.open-form').forEach(button => button.addEventListener('click', () => openForm(button.dataset.location)));
document.querySelector('.close-modal').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });

form.querySelectorAll('[data-step="1"] input').forEach(input => input.addEventListener('focus', () => {
  if (!formStarted) { formStarted = true; trackEvent('form_start', { ...analyticsContext, form_step: '1_identificacao', funnel_stage: 'intencao' }); }
}, { once: false }));

document.querySelector('.form-next').addEventListener('click', () => {
  if (!validateFields(['name', 'email', 'company'])) return;
  trackEvent('form_step_complete', { ...analyticsContext, form_step: '1_identificacao', next_step: '2_qualificacao', funnel_stage: 'avanco' });
  showStep('2');
  trackEvent('form_step_view', { ...analyticsContext, form_step: '2_qualificacao', funnel_stage: 'qualificacao' });
  form.elements.role.focus();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  trackEvent('form_submit_attempt', { ...analyticsContext, form_step: '2_qualificacao', funnel_stage: 'tentativa_conversao' });
  if (!validateFields(['role', 'challenge'])) return;
  if (!leadGenerated) { trackEvent('generate_lead', { ...analyticsContext, lead_type: 'diagnostico_gratuito', funnel_stage: 'conversao' }); leadGenerated = true; }
  showStep('success');
  if (!thankYouViewed) { trackEvent('thank_you_view', { ...analyticsContext, funnel_stage: 'conversao_confirmada' }); thankYouViewed = true; }
});

document.querySelector('.secondary-cta').addEventListener('click', () => {
  trackEvent('secondary_cta_click', { ...analyticsContext, cta_name: 'ver_como_medir_resultados_digitais', cta_location: 'thank_you', funnel_stage: 'microconversao' });
  modal.close(); document.querySelector('#jornada').scrollIntoView({ behavior: 'smooth' });
});

const offerObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting && !offerViewed) { offerViewed = true; trackEvent('view_offer', { ...analyticsContext, page_type: 'landing_page' }); offerObserver.disconnect(); }
}), { threshold: 0.5 });
offerObserver.observe(document.querySelector('.hero'));

if (isDemo) { document.querySelector('#demo-panel').hidden = false; document.querySelector('#clear-events').addEventListener('click', () => { eventLog.length = 0; renderEventLog(); }); }
