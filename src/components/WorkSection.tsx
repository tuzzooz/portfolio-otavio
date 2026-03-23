import { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { 
    id: 1, 
    name: 'Vereadores', 
    tech: 'Python & Flask',
    role: 'Back-end | Scraping de dados e Portal de Transparência',
    image: '/projetos/vereadores.jpg' 
  },
  { 
    id: 2, 
    name: 'Helpnei', 
    tech: 'React & Tailwind',
    role: 'UI/UX & Front-end | Design e desenvolvimento de Dashboard',
    image: '/projetos/Helpnei.jpg'
  },
  { 
    id: 3, 
    name: 'GSW', 
    tech: 'Java, Spring & MongoDB',
    role: 'Full-Stack | Sistema web para gestão de tarefas',
    image: '/projetos/GSW.jpg'
  },
];

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left - 200);
    cursorY.set(e.clientY - rect.top - 150);
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0, 0, 0.2, 1] as [number, number, number, number] } }
  };

  return (
    <section className="w-full bg-manga-black pt-48 pb-24 md:pt-64 flex flex-col gap-32">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full px-8 md:px-20 lg:px-32">
        <motion.h2 
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-manga-white text-2xl md:text-3xl max-w-lg leading-relaxed font-light"
        >
          Tenho o objetivo de ajudar marcas a se destacarem nessa era digital.
        </motion.h2>
        
        <div className="flex flex-col items-end gap-8">
          <motion.p 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-manga-white text-base md:text-lg text-right max-w-xs font-light leading-relaxed"
          >
            Adoro design, expressão e interação. Acredito que para se destacar é preciso inovar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2, delay: 0 } }} 
            className="cursor-pointer group"
          >
            <Link to="/sobre">
              <motion.div 
                animate={{ rotate: [0, -360] }} 
                transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: [0, 0, 1, 1] as [number, number, number, number] }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-manga-green border-2 border-transparent group-hover:bg-manga-black group-hover:border-manga-green flex items-center justify-center relative text-manga-black group-hover:text-manga-green overflow-hidden transition-colors duration-300"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="none"
                  />
                  <text className="text-[12px] md:text-[16px] font-bold uppercase tracking-widest fill-current transition-colors duration-300">
                    <textPath href="#circlePath" startOffset="0%">
                      SOBRE MIM • SOBRE MIM •
                    </textPath>
                  </text>
                </svg>
                
                <div className="w-2.5 h-2.5 rounded-full bg-manga-black group-hover:bg-manga-green absolute z-10 transition-colors duration-300" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveProject(null)}
        className="relative flex flex-col w-full border-t border-manga-green/40"
      >
        {projects.map((proj, index) => (
          <motion.div 
            key={proj.id}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setActiveProject(proj.id)}
            className="flex flex-col md:flex-row justify-between md:items-center py-10 md:py-16 border-b border-manga-green/40 cursor-pointer group relative z-10 px-8 md:px-20 lg:px-32"
          >
            <h3 className="text-manga-green text-5xl md:text-8xl font-medium tracking-tight group-hover:translate-x-6 group-hover:text-manga-white/20 transition-all duration-500 ease-out">
              {proj.name}
            </h3>
            
            <div className="flex flex-col items-start md:items-end mt-6 md:mt-0 group-hover:-translate-x-6 transition-transform duration-500 ease-out">
              <span className="text-manga-green text-lg md:text-2xl font-light group-hover:text-manga-white/30 transition-colors duration-500">
                {proj.tech}
              </span>
              <span className="text-manga-white/60 text-sm md:text-base font-light mt-2 max-w-xs md:text-right group-hover:text-manga-white/20 transition-colors duration-500">
                {proj.role}
              </span>
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{
            x: cursorX,
            y: cursorY,
            opacity: activeProject !== null ? 1 : 0,
            scale: activeProject !== null ? 1 : 0.8,
          }}
          className="absolute top-0 left-0 w-[400px] h-[300px] pointer-events-none z-0 overflow-hidden rounded-lg shadow-2xl flex items-center justify-center"
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                activeProject === proj.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={proj.image} 
                alt={`Preview do projeto ${proj.name}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-manga-black/20 mix-blend-overlay"></div>
            </div>
          ))}

          <div className={`absolute z-20 w-24 h-24 rounded-full bg-manga-green flex items-center justify-center transition-opacity duration-500 ${activeProject !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-manga-black">
              <path
                id="circlePathView"
                d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                fill="none"
              />
              <text className="text-[12px] font-bold uppercase tracking-widest fill-current">
                <textPath href="#circlePathView" startOffset="0%">
                  VER PROJETO • VER PROJETO • 
                </textPath>
              </text>
            </svg>
            <div className="w-2 h-2 rounded-full bg-manga-black absolute" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}