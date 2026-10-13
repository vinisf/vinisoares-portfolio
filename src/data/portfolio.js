import simulatorPoster from '../assets/projects/simulador-preview.jpg';
export const links = { github: 'https://github.com/vinisf', linkedin: 'https://www.linkedin.com/in/vinisoaresdev/' };
export const resume = Object.keys(import.meta.glob('/public/cv/Vinicius-Soares-CV.pdf')).length ? '/cv/Vinicius-Soares-CV.pdf' : null;
export const technologies = [ ['PHP', 'Laravel', 'Node.js', 'APIs REST'], ['PostgreSQL', 'MySQL'], ['Redis', 'Docker', 'Git', 'S3'], ['Webhooks', 'Postbacks S2S'] ];
export const experiences = [
 { company: 'AtomicTracker', role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' }, start: '2026-03', end: null, stack: ['PHP', 'Laravel', 'Redis'], bullets: {
 pt: ['Desenvolvimento e manutenção de plataforma SaaS.', 'Integração com plataformas de pagamento, checkout e afiliados.', 'Desenvolvimento de webhooks, postbacks e processamento de eventos.', 'Implementação de regras de negócio para rastreamento de conversões.'],
 en: ['Development and maintenance of a SaaS platform.', 'Integration with payment, checkout and affiliate platforms.', 'Development of webhooks, postbacks and event processing.', 'Implementation of business rules for conversion tracking.'] } },
 { company: 'IEMA', role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' }, start: '2021-12', end: null, stack: ['APIs REST', 'PostgreSQL'], bullets: {
 pt: ['Desenvolvimento e manutenção de sistemas educacionais.', 'Implementação de funcionalidades e APIs.', 'Modelagem de dados com PostgreSQL.', 'Desenvolvimento de regras de negócio e melhorias em sistemas existentes.'],
 en: ['Development and maintenance of educational systems.', 'Implementation of features and APIs.', 'Data modeling with PostgreSQL.', 'Development of business rules and improvements to existing systems.'] } },
 { company: 'LAMPP-IT Solutions', role: { pt: 'Desenvolvedor de Software', en: 'Software Developer' }, start: '2023-03', end: '2024-03', stack: ['Node.js', 'PHP', 'Vue.js', 'PostgreSQL'], bullets: {
 pt: ['Desenvolvimento de sistemas com Node.js, PHP, Vue.js e PostgreSQL.', 'Manutenção e evolução de aplicações.', 'Documentação técnica e organização do código.'],
 en: ['Systems development with Node.js, PHP, Vue.js and PostgreSQL.', 'Application maintenance and evolution.', 'Technical documentation and code organization.'] } }
];
// Real Android screenshots are added here after review; no app screens are generated.
const vinifitImages = import.meta.glob('/src/assets/projects/vinifit/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
export const projects = [
  {
    id: 'financing', platform: 'web', images: [simulatorPoster],
    stack: ['Node.js', 'Express', 'Jest', 'Vue 3', 'Vite', 'JavaScript'],
    links: [
      { label: 'Frontend · GitHub', url: 'https://github.com/vinisf/simulador-financiamento-web' },
      { label: 'Backend · GitHub', url: 'https://github.com/vinisf/simulador-financiamento' },
    ],
    live: 'https://simulador-financiamento-web-three.vercel.app/',
    copy: {
      pt: {
        title: 'Simulador de Financiamento Imobiliário', category: 'Full Stack · Web', status: 'Projeto autoral em evolução',
        description: 'Projeto Full Stack com frontend Vue e API Node.js para simular financiamento imobiliário e comparar cenários de pagamento.',
        objective: 'Facilitar a comparação de custos de entrada, financiamento, parcelas da construtora e despesas ao longo da obra.',
        contribution: 'Desenvolvimento da API de simulação, regras financeiras e interface Vue para consulta dos cenários.',
        challenge: 'Modelar correção por INCC, seguro de obra e cenários de investimento ou entrada adicional, mantendo os cálculos separados da interface.',
        solution: 'Motor financeiro isolado em simulateFinancing, consumido pela rota POST /api/v1/simulations. O frontend Vue envia os parâmetros e apresenta resumo e detalhamento mensal. Os repositórios de frontend e backend são separados.',
        features: ['API Node.js/Express com rota de simulação versionada.', 'Regras financeiras para INCC, seguro de obra e despesas mensais.', 'Comparação entre investir durante a obra e aumentar a entrada.', 'Resumo financeiro e tabela de valores mês a mês.', 'Testes Jest para entrada, INCC, cenários e saldo de investimento.'],
      },
      en: {
        title: 'Real Estate Financing Simulator', category: 'Full Stack · Web', status: 'Personal project in active development',
        description: 'Full Stack project with a Vue frontend and Node.js API for property financing simulations and payment scenario comparisons.',
        objective: 'Make it easier to compare down payments, financing, developer installments and costs throughout construction.',
        contribution: 'Development of the simulation API, financial rules and Vue interface for exploring scenarios.',
        challenge: 'Model INCC adjustments, construction insurance and investment or additional down payment scenarios, keeping calculations separate from the interface.',
        solution: 'An isolated simulateFinancing engine exposed through POST /api/v1/simulations. The Vue frontend sends parameters and displays summaries and monthly breakdowns. Frontend and backend have separate repositories.',
        features: ['Node.js/Express API with a versioned simulation endpoint.', 'Financial rules for INCC, construction insurance and monthly costs.', 'Comparison between investing during construction and increasing the down payment.', 'Financial summary and monthly breakdown table.', 'Jest tests for down payments, INCC, scenarios and investment balances.'],
      },
    },
  },
  {
    id: 'vinifit', platform: 'android',
    images: Object.keys(vinifitImages).sort().map(path => vinifitImages[path]),
    // No published GitHub Releases or official APK assets as of 2026-10-13.
    apk: null,
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router', 'Capacitor', 'SQLite'],
    links: [{ labelKey: 'code', url: 'https://github.com/vinisf/Vinifit' }],
    copy: {
      pt: {
        title: 'ViniFit — Aplicativo de Treinos', category: 'Android · Offline', status: 'Projeto autoral em evolução',
        description: 'Aplicativo Android para gerenciar treinos de musculação, registrar séries, repetições e cargas e acompanhar a evolução física. Funciona offline com SQLite no Android.',
        objective: 'Reunir fichas, execução de treinos e acompanhamento de evolução em um aplicativo pessoal que funciona sem conexão.',
        contribution: 'Desenvolvimento das telas Vue com TypeScript, estado em Pinia, persistência local e integração Android via Capacitor.',
        challenge: 'Preservar o treino em andamento e os registros entre sessões, com armazenamento local e possibilidade de backup.',
        solution: 'Estado centralizado no Pinia e serviço de armazenamento separado: SQLite no Android, com estado serializado em JSON, e localStorage no ambiente web de desenvolvimento. Backups JSON podem ser exportados e importados com validação de versão e estrutura básica.',
        features: ['Gerenciamento de fichas e edição, inclusão, remoção e reordenação de exercícios.', 'Registro de cargas, séries e repetições, com recuperação da última carga usada.', 'Histórico de treinos e preservação do treino em andamento.', 'Registro de pesagens, meta de peso e gráfico de evolução.', 'Cronômetro de descanso de 60, 90, 120 ou 180 segundos.', 'Persistência offline com SQLite no Android.', 'Exportação e importação de backups JSON.'],
      },
      en: {
        title: 'ViniFit — Workout App', category: 'Android · Offline', status: 'Personal project in active development',
        description: 'Android app for managing strength workouts, logging sets, repetitions and weights, and tracking physical progress. Works offline with SQLite on Android.',
        objective: 'Bring workout plans, active sessions and progress tracking together in a personal app that works without a connection.',
        contribution: 'Development of Vue screens with TypeScript, Pinia state management, local persistence and Android integration through Capacitor.',
        challenge: 'Preserve active workouts and records between sessions, with local storage and backup support.',
        solution: 'Centralized Pinia state and a separate storage service: SQLite on Android, storing serialized JSON state, and localStorage in web development. JSON backups support export and import with version and basic structure validation.',
        features: ['Workout plans with exercise editing, addition, removal and reordering.', 'Weight, set and repetition logging, with the last used weight restored.', 'Workout history and persistence of active sessions.', 'Weigh-ins, target weight and a progress chart.', 'Rest timer with 60, 90, 120 or 180 second intervals.', 'Offline persistence with SQLite on Android.', 'JSON backup export and import.'],
      },
    },
  },
];
