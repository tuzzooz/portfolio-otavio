import { useEffect, lazy, Suspense } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github } from 'lucide-react';
import Header from '../components/Header';
import { projectsList } from '../data/projects';

const OrihimeViewer = lazy(() => import('../components/OrihimeViewer'));

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectsList.find((p) => p.id === id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
    },
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
        animate={{ y: '100vh' }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.25 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      />

      <Header />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 pt-40 pb-16 flex flex-col gap-12">
        <Link
          to="/projetos"
          className="flex items-center gap-2 text-manga-white/50 hover:text-manga-green transition-colors w-fit uppercase tracking-widest text-xs font-medium"
        >
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

      {/* Cover / 3D Viewer */}
      <section className="px-6 md:px-16 lg:px-32 pb-24 flex flex-col gap-12">
        {project.has3DViewer ? (
          <>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full">
              <Suspense
                fallback={
                  <div className="w-full h-[520px] md:h-[680px] bg-manga-white/5 flex items-center justify-center text-manga-green uppercase tracking-widest text-sm">
                    Inicializando Cena 3D...
                  </div>
                }
              >
                <OrihimeViewer />
              </Suspense>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="w-full aspect-video bg-manga-white/5 overflow-hidden border border-manga-white/10">
                <img
                  src={project.coverImage}
                  alt={`${project.name} no ReSkate Studio`}
                  className="w-full h-full object-cover"
                />
              </div>
              {project.secondaryImage && (
                <div className="w-full aspect-video bg-manga-white/5 overflow-hidden border border-manga-white/10">
                  <img
                    src={project.secondaryImage}
                    alt={`${project.name} Render Blender`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="w-full aspect-video bg-manga-white/5 overflow-hidden border border-manga-white/10"
            >
              <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover" />
            </motion.div>

            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {project.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="w-full aspect-video bg-manga-white/5 overflow-hidden border border-manga-white/10"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.name} preview ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </>
        )}
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

            {project.github && project.github.startsWith('http') && (
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
    </div>
  );
}
