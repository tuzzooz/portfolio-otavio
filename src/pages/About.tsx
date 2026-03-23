import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CDViewer from '../components/CDviewer'; 
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMount3D(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const heroFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 1.2 } }
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
          Sobre Mim
        </motion.div>
      </motion.div>

      <Header />

      {/* Hero */}
      <section className="px-8 md:px-20 lg:px-32 pt-32 md:pt-40 pb-20 border-b border-manga-green/20 flex flex-col-reverse md:flex-row justify-between items-center w-full gap-12">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-manga-green text-7xl md:text-9xl lg:text-[150px] xl:text-[180px] font-medium tracking-tighter leading-[0.85] uppercase md:max-w-xl z-10"
        >
          Sobre <br /> Mim
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="w-full md:w-[900px] lg:w-[1100px] xl:w-[1200px] h-[600px] md:h-[750px] lg:h-[850px] flex items-center justify-center relative z-20"
        >
          <div className="w-full h-full">
            {mount3D && <CDViewer />}
          </div>
          <div className="absolute inset-0 bg-manga-green/10 rounded-full blur-[150px] pointer-events-none z-[-1]" />
        </motion.div>
      </section>

      {/* Bio */}
      <section className="px-8 md:px-20 lg:px-32 py-24 flex flex-col lg:flex-row gap-16 lg:gap-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
          <p className="text-manga-white text-2xl md:text-4xl font-light leading-snug">
            Acredito que o design não é apenas como algo se parece, mas como ele <span className="text-manga-green">ecoa</span> na experiência de quem o usa. 
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="flex-1 flex flex-col gap-8 text-manga-white/70 text-lg md:text-xl font-light leading-relaxed">
          <p>Meu nome é Otávio Vianna, e minha trajetória é movida pela curiosidade de entender como as coisas funcionam de ponta a ponta. Comecei no código pesado do FullStack, mas descobri minha verdadeira paixão na intersecção entre a lógica e a estética.</p>
          <p>Hoje, foco em criar interfaces que unem o minimalismo do UI/UX com a robustez de sistemas modernos. Quando não estou prototipando no Figma ou refinando componentes em React, você provavelmente me encontrará explorando ritmos e frequências no live coding.</p>
        </motion.div>
      </section>

      {/* Expertise */}
      <section className="px-8 md:px-20 lg:px-32 py-24 bg-manga-green text-manga-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {['Design', 'Front-end', 'Back-end'].map((skill, i) => (
            <div key={skill} className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-bold opacity-50 decoration-2 offset-4">0{i+1}. {skill}</span>
              <h3 className="text-3xl font-medium">{i === 0 ? 'UI/UX & Visual' : i === 1 ? 'Interaction' : 'Core Logic'}</h3>
              <p className="font-light">{i === 0 ? 'Figma, Adobe Suite, Prototipagem...' : i === 1 ? 'React, Next.js, Framer Motion...' : 'Node.js, Java Spring Boot, MongoDB...'}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}