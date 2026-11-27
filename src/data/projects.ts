export type ProjectCategory = 'software' | '3d';

export interface ProjectItem {
  id: string;
  name: string;
  shortName?: string;
  client: string;
  tech: string;
  date: string;
  category: ProjectCategory;
  role: string;
  shortRole: string;
  overview: string;
  impact: string;
  cardImage: string;
  coverImage: string;
  secondaryImage?: string;
  gallery?: string[];
  has3DViewer?: boolean;
  featuredOnHome?: boolean;
  github?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: 'genesys-tecsys',
    name: 'Planejamento RF & BDGD',
    shortName: 'GeneSys RF',
    client: 'GeneSys / Tecsys (5º Sem)',
    tech: 'Python, Java Spring, Flutter & PostGIS',
    date: '2026',
    category: 'software',
    role: 'Desenvolvedor FullStack & Data ETL',
    shortRole: 'Full-Stack & Data ETL | Planejamento Geográfico BDGD e Cobertura RF',
    overview:
      'Plataforma multiplataforma desenvolvida em parceria com a Tecsys para apoiar distribuidoras de energia elétrica no planejamento de infraestrutura de radiofrequência (gateways). O sistema consome dados geográficos públicos da BDGD (ANEEL), cruza ativos da rede elétrica (postes, subestações, transformadores e religadores) com modelos matemáticos de propagação de sinal e propõe cenários otimizados de cobertura em mapa interativo.',
    impact:
      'Atuei na engenharia do pipeline de ETL em Python orquestrado via n8n para extração e processamento otimizado de camadas geoespaciais (FileGDB/PostGIS), além da integração com o backend em Java (Spring Boot) e visualização de cobertura e KPIs no frontend em Flutter.',
    cardImage: '/Genesys-RF.png',
    coverImage: '/Genesys-RF.png',
    featuredOnHome: true,
    github: 'https://github.com/GeneSys-fatec/API-5DSM',
  },
  {
    id: 'orihime-mod',
    name: 'Orihime Inoue 3D Mod',
    shortName: 'Orihime 3D',
    client: 'Pessoal (skate. / ReSkate)',
    tech: 'Blender 3D, Python, Frostbite & C#',
    date: '2026',
    category: '3d',
    role: '3D Technical Artist & Reverse Engineer',
    shortRole: '3D Modeling & Reverse Eng. | Rigging 129 ossos e Patch Binário para skate.',
    overview:
      'Projeto completo de modelagem 3D, rigging e modding para o jogo skate. (EA) utilizando a plataforma ReSkate Studio. O modelo da personagem Orihime Inoue (Bleach) foi importado do formato XPS para o Blender (31.361 vértices e 41.553 triângulos), passando por unificação de malhas, baking de atlas de texturas 2048x2048 e transferência completa de pesos (Weight Painting) para o esqueleto humanoide de 129 ossos do jogo.',
    impact:
      'Automatizei o pipeline no Blender via scripts Python para mapear e transferir os pesos do rig original para a hierarquia de ossos do skate. Além da modelagem 3D, realizei engenharia reversa de crash dumps e patching binário de pacotes comprimidos com Oodle Kraken (.fbmod / blocos EFIX da engine Frostbite) em C#, resolvendo colisões de ponteiros de textura e TypeInfo para rodar o personagem perfeitamente in-game.',
    cardImage: '/Orihime-3D.png',
    coverImage: '/Orihime-ReSkate.png',
    secondaryImage: '/Orihime-3D.png',
    has3DViewer: true,
    featuredOnHome: true,
    github: 'https://github.com/tuzzooz/mod-orihime-reskate',
  },
  {
    id: 'spider-punk-2099',
    name: 'Spider-Punk 2099 Mod',
    shortName: 'Punk 2099',
    client: 'Pessoal (Spider-Man PC)',
    tech: 'Blender 3D, UV Mapping & DirectXTex',
    date: '2026',
    category: '3d',
    role: '3D Character Artist & Technical Modder',
    shortRole: '3D Character Mod | Rigging anatômico, Shader Emissivo UV e Texturas 4K',
    overview:
      'Port experimental e adaptação 3D do traje Spider-Punk 2099 para o Marvel’s Spider-Man Remastered (PC). O modelo passou por re-rigging completo no Blender para se ajustar à estrutura óssea do Peter Parker, com duas camadas UV, separação de shader emissivo para a viseira luminosa e empacotamento final em .stage via ALERT, DirectXTex e Overstrike.',
    impact:
      'Adaptei a malha e os grupos de vértices ao esqueleto do jogo, refinando a transição anatômica entre braço e clavícula para poses extremas de balanço e ajustando as falanges dos dedos. Remapeei as coordenadas UV entre Equip_01 e Equip_02 para isolar a emissão neon da viseira do material do tecido e construí um atlas de texturas 4K (4096×4096) com correção sRGB e mapa de brilho dedicado.',
    cardImage: '/SpiderPunk-Action.jpg',
    coverImage: '/SpiderPunk-Action.jpg',
    gallery: [
      '/SpiderPunk-Night.jpg',
      '/SpiderPunk-Combat.jpg',
      '/SpiderPunk-Blender-Frente.png',
      '/SpiderPunk-Blender-Costas.png',
    ],
    github: 'https://github.com/tuzzooz/mod-aranha-2099',
  },
  {
    id: 'tecsus-iot',
    name: 'Dashboard Tecsus IoT',
    shortName: 'Tecsus IoT',
    client: 'Tecsus (4º Sem)',
    tech: 'Next.js, TypeScript & Hardware IoT',
    date: '2026',
    category: 'software',
    role: 'SCRUM Master & Desenvolvedor Front-end',
    shortRole: 'SCRUM Master & Front-end | Telemetria e Eficiência Energética',
    overview:
      'Desenvolvimento de uma interface de monitoramento de dados em tempo real para dispositivos IoT da Tecsus, focada em eficiência energética, telemetria de estações meteorológicas/hidrológicas e usabilidade analítica.',
    impact:
      'Liderei a equipe de desenvolvimento como Scrum Master utilizando metodologias ágeis, garantindo entregas semanais consistentes, refinamento de backlog e qualidade de código no frontend em Next.js e TypeScript.',
    cardImage: '/Estações-Page.png',
    coverImage: '/Tecsus.png',
    featuredOnHome: true,
    github: 'https://gitlab.com/the-devs6675810/api-4-sem-tecsus',
  },
  {
    id: 'hq-app',
    name: 'Leitor de HQ',
    client: 'Pessoal',
    tech: 'React Native & Expo',
    date: '2026',
    category: 'software',
    role: 'Desenvolvedor Mobile / UX Design',
    shortRole: 'Mobile & UX Design | App de coleção com Scanner ISBN e cache offline',
    overview:
      'Aplicativo móvel multiplataforma focado em coleção de quadrinhos e mangás, com sistema de cache offline, Scanner de ISBN, Reviews e interface minimalista.',
    impact:
      'Projetei a interface no Figma e desenvolvi o app com React Native e Expo, integrando o scanner da câmera do dispositivo para leitura de ISBN e arquitetura offline-first com cache local das HQs escaneadas.',
    cardImage: '/app-HQ.png',
    coverImage: '/app-HQ.png',
  },
  {
    id: 'music-bot',
    name: 'Chat de Música com Ollama',
    client: 'Pessoal',
    tech: 'Python, Ollama & Telegram',
    date: '2025',
    category: 'software',
    role: 'Engenheiro de IA / Backend',
    shortRole: 'AI & Backend | Bot assíncrono com LLM local via Ollama',
    overview:
      'Um bot inteligente integrado ao Telegram que utiliza a rede neural Ollama para processar linguagem natural e, ao usuário enviar o nome de uma música, retorna a letra e o contexto da faixa.',
    impact:
      'Implementei a integração assíncrona com a API do Telegram e o modelo Ollama rodando localmente, garantindo um tempo de resposta inferior a 2 segundos por interação, além de função de curiosidades sobre o autor da música.',
    cardImage: '/ollamapython.png',
    coverImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/tuzzooz/ChatBot-Musica',
  },
  {
    id: 'gsw-task-manager',
    name: 'Task Manager',
    shortName: 'GSW',
    client: 'GSW (3º Sem)',
    tech: 'Java, Spring Boot & MongoDB',
    date: '2025',
    category: 'software',
    role: 'Desenvolvedor Backend',
    shortRole: 'Full-Stack | Sistema web corporativo para gestão de tarefas',
    overview:
      'Arquitetura e desenvolvimento de um sistema de gerenciamento de tarefas escalável utilizando microsserviços em Java, projetado para suportar alta concorrência corporativa.',
    impact:
      'Desenvolvi os microsserviços principais de autenticação e gestão de tarefas usando Spring Boot, cobrindo 90% do código crítico com testes unitários e de integração.',
    cardImage: '/GSW2.png',
    coverImage: '/GSW1.png',
    featuredOnHome: true,
    github: 'https://github.com/the-devs-department/GSW-2025.2-3Sem',
  },
  {
    id: 'helpnei',
    name: 'Dashboard Empresas',
    shortName: 'Helpnei',
    client: 'Helpnei (2º Sem)',
    tech: 'TypeScript & React',
    date: '2025',
    category: 'software',
    role: 'Desenvolvedor Frontend',
    shortRole: 'UI/UX & Front-end | Design e desenvolvimento de Dashboard B2B',
    overview:
      'Criação de um painel de controle administrativo para a Helpnei, focado na visualização clara de métricas B2B, impacto de patrocínio e gestão de usuários.',
    impact:
      'Refatorei a arquitetura de estado da aplicação utilizando React Context, eliminando prop drilling excessivo e melhorando a manutenibilidade do código para toda a equipe.',
    cardImage: '/Helpnei1port.png',
    coverImage: '/Helpnei2port.png',
    github: 'https://github.com/the-devs-department/HELPNEI-2025.1-2Sem',
  },
  {
    id: 'camara-vereadores',
    name: 'Câmara Vereadores',
    shortName: 'Vereadores',
    client: 'Prof. Massanori (1º Sem)',
    tech: 'Python & Flask',
    date: '2024',
    category: 'software',
    role: 'Desenvolvedor FullStack',
    shortRole: 'Back-end | Scraping de dados e Portal de Transparência',
    overview:
      'Projeto acadêmico para transparência pública, desenvolvendo uma API e interface para consumo e visualização de dados abertos da câmara municipal de São José dos Campos.',
    impact:
      'Fui o responsável pelo front-end da página de Vereadores e pelo scraping automatizado de dados de PDFs em Python, facilitando a visualização de votos e proposições de cada parlamentar.',
    cardImage: '/vereadores.png',
    coverImage: '/vereadores.png',
    github: 'https://github.com/tuzzooz/the-devs-department',
  },
];
