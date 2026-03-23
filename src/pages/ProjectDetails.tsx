import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projectsDatabase = {
  'tecsus-iot': {
    name: 'IoT Dashboard',
    client: 'Tecsus',
    tech: 'Hardware & Next.js',
    date: '2026',
    role: 'SCRUM Master',
    overview: 'Desenvolvimento de uma interface de monitoramento de dados em tempo real para dispositivos IoT da Tecsus, focada em eficiência energética e usabilidade analítica.',
    impact: 'Liderei a equipe de desenvolvimento utilizando metodologias ágeis, tentando sempre garantir entregas semanais e manter a qualidade do produto.',
    image: '/Tecsus.png',
    github: 'https://gitlab.com/the-devs6675810/api-4-sem-tecsus'
  },
  'music-bot': {
    name: 'Ollama Music Bot',
    client: 'Pessoal',
    tech: 'Python, Ollama & Telegram',
    date: '2025',
    role: 'Engenheiro de IA / Backend',
    overview: 'Um bot inteligente integrado ao Telegram que utiliza a rede neural Ollama para processar linguagem natural e ao usuário mandar o nome de uma música, ele já retorna a letra da mesma.',
    impact: 'Implementei a integração assíncrona com a API do Telegram e o modelo Ollama rodando localmente, garantindo um tempo de resposta inferior a 2 segundos por interação. Também criei uma função de curiosidade que retorna informações sobre o autor da musica.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/tuzzooz/ChatBot-Musica'
  },
  'gsw-task-manager': {
    name: 'Task Manager',
    client: 'GSW',
    tech: 'Microserviços & Java',
    date: '2025',
    role: 'Desenvolvedor Backend',
    overview: 'Arquitetura e desenvolvimento de um sistema de gerenciamento de tarefas escalável utilizando microserviços em Java, projetado para suportar alta concorrência.',
    impact: 'Desenvolvi os microserviços principais de autenticação e gestão de tarefas usando Spring Boot, cobrindo 90% do código crítico com testes unitários e de integração.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/seu-usuario/gsw-task-manager'
  },
  'helpnei': {
    name: 'Dashboard Empresas',
    client: 'Helpnei',
    tech: 'Typescript & React',
    date: '2025',
    role: 'Desenvolvedor Frontend',
    overview: 'Criação de um painel de controle administrativo para a Helpnei, focado na visualização clara de métricas B2B e gestão de usuários.',
    impact: 'Refatorei a arquitetura de estado da aplicação utilizando React Context, eliminando prop drilling excessivo e melhorando a manutenibilidade do código para o time.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    github: 'https://github.com/seu-usuario/helpnei-dashboard'
  },
  'hq-app': {
    name: 'Leitor de HQ',
    client: 'Pessoal',
    tech: 'React Native & Expo',
    date: '2025',
    role: 'Desenvolvedor Mobile / UX Design',
    overview: 'Aplicativo móvel multiplataforma focado em coleção de quadrinhos e mangás, com sistema de cache offline, Scanner de IBSN, Reviews e interface minimalista.',
    impact: 'Projetei a interface no Figma e desenvolvi o app com React Native e Expo, usei o scanner da camera do dispositivo para leitura de IBSN. Aplicativo funcionara também offline, usando cache para armazenar as HQs que o usuário já scanneou.',
    image: '/app-HQ.png',
    github: 'Em breve no GitHub!'
  },
  'camara-vereadores': {
    name: 'Câmara Vereadores',
    client: 'Prof. Massanori',
    tech: 'Python & Flask',
    date: '2024',
    role: 'Desenvolvedor FullStack',
    overview: 'Projeto acadêmico para transparência pública, desenvolvendo uma API e interface para consumo e visualização de dados abertos da câmara municipal.',
    impact: 'Fui o responsável pelo front-end da página de Vereadores. Usando o python fiz scraping de dados com os PDFs e facilitei a visualização de votos de cada vereador usando um dashboard.',
    image: '/vereadores.png',
    github: 'https://github.com/tuzzooz/the-devs-department'
  }
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectsDatabase[id as keyof typeof projectsDatabase] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-manga-black flex flex-col items-center justify-center text-manga-white">
        <h1 className="text-4xl font-medium mb-4">Projeto não encontrado</h1>
        <button onClick={() => navigate('/projetos')} className="text-manga-green hover:underline">
          Voltar para Projetos
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col">
      
      {/* Loading */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      />

      <Header />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 pt-40 pb-16 flex flex-col gap-12">
        <Link to="/projetos" className="flex items-center gap-2 text-manga-white/50 hover:text-manga-green transition-colors w-fit uppercase tracking-widest text-xs font-medium">
          <ArrowLeft className="w-4 h-4" />
          Voltar aos projetos
        </Link>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-manga-green text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter uppercase leading-[0.9] mb-8">
            {project.name}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm uppercase tracking-widest text-manga-white/50 border-t border-manga-white/10 pt-8 mt-12">
            <div className="flex flex-col gap-2">
              <span className="text-manga-white/30">Cliente</span>
              <span className="text-manga-white">{project.client}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-manga-white/30">Papel</span>
              <span className="text-manga-white">{project.role}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-manga-white/30">Tecnologia</span>
              <span className="text-manga-white">{project.tech}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-manga-white/30">Ano</span>
              <span className="text-manga-white">{project.date}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cover */}
      <section className="px-6 md:px-16 lg:px-32 pb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full aspect-video bg-manga-white/5 overflow-hidden"
        >
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-16 lg:px-32 pb-32 flex flex-col gap-16 md:gap-24">
        
        {/* Visao Geral */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32">
          <div className="w-full md:w-1/3 text-manga-green text-2xl md:text-3xl font-light uppercase tracking-tight">
            Visão Geral
          </div>
          <div className="w-full md:w-2/3 text-manga-white text-lg md:text-xl font-light leading-relaxed opacity-80">
            <p>{project.overview}</p>
          </div>
        </div>

        {/* Impacto */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32">
          <div className="w-full md:w-1/3 text-manga-green text-2xl md:text-3xl font-light uppercase tracking-tight">
            Meu Impacto
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-start gap-8">
            <div className="text-manga-white text-lg md:text-xl font-light leading-relaxed opacity-80">
              <p>{project.impact}</p>
            </div>
            
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-manga-green text-manga-green rounded-full hover:bg-manga-green hover:text-manga-black transition-colors font-medium uppercase tracking-widest text-sm"
              >
                <Github className="w-5 h-5" />
                Ver Repositório
              </a>
            )}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}