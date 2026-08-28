# Diagnóstico de presença digital — aula de métricas

Landing page estática e didática para a disciplina **Monitoramento, SEO e Métricas no Digital**, da pós-graduação em Marketing Digital do Centro Universitário Barão de Mauá.

Ela simula uma conversão em duas etapas para demonstrar aquisição, UTMs, abandono de formulário, funil, eventos e conversão no Google Analytics 4 (GA4). Nenhuma resposta do formulário é enviada, armazenada ou usada comercialmente.

## Estrutura

```txt
metricas/
├── index.html   # interface e tag do GA4
├── styles.css   # layout responsivo
├── script.js    # formulário, eventos e modo demonstração
└── README.md    # esta documentação
```

## Abrir localmente

Abra `index.html` no navegador. O formulário e o painel de demonstração funcionam localmente. Para o GA4 registrar uma sessão de demonstração para os alunos, publique a pasta em uma URL HTTPS acessível à turma.

## Publicação HTTPS

Envie os quatro arquivos desta pasta a qualquer hospedagem estática com HTTPS, como GitHub Pages, Netlify, Vercel ou o servidor institucional. Depois, confirme que a URL pública abre o arquivo `index.html` e substitua `https://SEU-DOMINIO.com` nas URLs abaixo pelo endereço publicado.

## Google Analytics 4

O Google tag foi incluído diretamente no `head` de `index.html`, sem Google Tag Manager, usando o ID **G-93GJEVLZ5B**.

Para validar a instalação, abra a página publicada no [Tag Assistant](https://tagassistant.google.com/) e conecte-a à sessão. Para validar os eventos, acesse **Administrador → DebugView** na propriedade GA4 e use a extensão Google Analytics Debugger ou o Tag Assistant durante a navegação. Relatórios em tempo real podem levar alguns instantes; o modo local ajuda na aula enquanto isso acontece.

## Modo demonstração

Acrescente `?demo=true` à URL. Exemplo: `https://SEU-DOMINIO.com/?demo=true`.

O painel no canto inferior direito mostra evento, horário e parâmetros não sensíveis. Use **Limpar** para zerar apenas os itens vistos naquele carregamento da página. O painel é uma confirmação visual local e não substitui o GA4.

## Eventos implementados

| Evento | Disparo | Estágio | Parâmetros |
|---|---|---|---|
| `page_view` | carregamento, automaticamente pelo GA4 | visita | padrão do GA4 |
| `view_offer` | primeira visualização do hero | exposição | `offer_name`, `form_name`, `page_type` |
| `cta_click` | CTA que abre o formulário | interesse | `cta_name`, `cta_location`, `offer_name`, `form_name`, `funnel_stage` |
| `form_start` | primeira interação na etapa 1 | intenção | `form_name`, `form_step`, `funnel_stage` |
| `form_step_complete` | etapa 1 validada | avanço | `form_name`, `form_step`, `next_step`, `funnel_stage` |
| `form_step_view` | etapa 2 exibida | qualificação | `form_name`, `form_step`, `funnel_stage` |
| `form_submit_attempt` | clique em Receber diagnóstico | tentativa | `form_name`, `form_step`, `funnel_stage` |
| `generate_lead` | etapa 2 validada | conversão principal | `form_name`, `lead_type`, `offer_name`, `funnel_stage` |
| `thank_you_view` | tela de sucesso exibida | conversão confirmada | `form_name`, `offer_name`, `funnel_stage` |
| `secondary_cta_click` | CTA da confirmação | microconversão | `cta_name`, `cta_location`, `funnel_stage` |

Os campos preenchidos nunca são enviados ao GA4. Os eventos só carregam valores operacionais e não pessoais.

### Tornar a conversão um evento-chave

No GA4, abra **Administrador → Eventos**, localize `generate_lead` após a primeira ocorrência e ative a opção para marcá-lo como **evento-chave**. Se necessário, crie o evento antes usando exatamente esse nome.

## URLs de teste com UTMs

```txt
https://SEU-DOMINIO.com/?utm_source=google&utm_medium=cpc&utm_campaign=diagnostico_metricas&utm_content=anuncio_pesquisa
https://SEU-DOMINIO.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=diagnostico_metricas&utm_content=video_feed
https://SEU-DOMINIO.com/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=diagnostico_metricas&utm_content=post_organico
https://SEU-DOMINIO.com/?utm_source=email&utm_medium=email&utm_campaign=diagnostico_metricas&utm_content=convite_turma
https://SEU-DOMINIO.com/?utm_source=google&utm_medium=organic&utm_campaign=seo_metricas&utm_content=resultado_busca
```

Os parâmetros UTM padrão são lidos automaticamente pelo Google tag para aquisição. Para ver também os eventos locais, acrescente `&demo=true` a uma URL que já tenha UTMs.

## Roteiro para a aula

1. Peça a cada aluno que abra uma URL UTM distinta (alguns com `demo=true`).
2. Distribua as jornadas: sair sem clicar; abrir e fechar; iniciar etapa 1 e abandonar; avançar à etapa 2 e abandonar; concluir; concluir e usar o CTA secundário.
3. Acompanhe a sequência no painel de demonstração e no DebugView.
4. Depois, compare aquisição, cliques, início do formulário, avanços, tentativas, conversões e microconversões no GA4.

## Perguntas para discussão

- Quais canais trouxeram visitantes?
- Quais canais trouxeram pessoas que iniciaram o formulário?
- Em qual etapa há maior abandono?
- Um alto número de visualizações significa que a ação foi bem-sucedida?
- A taxa de clique do CTA foi suficiente para considerar a LP eficaz?
- A etapa 1 ou a etapa 2 gerou mais fricção?
- Quais hipóteses explicam o abandono?
- Que teste seria priorizado: mudança de CTA, redução de campos, alteração de proposta ou segmentação de canal?
- Quais métricas deveriam aparecer em um painel executivo?
- Qual conversão principal e qual microconversão devem ser acompanhadas?
