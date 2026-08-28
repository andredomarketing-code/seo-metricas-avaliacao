# Versionamento — Design

Versão atual: **V1**

Este arquivo é o registro detalhado do pilar visual. Atualize-o na mesma alteração que modificar interface, layout, estilos, conteúdo visual ou responsividade.

## V1 — Base atual

- Página de aula interativa sobre SEO, com identidade “SEO LAB” e contexto da Pós-graduação em Marketing Digital da Barão de Mauá.
- Paleta: fundo creme, texto azul-escuro, azul de apoio, azul-claro para áreas didáticas e laranja-terroso para destaques, indicadores e marca.
- Tipografia: Manrope para interface e conteúdo; DM Mono para rótulos técnicos; Georgia em itálico para ênfases editoriais.
- Cabeçalho fixo translúcido com marca, âncoras “Trilha” e “Desafio” e atalho para o desafio.
- Abertura em duas colunas: texto, identificação do participante e ações à esquerda; mapa abstrato de busca, descoberta e decisão à direita.
- Faixa introdutória escura abaixo da abertura.
- Trilha composta por seis cartões numerados, em grade de três colunas no desktop. O primeiro recebe fundo azul-claro de destaque.
- Cada cartão abre um diálogo com explicação, exemplo em bloco escuro e dica de aplicação.
- Área do desafio em fundo azul-claro, com painel lateral de saúde orgânica e cartão principal de missão.
- As alternativas do desafio usam cartões grandes, número circular, seta e estados visuais para seleção, acerto e erro.
- Os construtores de resposta usam painel claro e prévia escura para robots.txt, sitemap.xml, navegação, briefing, canonical e prévia de busca.
- A conclusão exibe nota, quantidade de missões acertadas e próximo passo.
- Em telas de até 800 px: navegação e atalho do cabeçalho são ocultados; hero, módulos, desafio, opções e construtores passam para uma coluna; painel lateral deixa de ficar fixo.

## Regra de atualização

1. Suba a versão para `V2`, `V3` etc. somente quando houver mudança visual efetiva.
2. Acrescente uma nova seção, por exemplo `## V2 — ...`, sem apagar as anteriores.
3. Atualize `VERSOES_ATUAIS.design` em `app.js` e inclua uma linha na tabela “Design” de `RESUMO-DE-VERSOES.md`.
