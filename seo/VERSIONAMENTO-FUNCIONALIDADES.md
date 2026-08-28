# Versionamento — Lógica e funcionalidades

Versão atual: **V2**

## V2 — Embaralhamento e cenários interativos

- Ao abrir a página e ao usar “Recomeçar”, todas as alternativas das missões são embaralhadas: cartões, URLs, selects, chips e escolhas de cenário. A regra de validação continua ligada ao valor correto, não à posição exibida.
- A missão 5 agora exibe seis URLs canônicas candidatas; a correta segue sendo a URL limpa do produto.
- A missão 6 agora apresenta quatro opções para URL, title, H1, conteúdo e imagem; apenas a composição otimizada valida o acerto.
- As missões 7–12 usam o mesmo fluxo dos construtores anteriores: dois campos obrigatórios, botão “Confirmar escolhas”, bloqueio após resposta, feedback de acerto/erro, atualização das métricas e botão “Avançar”.
- Cada novo cenário tem uma prévia “Decisão em construção”, atualizada imediatamente ao selecionar cada campo.

### Validação dos cenários V2

| Missão | Combinação correta | Métrica / impacto |
| --- | --- | --- |
| 7. Redirecionamento | 301 + página do novo produto equivalente | Estrutura de URLs / 20 |
| 8. Produto descontinuado | 404 + navegação e alternativas | Rastreamento / 18 |
| 9. Indisponibilidade | 5xx + corrigir e restaurar o serviço | Rastreamento / 20 |
| 10. Guia isolado | Categoria + links contextuais para produtos | Estrutura de URLs / 18 |
| 11. Intenção informacional | Informacional + guia explicativo | Relevância / 20 |
| 12. Prioridade da página | Falta de apoio à decisão + orientação/filtros/guia | Relevância / 18 |

## V1 — Base atual

- O diagnóstico tem 12 missões, uma por vez, com pontuação por acerto e métricas laterais limitadas a 100%.
- Cada resposta confirmada bloqueia os controles, mostra feedback e permite avançar; “Recomeçar” restaura nota e métricas-base.
- Os módulos da trilha abrem diálogos e o nome do participante atualiza o painel e o resultado final.
