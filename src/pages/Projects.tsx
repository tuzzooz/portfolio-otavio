import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { projectsList, type ProjectCategory } from '../data/projects';

type FilterType = 'all' | ProjectCategory;

export default function Projects() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const counts = useMemo(() => ({
    all: projectsList.length,
    software: projectsList.filter((p) => p.category === 'software').length,
    '3d': projectsList.filter((p) => p.category === '3d').length,
  }), []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsList;
    return projectsList.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const heroFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 0.35 },
    },
  };

  const filterButtons: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'Todos', count: counts.all },
    { id: 'software', label: 'Software & Full-Stack', count: counts.software },
    { id: '3d', label: '3D & Modding', count: counts['3d'] },
  ];

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col">
      {/* Loading Screen */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100vh' }}
        transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 0.3 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-manga-white text-3xl md:text-4xl font-light tracking-tight flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-manga-green"></span>
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
            Uma seleção de trabalhos onde exploro a interseção entre{' '}
            <span className="text-manga-green">engenharia de software</span>,{' '}
            <span className="text-manga-green">design de interfaces</span> (UI/UX) e{' '}
            <span className="text-manga-green">modelagem 3D</span>.
          </p>
        </motion.div>
      </section>

      {/* Toolbar: Category Filter + View Mode */}
      <section className="border-b border-manga-green/30 px-6 md:px-16 lg:px-32 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-manga-black">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center gap-2.5 cursor-pointer border ${
                  isActive
                    ? 'bg-manga-green text-manga-black border-manga-green'
                    : 'bg-transparent text-manga-white/70 border-manga-white/20 hover:border-manga-green hover:text-manga-green'
                }`}
              >
                <span>{btn.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-manga-black/15 text-manga-black font-bold' : 'bg-manga-white/10 text-manga-green'
                  }`}
                >
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            onClick={() => setViewMode('list')}
            aria-label="Visualização em Lista"
            className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              viewMode === 'list'
                ? 'bg-manga-green text-manga-black'
                : 'bg-transparent text-manga-green hover:bg-manga-green/10'
            }`}
          >
            <Menu className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            aria-label="Visualização em Grade"
            className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-manga-green text-manga-black'
                : 'bg-transparent text-manga-green hover:bg-manga-green/10'
            }`}
          >
            <LayoutGrid className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
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
              key={`list-${activeFilter}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col w-full"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <Link
                    to={`/projetos/${project.id}`}
                    className="group flex flex-col md:grid md:grid-cols-12 gap-4 items-start md:items-center py-8 md:py-10 border-b border-manga-white/10 hover:border-manga-green transition-colors cursor-pointer"
                  >
                    <div className="col-span-5 flex items-center gap-3 w-full pr-4">
                      <span className="text-manga-white text-2xl md:text-3xl font-medium group-hover:text-manga-green transition-colors break-words">
                        {project.name}
                      </span>
                      {project.category === '3d' && (
                        <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-manga-green/40 text-manga-green flex-shrink-0">
                          3D
                        </span>
                      )}
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

                    <div className="flex md:hidden flex-col gap-1 mt-3 w-full">
                      <div className="flex justify-between text-sm text-manga-white/70">
                        <span>{project.client}</span>
                        <span>{project.date}</span>
                      </div>
                      <div className="text-sm text-manga-green opacity-80">{project.tech}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <motion.div
              key={`grid-${activeFilter}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Link to={`/projetos/${project.id}`} className="group flex flex-col gap-6 cursor-pointer">
                    <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden bg-manga-white/5 relative border border-manga-white/10 group-hover:border-manga-green/50 transition-colors">
                      <img
                        src={project.cardImage}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-manga-black/20 group-hover:bg-transparent transition-colors duration-500" />
                      {project.category === '3d' && (
                        <span className="absolute top-4 right-4 bg-manga-black/80 backdrop-blur-sm border border-manga-green/50 text-manga-green text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                          3D & Modding
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-manga-white text-2xl md:text-3xl font-medium group-hover:text-manga-green transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-manga-white/50 text-sm tracking-widest uppercase">{project.tech}</p>
                      </div>
                      <span className="text-manga-white/40 font-light mt-1">{project.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
