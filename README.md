# Vinicius Soares | Desenvolvedor Backend Pleno

Portfólio em Vue 3, Vite e Tailwind CSS, com português e inglês. Mantém o deploy estático na Vercel: comando `npm run build`, diretório de saída `dist`.

## Desenvolvimento

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Conteúdo

- `src/data/portfolio.js`: projetos, experiências, tecnologias e links compartilhados pelos dois idiomas.
- `src/i18n/content.js`: textos da interface e metadados traduzidos.
- `src/i18n/lang.js`: idioma persistido e atualização de HTML/metadados.
- `src/composables/useDialog.js`: abertura modal nativa, bloqueio de scroll, Escape e retorno de foco.
- `public/og.png` e `public/favicon.svg`: compartilhamento e identidade.

## Currículo ATS

O PDF atualizado foi informado pelo proprietário em `public/cv/Vinicius-Soares-CV.pdf`. O botão de download utiliza esse arquivo e é habilitado quando ele existe no build. Para atualizar o currículo, substitua o PDF nesse mesmo caminho e gere um novo build.

## Evidências dos projetos

Simulador verificado em 13/10/2026:

- Backend: https://github.com/vinisf/simulador-financiamento — commit `ec137ebcfb8c90900b299656a6bf36a7c6e2ed73`.
- `server.js`: Express e `POST /api/v1/simulations`.
- `src/simulate.js`: motor financeiro, INCC, seguro, cenários de investimento/entrada e detalhamento mensal.
- `tests/simulate.test.js` e `package.json`: testes Jest para as regras financeiras. Os testes do projeto externo foram inspecionados, não executados neste checkout.
- Frontend: https://github.com/vinisf/simulador-financiamento-web — commit `3b89f674bca7696c3d45f7158062876e59c0ba9b`.
- `src/components/Simulator.vue`: interface Vue, requisição POST à API, resumo e tabela mensal.

Sistema de Seleção Pública e API de Gestão Educacional foram removidos da seção de projetos por não terem repositórios públicos informados. As contribuições profissionais permanecem na seção de experiências.

As capturas dos sistemas profissionais foram preservadas no diretório de assets, mas retiradas da interface e do bundle: precisam de revisão de confidencialidade antes de voltar ao site. O GIF público do simulador ganhou uma prévia estática leve; evita download de 11 MB e respeita movimento reduzido.

## Verificação manual

Navegar em desktop e mobile; alternar PT/EN e recarregar; abrir cada projeto por teclado; testar Tab, Shift+Tab, Escape, clique externo e retorno de foco; abrir o menu mobile e navegar por seus links; conferir ausência de overflow em telas pequenas e download do currículo. Não há deploy automático neste trabalho.

## Resultado da validação da modernização inicial (13/10/2026)

- Build Vite concluído; nenhuma dependência nova adicionada ao projeto.
- Chrome headless: 3 projetos em PT/EN, persistência de idioma e metadados traduzidos.
- Todos os modais: abertura por Enter, Tab/Shift+Tab, Escape, clique externo, retorno de foco e restauração de scroll.
- Menu mobile: tradução, teclado, navegação e fechamento ao mudar para desktop.
- Sem overflow horizontal em 320, 390, 768, 1024 e 1440 px; screenshots desktop/mobile inspecionados.
- Movimento reduzido respeitado, links externos protegidos e nenhum erro de JavaScript ou recurso local.
- GitHub e demo: HTTP 200. LinkedIn: HTTP 999 (bloqueio de acesso automatizado; confirmar manualmente).
- `git diff --check` sem erros de whitespace. Browserslist informa base desatualizada, sem impedir o build.
- Playwright usado apenas em diretório temporário; não integra as dependências do portfólio.
- Os mesmos testes de navegador também passaram no build de produção servido com `vite preview`, confirmando os caminhos de assets gerados para hospedagem estática.

## Projetos públicos — atualização em 13/10/2026

A seção agora apresenta somente o Simulador de Financiamento Imobiliário e o ViniFit, em português e inglês. As experiências profissionais foram preservadas.

ViniFit: https://github.com/vinisf/Vinifit — commit verificado `7ba525df031bb93cd43e1ee24b5e95ae004d9a66`.

- `package.json`: Vue 3, TypeScript, Vite, Tailwind CSS, Pinia, Vue Router, Capacitor e plugin SQLite.
- `src/services/storage.ts`: SQLite na plataforma nativa e localStorage no ambiente web; estado serializado em JSON.
- `src/stores/app.ts`: fichas/exercícios, séries, cargas, repetições, histórico, treino em andamento, pesagens, meta e backups com validação básica.
- `src/views/WorkoutsView.vue`: interface de fichas e exportação/importação JSON, com Filesystem e Share no Android.
- `src/views/ActiveWorkoutView.vue`, `ProgressView.vue` e `src/components/RestTimer.vue`: execução, evolução de peso e cronômetro de descanso.
- A árvore pública não contém screenshots do app. Adicione capturas reais em `src/assets/projects/vinifit/`, conforme o README desse diretório. As imagens entram automaticamente no próximo build, em ordem alfabética, com moldura Android e navegação no modal.
- A API pública de Releases retornou uma lista vazia. Nenhum botão de APK é exibido. Se um APK oficial for publicado, conferir seu asset em Releases antes de preencher `apk` em `src/data/portfolio.js`.
- Os commits públicos do simulador seguem os mesmos já registrados acima; arquitetura e testes descritos correspondem a esses arquivos. Não há alegações de execução dos testes dos repositórios externos.

Validação desta atualização: build concluído; Chrome headless no build de produção confirmou dois projetos em PT/EN, três experiências preservadas, modais por teclado com retorno de foco, área Android sem imagens fictícias, ausência de link APK e ausência de overflow em 320, 390, 768, 1024 e 1440 px. Nenhum erro de JavaScript ou recurso local. GitHub dos três repositórios e demo do simulador responderam HTTP 200. Nenhuma dependência adicionada e nenhum deploy realizado.
