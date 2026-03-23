import { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Globe, ArrowDownRight } from 'lucide-react';
import Header from '../components/Header';

export default function HeroSection() {
  const contentFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.8 } }
  };

  const pathRef = useRef<SVGPathElement>(null);
  const SVG_HEIGHT = 1000;
  const SVG_WIDTH = 400;

  useAnimationFrame((time) => {
    if (!pathRef.current) return;
    const offset = time * 0.002;
    let pathString = `M ${SVG_WIDTH / 2} 0 `;

    for (let y = 0; y <= SVG_HEIGHT; y += 5) {
      const progress = y / SVG_HEIGHT; 
      const envelope = Math.sin(progress * Math.PI) * Math.abs(Math.sin(progress * Math.PI * 2)) * 220 + 2;
      const x = (SVG_WIDTH / 2) + envelope * Math.sin(y * 0.04 - offset);
      pathString += `L ${x} ${y} `;
    }
    pathRef.current.setAttribute("d", pathString);
  });

  return (
    <section className="relative w-full min-h-screen bg-manga-black overflow-hidden flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
      
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full flex justify-center pointer-events-none z-0 opacity-15 md:opacity-100 transition-opacity duration-300">
        <motion.div 
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="h-full w-full max-w-[500px]"
        >
          <svg 
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} 
            className="h-full w-full text-manga-white" 
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
        </motion.div>
      </div>

      <Header />

      {/* Content */}
      <div className="flex-1 flex flex-col md:grid md:grid-cols-3 justify-center md:items-center gap-16 md:gap-0 w-full z-10 mt-20 md:mt-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center gap-4 md:gap-6 justify-start md:justify-end pr-0 md:pr-12"
        >
          <Globe className="text-manga-green w-12 h-12 md:w-20 md:h-20 flex-shrink-0" strokeWidth={1} />
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-manga-green text-lg md:text-2xl font-medium leading-tight text-left md:text-right">
              Atualmente morando
            </p>
            <p className="text-manga-green text-lg md:text-2xl font-medium leading-tight text-left md:text-right">
              em São José dos Campos
            </p>
          </div>
        </motion.div>

        <div className="hidden md:block"></div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-start gap-6 md:gap-8 pl-0 md:pl-24"
        >
          <ArrowDownRight className="text-manga-green w-10 h-10 md:w-16 md:h-16 hidden md:block -ml-12" strokeWidth={2} />
          <div className="flex flex-col gap-4">
            <h1 className="text-manga-green text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight uppercase">
              UI/UX Design <br />& FullStack
            </h1>
            <p className="text-manga-white text-base md:text-lg font-light max-w-xs leading-relaxed opacity-80">
              Projetando interfaces de ponta a ponta, com lógica, dados e ritmo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}