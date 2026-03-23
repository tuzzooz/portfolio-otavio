import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const projectsData = [
  {
    id: 'tecsus-iot',
    name: 'Dashboard Tecsus IoT',
    client: 'Tecsus',
    tech: 'Hardware & Next.js',
    date: '2026',
    image: '/Estações-Page.png'
  },
  {
    id: 'hq-app',
    name: 'Leitor de HQ',
    client: 'Pessoal',
    tech: 'React Native & Expo',
    date: '2026',
    image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'music-bot',
    name: 'Chat de Música com Ollama',
    client: 'Pessoal',
    tech: 'Python, Ollama & Telegram',
    date: '2025',
    image: '/ollamapython.png'
  },
  {
    id: 'gsw-task-manager',
    name: 'Task Manager',
    client: 'GSW',
    tech: 'Microserviços & Java',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'helpnei',
    name: 'Dashboard Empresas',
    client: 'Helpnei',
    tech: 'Typescript & React',
    date: '2025',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'camara-vereadores',
    name: 'Câmara Vereadores',
    client: 'Prof. Massanori',
    tech: 'Python & Flask',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Projects() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const heroFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 1 } }
  };

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col">
      
      {/* Loading Screen */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-manga-white text-3xl md:text-4xl font-light tracking-tight flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-manga-white opacity-50"></span>
          Projetos
        </motion.div>
      </motion.div>

      <Header />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 pt-40 pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-manga-green text-6xl md:text-8xl lg:text-[140px] font-medium tracking-tighter uppercase leading-[0.85]"
        >
          Meus <br /> Projetos
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="max-w-sm mb-2"
        >
          <p className="text-manga-white/50 text-base md:text-lg font-light leading-relaxed">
            Uma seleção de trabalhos recentes onde exploro a interseção entre o <span className="text-manga-green">design de interfaces</span> (UI/UX) e a <span className="text-manga-green">engenharia de software</span>, desenvolvendo soluções de ponta a ponta.
          </p>
        </motion.div>
      </section>

      {/* Toolbar - Linha superior removida (border-b apenas) */}
      <section className="border-b border-manga-green/30 px-6 md:px-16 lg:px-32 py-4 flex justify-end items-center gap-4 bg-manga-black">
        <button 
          onClick={() => setViewMode('list')}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-manga-green text-manga-black' : 'bg-transparent text-manga-green hover:bg-manga-green/10'}`}
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
        <button 
          onClick={() => setViewMode('grid')}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-manga-green text-manga-black' : 'bg-transparent text-manga-green hover:bg-manga-green/10'}`}
        >
          <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
      </section>

      {/* Content */}
      <section className="px-6 md:px-16 lg:px-32 py-12 flex-1 min-h-[50vh]">
        
        <AnimatePresence>
          {viewMode === 'list' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="hidden md:grid grid-cols-12 gap-4 pb-4 text-manga-green text-xs tracking-widest uppercase border-b border-manga-green/30"
            >
              <div className="col-span-5">Nome</div>
              <div className="col-span-3 text-left">Cliente</div>
              <div className="col-span-3 text-left">Tecnologias</div>
              <div className="col-span-1 text-right">Data</div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          
          {/* List View */}
          {viewMode === 'list' && (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full"
            >
              {projectsData.map((project) => (
                <Link 
                  to={`/projetos/${project.id}`} 
                  key={project.id}
                  className="group flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center py-8 md:py-10 border-b border-manga-white/10 hover:border-manga-green transition-colors cursor-pointer"
                >
                  <div className="col-span-5 text-manga-white text-2xl md:text-3xl font-medium group-hover:text-manga-green transition-colors w-full break-words pr-4">
                    {project.name}
                  </div>
                  
                  <div className="hidden md:block col-span-3 text-left text-manga-white/70 text-lg">
                    {project.client}
                  </div>
                  <div className="hidden md:block col-span-3 text-left text-manga-white/70 text-lg">
                    {project.tech}
                  </div>
                  <div className="hidden md:block col-span-1 text-right text-manga-white/70 text-lg">
                    {project.date}
                  </div>

                  {/* Mobile Version */}
                  <div className="flex md:hidden flex-col gap-1 mt-3 w-full">
                    <div className="flex justify-between text-sm text-manga-white/70">
                      <span>{project.client}</span>
                      <span>{project.date}</span>
                    </div>
                    <div className="text-sm text-manga-green opacity-80">
                      {project.tech}
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8"
            >
              {projectsData.map((project) => (
                <Link 
                  to={`/projetos/${project.id}`} 
                  key={project.id}
                  className="group flex flex-col gap-6 cursor-pointer"
                >
                  <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden bg-manga-white/5 relative">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-manga-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-manga-white text-2xl md:text-3xl font-medium group-hover:text-manga-green transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-manga-white/50 text-sm tracking-widest uppercase">
                        {project.tech}
                      </p>
                    </div>
                    <span className="text-manga-white/40 font-light mt-1">{project.date}</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
}