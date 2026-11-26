export const PROFILE = {
  shortName: 'Marcelino Albuquerque',
  fullName: 'Marcelino Albuquerque',
  headline: 'Desenvolvedor Full Stack Júnior | Cloud Computing (AWS) | Análise e Desenvolvimento de Sistemas',
  location: 'Paulista, Pernambuco, Brasil',
  availability: 'Disponível para trabalho presencial/remoto/híbrido',
  email: 'marcelinoalbuquerque045@gmail.com',
  phone: '(81) 98606-2267 / 98587-2411',
  githubUrl: 'https://github.com/Marcelino85',
  githubHandle: 'github.com/Marcelino85',
  linkedinUrl: 'https://linkedin.com/in/marcelino-albuquerque-developer',
  credlyUrl: 'https://www.credly.com/users/marcelino-albuquerque',
  heroSummary:
    'Desenvolvedor Full Stack Júnior em transição de carreira para Engenharia de Software e Cloud Computing, unindo sólida capacidade analítica, graduação em ADS e certificações AWS na entrega de aplicações web escaláveis e seguras.',
  aboutParagraphs: [
    'Profissional em transição de carreira para a área de Tecnologia da Informação, trazendo maturidade profissional, forte capacidade analítica, disciplina, resolução de problemas e rigorosa ética de trabalho para desenvolver soluções digitais confiáveis.',
    'Graduado em Análise e Desenvolvimento de Sistemas (ADS) e em Processos Gerenciais, com foco em Computação em Nuvem. Certificado AWS Certified Cloud Practitioner e certificado em Amazon Connect, atuando no desenvolvimento de aplicações web Full Stack robustas, APIs REST bem estruturadas e arquiteturas serverless em nuvem.',
    'Possuo vivência prática em suporte técnico e análise de processos de negócio no ERP Sankhya, além de colaboração direta em projetos de software reais na Guarda Chuva Software. Inglês técnico/básico em constante evolução.'
  ],
  highlights: [
    {
      value: 'Transição TI',
      label: 'Maturidade Profissional · Pensamento Analítico & Ética'
    },
    {
      value: 'AWS Cloud',
      label: 'Cloud Practitioner (Credly) & Certificação Amazon Connect'
    },
    {
      value: 'Full Stack',
      label: 'React, Node.js, Python, APIs REST & SQL'
    },
    {
      value: 'ADS + Gestão',
      label: 'Graduação em ADS & Formação em Processos Gerenciais'
    }
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces responsivas, consumo de APIs e roteamento SPA',
    items: [
      { name: 'React.js', detail: 'Componentes, Hooks, SPA' },
      { name: 'JavaScript (ES6+)', detail: 'Assincronismo, DOM, Módulos' },
      { name: 'HTML5', detail: 'Semântica & Acessibilidade' },
      { name: 'CSS3', detail: 'Grid, Flexbox & Responsividade' },
      { name: 'Bootstrap', detail: 'Prototipação & UI Grid' },
      { name: 'Axios', detail: 'Integração HTTP & Interceptors' },
      { name: 'React Router DOM', detail: 'Navegação & Rotas Protegidas' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs RESTful, autenticação, regras de negócio e dados',
    items: [
      { name: 'Node.js', detail: 'Runtime & Arquitetura de Serviços' },
      { name: 'Express.js', detail: 'Rotas, Middlewares & REST' },
      { name: 'Python (FastAPI, Pandas, NumPy)', detail: 'APIs & Análise de Dados' },
      { name: 'APIs REST', detail: 'Contratos JSON & Status HTTP' },
      { name: 'JWT', detail: 'Autenticação Stateless & Controle de Acesso' },
      { name: 'Multer', detail: 'Upload & Tratamento de Arquivos' }
    ]
  },
  {
    id: 'database-cloud',
    title: 'Banco de Dados & Cloud',
    subtitle: 'Modelagem relacional, NoSQL e infraestrutura AWS',
    items: [
      { name: 'MySQL', detail: 'Modelagem Relacional & Queries' },
      { name: 'PostgreSQL', detail: 'Integridade & Consultas Avançadas' },
      { name: 'Firebase (Firestore, Realtime Database, Storage)', detail: 'BaaS & Persistência em Tempo Real' },
      { name: 'AWS (EC2, S3, Lambda, Amazon Connect, Lex)', detail: 'Cloud Computing & Fluxos Serverless' }
    ]
  },
  {
    id: 'tools-systems',
    title: 'Ferramentas & Sistemas',
    subtitle: 'Versionamento, sistemas corporativos e ambiente Linux',
    items: [
      { name: 'Git', detail: 'Controle de Versão & Fluxo de Branches' },
      { name: 'GitHub (github.com/Marcelino85)', detail: 'Repositórios, Portfólio & Pages' },
      { name: 'Linux (Ubuntu)', detail: 'CLI, Permissões & Ambiente Dev' },
      { name: 'ERP Sankhya', detail: 'Suporte Técnico & Processos de Negócio' },
      { name: 'ServiceNow', detail: 'Gestão de Chamados & ITSM' }
    ]
  }
];

export const FEATURED_PROJECT = {
  id: 'codebook',
  title: 'CodeBook — Plataforma de Gerenciamento e Leitura de Livros Digitais',
  shortTitle: 'CodeBook',
  category: 'Aplicação Full Stack · Desenvolvimento Web / Engenharia de Software',
  liveUrl: 'https://codebookrecomend.netlify.app/',
  screenshot: '/assets/aistudio/Captura_de_tela_2026-11-25_180150_c9ab3445.png',
  screenshotAlt: 'Captura de tela da plataforma CodeBook com barra de navegação escura, banner de boas-vindas e ilustração CodeBook Recomenda',
  visualSummary:
    'Barra de navegação escura com logotipo "CodeBook" em azul e links (Home, Login, Registrar-se); tela inicial clara e limpa com banner azul "Bem-vindo ao Sistema de Cadastro de Livros" e ilustração "CodeBook Recomenda".',
  description:
    'Aplicação Full Stack desenvolvida para facilitar o gerenciamento, a organização e a leitura de livros digitais em PDF. Permite que usuários cadastrem seus próprios livros, organizem bibliotecas e compartilhem conteúdos por meio de um sistema de visibilidade pública e privada, com experiência responsiva para desktop, tablet e smartphone.',
  features: [
    'Cadastro e autenticação individualizada de usuários (JWT).',
    'Gerenciamento completo de livros (CRUD).',
    'Upload e armazenamento de arquivos PDF (Multer).',
    'Leitura online direta no navegador sem necessidade de download (PDF.js / React-PDF).',
    'Biblioteca pública e controle de privacidade (público vs. privado).',
    'Controle de propriedade (apenas o autor pode editar ou excluir seus livros).',
    'Alternância entre Modo Claro e Modo Escuro para conforto visual na leitura.'
  ],
  challenges: [
    'Implementação rigorosa de regras de negócio e autorização no backend para garantir o controle de acesso e propriedade dos arquivos entre diferentes usuários.',
    'Adaptação e renderização fluida de documentos PDF em telas menores (dispositivos móveis), mantendo a usabilidade e legibilidade.'
  ],
  stack: [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Axios',
    'React Router DOM',
    'PDF.js / React-PDF',
    'Node.js',
    'Express.js',
    'JWT',
    'Multer',
    'MySQL',
    'Git/GitHub'
  ],
  competencies: [
    'Arquitetura Full Stack',
    'APIs REST',
    'Persistência em banco relacional',
    'Segurança e autenticação',
    'Upload de arquivos',
    'Regras de negócio'
  ]
};

export const SECONDARY_PROJECTS = [
  {
    id: 'simulado-fgv',
    title: 'Simulador de Questões de Concursos (Foco Banca FGV)',
    shortTitle: 'Simulado FGV',
    category: 'Aplicação Web Interativa · EdTech',
    liveUrl: 'https://statuesque-daifuku-a43ea8.netlify.app/',
    ctaLabel: 'Testar Simulador Online',
    screenshot: '/assets/aistudio/Captura_de_tela_2026-11-25_175855_0d029e70.png',
    screenshotAlt: 'Captura de tela do Simulado FGV mostrando questão de Spring Boot REST com feedback verde de Resposta Correta e justificativa',
    visualSummary:
      'Interface limpa estilo plataforma de estudos com card centralizado, contador de progresso, alternativas em rádio-botão e caixa de feedback instantâneo em verde ("Resposta Correta!") com explicação detalhada item a item.',
    description:
      'Aplicação web desenvolvida para estudo ativo e resolução comentada de questões de concursos públicos (como provas de TI da banca FGV, abordando arquitetura de software, APIs REST, banco de dados e engenharia web). Oferece correção imediata e explicações detalhadas item a item para acelerar a fixação do conteúdo.',
    features: [
      'Contador dinâmico de progresso e navegação intuitiva entre questões.',
      'Seleção de alternativas com feedback visual imediato (acerto ou erro).',
      'Comentário explicativo detalhado da alternativa correta e justificativa individual do porquê cada alternativa incorreta está errada.',
      'Layout responsivo focado em leitura prolongada sem distrações.'
    ],
    challenges: [
      'Estruturação pedagógica dos dados das questões e comentários para renderização rápida e escalável no frontend.',
      'Design de feedback imediato claro e acessível, evitando sobrecarga cognitiva durante sessões de estudo.'
    ],
    stack: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Deploy contínuo no Netlify'],
    competencies: ['Gerenciamento de estado', 'Componentização', 'UX para EdTech', 'Deploy contínuo']
  },
  {
    id: 'oliveira-remodelacao',
    title: 'Oliveira Remodelação — Site Institucional (Protótipo para Cliente)',
    shortTitle: 'Oliveira Remodelação',
    category: 'Desenvolvimento Frontend · Landing Page Corporativa',
    liveUrl: 'https://marcelino85.github.io/Praey/',
    ctaLabel: 'Visualizar Protótipo',
    screenshot: '/assets/aistudio/Captura_de_tela_2026-11-25_180109_aebe9576.png',
    screenshotAlt: 'Captura de tela do site Oliveira Remodelação com fundo escuro, tipografia em dourado e logotipo arquitetônico Modelando Sonhos',
    visualSummary:
      'Design sofisticado em tema escuro (grafite e preto) com detalhes e tipografia em dourado ("Transformando Seus Espaços em Obras de Arte!"), logotipo arquitetônico dourado "Oliveira Remodelação - Modelando Sonhos" e navegação institucional.',
    description:
      'Protótipo de site institucional responsivo desenvolvido para empresa do setor de construção, reformas e remodelação de ambientes, focado em apresentar portfólio de obras, credibilidade visual e canais rápidos de orçamento.',
    features: [
      'Identidade visual sóbria em grafite, preto e dourado alinhada ao posicionamento premium do cliente.',
      'Navegação institucional estruturada (Início, Sobre Nós, Serviços, Trabalhos, Contato).',
      'Integração direta com canais sociais e pontos de contato para solicitação de orçamento.',
      'Layout responsivo adaptado a dispositivos móveis e desktop.'
    ],
    challenges: [
      'Equilibrar contraste e legibilidade entre tons escuros e tipografia dourada em diferentes resoluções de tela.',
      'Traduzir a identidade arquitetônica da marca em uma interface leve e rápida publicada no GitHub Pages.'
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Design Responsivo', 'GitHub Pages'],
    competencies: ['UI Design aplicado', 'HTML Semântico', 'CSS3 Responsivo', 'Publicação GitHub Pages']
  }
];

export const COMPLEMENTARY_PROJECTS = [
  {
    id: 'cloudgallery',
    title: 'CloudGallery',
    category: 'Arquitetura Full Stack · Gerenciamento de Mídia',
    description:
      'Aplicação Full Stack para gerenciamento de fotos e álbuns na nuvem, estruturada com separação clara entre camada de apresentação, API REST e persistência relacional.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    repoUrl: 'https://github.com/Marcelino85/cloudgallery'
  },
  {
    id: 'aws-pos-venda',
    title: 'Fluxo de Pós-Venda Inteligente (AWS)',
    category: 'Arquitetura Serverless · Cloud & Contact Center',
    description:
      'Arquitetura serverless de atendimento ao cliente automatizado integrando telefonia em nuvem, processamento de linguagem natural e funções sob demanda.',
    stack: ['Amazon Connect', 'Amazon Lex V2', 'AWS Lambda', 'Python'],
    repoUrl: 'https://github.com/Marcelino85'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (Credly)',
    type: 'Certificação Cloud',
    description:
      'Validação oficial dos fundamentos de nuvem AWS, arquitetura global, segurança compartilhada, modelos de cobrança e serviços principais (EC2, S3, Lambda, RDS, IAM).'
  },
  {
    title: 'Certificação em Amazon Connect',
    issuer: 'Amazon Web Services',
    type: 'Especialização Contact Center',
    description:
      'Capacitação na construção de fluxos de contato em nuvem, roteamento inteligente e integração com bots conversacionais e funções Lambda.'
  }
];

export const EDUCATION = [
  {
    title: 'Graduação em Análise e Desenvolvimento de Sistemas (ADS)',
    institution: 'UNOPAR | 2022 – 11/2024',
    type: 'Formação Acadêmica',
    description:
      'Base sólida em engenharia de software, algoritmos, estrutura de dados, modelagem de bancos de dados relacionais, programação orientada a objetos e arquitetura web.'
  },
  {
    title: 'Graduação em Processos Gerenciais',
    institution: 'UNOPAR | 2020 – 08/2022',
    type: 'Gestão & Negócios',
    description:
      'Formação focada em gestão organizacional, mapeamento e melhoria contínua de processos de negócio, planejamento operacional e alinhamento estratégico com sistemas corporativos.'
  }
];

export const PRACTICAL_EXPERIENCE = [
  {
    title: 'Suporte Técnico e Análise de Processos — ERP Sankhya',
    context: 'Sistemas Corporativos & ServiceNow',
    description:
      'Atuação em suporte técnico, diagnóstico de incidentes e análise de processos de negócio integrados ao ERP Sankhya, garantindo continuidade operacional e alinhamento com fluxos de atendimento.'
  },
  {
    title: 'Colaboração em Projetos de Software — Guarda Chuva Software',
    context: 'Vivência Prática de Mercado',
    description:
      'Acompanhamento e colaboração prática no ciclo de desenvolvimento de software em equipe, aplicando boas práticas de arquitetura, versionamento com Git/GitHub e entrega contínua.'
  },
  {
    title: 'Automação de Atendimento em Nuvem — AWS Serverless',
    context: 'Amazon Connect · Amazon Lex V2 · AWS Lambda',
    description:
      'Desenvolvimento de fluxos de atendimento automatizado integrando Amazon Connect para roteamento de voz/chat, Amazon Lex V2 para compreensão de intenções e funções AWS Lambda em Python.'
  }
];

export const RESUME_DETAILS = {
  pdfUrl: '/assets/aistudio/CV_-_Marcelino_Albuquerque-Developer_b7185dcc.pdf',
  roleLine: 'FullStack Developer | JavaScript | React | Node.js | AWS Cloud',
  summary:
    'Desenvolvedor FullStack com sólida formação em Análise e Desenvolvimento de Sistemas e especialização em Nuvem (AWS). Experiência prática no desenvolvimento e deploy de aplicações web escaláveis com React, Node.js, Express e PostgreSQL, incluindo implementação de autenticação segura (JWT/OAuth2) e arquiteturas serverless na AWS. Comprovada capacidade de otimização de APIs e consultas SQL, reduzindo tempo de resposta em até 30%. Experiência com metodologias ágeis (Scrum/Kanban) e controle de versão Git.',
  behavioralSkills: [
    'Aprendizado Contínuo',
    'Resolução de Problemas',
    'Trabalho em Equipe',
    'Proatividade',
    'Adaptação e Resiliência',
    'Pensamento Crítico',
    'Comunicação Eficaz',
    'Gestão do Tempo',
    'Orientação para Resultados',
    'Mentalidade Antifrágil'
  ],
  technicalSkills: [
    {
      label: 'Backend & APIs',
      items: 'Node.js, Express, REST APIs, Autenticação JWT / OAuth2, Microserviços, Python (FastAPI, Pandas, NumPy), Multer'
    },
    {
      label: 'Frontend',
      items: 'React, JavaScript (ES6+), HTML5, CSS3, Bootstrap, React Router, Axios'
    },
    {
      label: 'Banco de Dados',
      items: 'PostgreSQL, MySQL, Firebase (Firestore, Realtime Database, Storage)'
    },
    {
      label: 'Cloud & DevOps',
      items: 'AWS (EC2, S3, Lambda, CloudFront, IAM, RDS, DynamoDB, Amazon Connect, Lex), Serverless Architecture, Deploy (Vercel, Render, Netlify), Git/GitHub, CI/CD'
    },
    {
      label: 'Metodologias & Ferramentas',
      items: 'Scrum, Kanban, Boas práticas de UI/UX e A11Y, Linux (Ubuntu), ERP Sankhya, ServiceNow'
    }
  ],
  experiences: [
    {
      role: 'Desenvolvedor FullStack – Guarda Chuva Software (Freelancer – Remoto)',
      period: 'Abr/2024 – Fev/2025',
      bullets: [
        'Desenvolvi e mantive aplicações web responsivas utilizando React no frontend e Node.js/Express no backend.',
        'Projetei e otimizei estruturas de banco de dados PostgreSQL e MongoDB, resultando em uma redução de 30% no tempo de resposta das requisições.',
        'Implementei rotas protegidas e autenticação segura utilizando tokens JWT e fluxo OAuth2.',
        'Realizei a implantação contínua (Deploy) e configuração de ambientes de produção em plataformas Cloud (Render, Netlify e Vercel).',
        'Trabalhei em ciclos ágeis (Scrum/Kanban) realizando revisões de código via Git/GitHub.'
      ]
    },
    {
      role: 'Suporte e Atendimento ao Cliente – Provider Soluções Tecnológicas',
      period: 'Fev/2006 – Jul/2008',
      bullets: [
        'Prestei suporte telefônico, suporte ao usuário e cobrança por telefone, além de suporte à documentação para processos digitais internos e adoção de ferramentas tecnológicas pelos clientes.'
      ]
    }
  ],
  relevantProjects: [
    {
      name: 'CODEBOOK – Plataforma Web FullStack (React, Node.js, PostgreSQL, Render, Netlify)',
      bullets: [
        'Desenvolvi uma aplicação fullstack completa para gestão e leitura de documentos digitais com controle de acesso público/privado.',
        'Arquitetura de backend com suporte a upload de arquivos PDF (Multer), banco de dados relacional hospedado na nuvem (Aiven) e autenticação JWT.'
      ]
    },
    {
      name: 'EducaIA – Plataforma Educacional Serverless (Escola da Nuvem)',
      bullets: [
        'Projetei a arquitetura teórica e conceitual serverless para suporte a recursos de IA via Amazon Bedrock (flashcards e relatórios de progresso).',
        'Modelagem de fluxo seguro e escalável utilizando AWS Cognito, S3, CloudFront, API Gateway, AWS Lambda, Aurora e DynamoDB sob conformidade com a LGPD.'
      ]
    }
  ],
  coursesAndCertifications: [
    'AWS Certified IA Cloud Practitioner | 2026',
    'AWS Certified Cloud Architect | 2025',
    'AWS Certified Cloud Developer | 2025',
    'AWS Cloud Practitioner – AWS | 2025',
    'Certificação em Amazon Connect – AWS',
    'AWS re/Start + IA – Escola da Nuvem | 2025',
    'FullStack Developer – StartSe Tech Academy | 2024'
  ],
  languagesAndInfo: [
    'Inglês – Básico',
    'Espanhol – Intermediário',
    'Disponibilidade para trabalho presencial/remoto/híbrido',
    'Portfólio: https://marcelinoalbuquerque.netlify.app/'
  ]
};

