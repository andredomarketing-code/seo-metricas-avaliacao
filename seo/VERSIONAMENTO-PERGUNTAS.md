# Versionamento — Perguntas e respostas

Versão atual: **V2**

## Perguntas e respostas vigentes — V2

### 1. Mapa de acesso dos rastreadores

**Pergunta:** “Defina quem pode ser rastreado em cada área. O robots.txt será construído em tempo real.”

**Resposta esperada:** `Disallow` para Busca interna (`/busca/`) e Filtros (`/filtros/`); `Allow` para Produtos (`/produto/`), Categorias (`/tenis-corrida/`) e Guias (`/guia/`). As 10 áreas precisam receber uma decisão.

### 2. Seleção para o sitemap.xml

**Pergunta:** “Monte uma lista enxuta das três páginas que o buscador deve encontrar primeiro.”

**Resposta esperada:** selecionar exatamente Categoria de corrida (`/tenis-corrida/`), Produto Velocity Pro (`/produto/velocity-pro/`) e Guia para iniciantes (`/guia/primeiro-tenis/`).

### 3. Arquitetura da nova família de corrida

**Pergunta:** “Organize categoria, guia e produto em uma rota que o site consiga expandir sem perder contexto.”

**Resposta esperada:** Página pilar `/tenis-corrida/`; Conteúdo de apoio `/tenis-corrida/guia-iniciantes/`; Produto `/tenis-corrida/velocity-pro/`.

### 4. Quadro de intenção de busca

**Pergunta:** “Componha uma resposta para quem está comparando tênis de corrida para iniciantes.”

**Resposta esperada:** `Guia comparativo`; `Critérios de escolha`; `Modelos e faixas de preço`; `Explorar categorias`.

### 5. Central de URLs do Velocity Pro

**Pergunta:** “Escolha qual endereço deverá receber a autoridade das demais variações do produto.”

**Resposta esperada:** `https://veloce.com.br/tenis-velocity-pro/`.

**Alternativas atuais:** variações com `utm_source=instagram`, `cor=azul`, busca `?q=velocity`, `utm_campaign=black-friday` e `size=40`.

### 6. Mesa de edição da categoria

**Pergunta:** “Monte a página escolhendo uma peça para cada camada da experiência de busca.”

**Resposta esperada:** URL `/tenis-corrida/iniciantes/`; title `Tênis de corrida para iniciantes | Veloce`; H1 `Como escolher seu primeiro tênis de corrida`; conteúdo `Critérios, modelos e orientação para decidir`; imagem `Imagem com alt contextual`.

**Alternativas atuais por campo:** três distratores adicionais em cada campo, incluindo URLs parametrizadas/genéricas, title sem contexto, H1 institucional ou de compra, conteúdo genérico e imagens sem descrição contextual.

### 7. O endereço antigo ainda recebe visitas

**Pergunta:** “A página /tenis-velocity-pro foi substituída pelo novo produto. Monte a rota que preserva a experiência e a relevância já conquistada.”

**Resposta esperada:** `Redirecionamento permanente (301)` para `Página do novo produto equivalente`.

### 8. Um produto saiu de linha. E agora?

**Pergunta:** “O modelo Velocity 2019 não será vendido novamente e não existe substituto equivalente. Configure uma saída útil para quem chegar a essa URL.”

**Resposta esperada:** `404 — página não encontrada` com `Navegação e alternativas relevantes`.

### 9. O servidor está fora do ar

**Pergunta:** “Durante uma instabilidade, a Veloce precisa responder corretamente a pessoas e buscadores. Defina o sinal técnico e a prioridade da equipe.”

**Resposta esperada:** `Status 5xx — indisponibilidade temporária` e `Corrigir e restaurar o serviço rapidamente`.

### 10. O guia está isolado no site

**Pergunta:** “O conteúdo “Como escolher seu primeiro tênis” é útil, mas quase ninguém o encontra. Construa uma conexão que acompanhe a jornada de descoberta.”

**Resposta esperada:** contexto `Da categoria de tênis de corrida` e saída `Para produtos relacionados, por links contextuais`.

### 11. A consulta revela uma intenção

**Pergunta:** “Uma pessoa pesquisa “como saber meu tipo de pisada”. Monte a primeira resposta da Veloce para o momento em que ela está.”

**Resposta esperada:** intenção `Informacional — quer entender` e página `Guia explicativo com critérios e linguagem simples`.

### 12. Escolha a prioridade da próxima semana

**Pergunta:** “A categoria tem visitas, mas pouca permanência. A página só traz produtos e nenhum critério de escolha. Defina o problema e a melhoria prioritária.”

**Resposta esperada:** diagnóstico `A página não ajuda a pessoa a decidir` e prioridade `Adicionar orientação, filtros compreensíveis e links para o guia`.

## Histórico detalhado

### V2 — Interações e embaralhamento

- Todas as listas de respostas são embaralhadas a cada carregamento e ao recomeçar o diagnóstico.
- A missão 5 recebeu duas novas URLs distratoras e cada item da missão 6 recebeu duas novas alternativas distratoras.
- As missões 7–12 passaram de escolha única para atividades de construção com duas decisões e prévia em tempo real.

### V1 — Base atual

- Registradas as 12 missões, todas as alternativas e as regras de validação vigentes.
