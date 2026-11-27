import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const CDViewer = lazy(() => import('../components/CDViewer'));

const expertiseItems = [
  {
    num: '01',
    category: 'Back-end & Arquitetura',
    title: 'Core Logic & Enterprise',
    desc: 'C# (.NET Core / ASP.NET), Java (Spring Boot), Python (ETL / Flask), Clean Architecture, DDD, SOLID, PostgreSQL, PostGIS, SQL Server, MongoDB e Docker.',
  },
  {
    num: '02',
    category: 'Front-end & Mobile',
    title: 'Interaction & Interfaces',
    desc: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js / React Three Fiber, Flutter e React Native (Expo).',
  },
  {
    num: '03',
    category: 'Design & 3D Technical Art',
    title: 'UI/UX, Blender & Modding',
    desc: 'Prototipagem no Figma, Design Systems, Modelagem e Re-rigging no Blender (Python bpy), UV Mapping, Baking de Texturas 2K/4K e Engenharia Reversa.',
  },
];

const timelineItems = [
  {
    period: 'Atualmente',
    role: 'Desenvolvedor Full Stack / Software Intern',
    org: 'ITO (Ito-eight)',
    details:
      'Desenvolvimento de sistemas corporativos de gestão de ativos e inventário patrimonial utilizando C# (.NET Core), React, TypeScript e SQL. Implementação de Clean Architecture, cálculo automatizado de depreciação, conciliação cadastral e testes.',
  },
  {
    period: '2024 — 2027',
    role: 'Desenvolvimento de Software Multiplataforma (5º Sem)',
    org: 'FATEC São José dos Campos — Prof. Jessen Vidal',
    details:
      'Desenvolvimento semestral de projetos reais em parceria com empresas de tecnologia (Tecsys, Tecsus, GSW, Helpnei), atuando como Desenvolvedor Full Stack, Engenheiro de ETL Geoespacial (BDGD/ANEEL) e Scrum Master.',
  },
  {
    period: 'Certificações',
    role: 'Inglês Avançado / Fluente — Nível C1 Internacional',
    org: 'Cambridge English (CAE) & TOEIC',
    details:
      'Dupla certificação internacional de proficiência: Cambridge Certificate in Advanced English (C1 Oficial — Score 180) e TOEIC (905 / 990 pontos).',
  },
];

export default function About() {
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMount3D(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] },
    },
  };

  const heroFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 0.4 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col">
      {/* Loading Screen */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100vh' }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.3 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="text-manga-white text-3xl md:text-4xl font-light tracking-tight flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-manga-green"></span>
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
          className="w-full md:w-[900px] lg:w-[1100px] xl:w-[1200px] h-[520px] md:h-[750px] lg:h-[850px] flex items-center justify-center relative z-20"
        >
          <div className="w-full h-full">
            {mount3D && (
              <Suspense fallback={null}>
                <CDViewer />
              </Suspense>
            )}
          </div>
          <div className="absolute inset-0 bg-manga-green/10 rounded-full blur-[150px] pointer-events-none z-[-1]" />
        </motion.div>
      </section>

      {/* Bio */}
      <section className="px-8 md:px-20 lg:px-32 py-24 flex flex-col lg:flex-row gap-16 lg:gap-32 border-b border-manga-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex-1"
        >
          <p className="text-manga-white text-2xl md:text-4xl font-light leading-snug">
            Acredito que o design não é apenas como algo se parece, mas como ele{' '}
            <span className="text-manga-green">ecoa</span> na experiência de quem o usa.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="flex-1 flex flex-col gap-8 text-manga-white/70 text-lg md:text-xl font-light leading-relaxed"
        >
          <p>
            Meu nome é Otávio Vianna, e minha trajetória é movida pela curiosidade de entender como as coisas
            funcionam de ponta a ponta — da arquitetura de APIs em C#/.NET e Java Spring até a estética de uma
            interface ou a malha 3D de um personagem.
          </p>
          <p>
            Atualmente atuo como Desenvolvedor Full Stack na <span className="text-manga-white font-normal">ITO</span> e
            curso o 5º semestre de Desenvolvimento de Software Multiplataforma na{' '}
            <span className="text-manga-white font-normal">FATEC São José dos Campos</span>. Quando não estou
            arquitetando sistemas corporativos ou prototipando no Figma, estou modelando no Blender ou explorando
            ritmos no live coding.
          </p>
        </motion.div>
      </section>

      {/* Trajectory & Credentials */}
      <section className="px-8 md:px-20 lg:px-32 py-24 flex flex-col gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="text-xs uppercase tracking-widest text-manga-green font-medium">Trajetória & Credenciais</span>
          <h2 className="text-manga-white text-4xl md:text-6xl font-medium tracking-tight mt-3">
            Experiência, Formação & Idiomas
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-manga-white/10">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.org}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-manga-white/10 items-start"
            >
              <div className="md:col-span-3 text-manga-green text-sm uppercase tracking-widest font-medium pt-1">
                {item.period}
              </div>
              <div className="md:col-span-4 flex flex-col gap-1">
                <h3 className="text-manga-white text-xl md:text-2xl font-medium">{item.role}</h3>
                <span className="text-manga-white/50 text-sm uppercase tracking-widest">{item.org}</span>
              </div>
              <div className="md:col-span-5 text-manga-white/70 text-base md:text-lg font-light leading-relaxed">
                {item.details}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="px-8 md:px-20 lg:px-32 py-24 bg-manga-green text-manga-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {expertiseItems.map((item) => (
            <div key={item.num} className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest font-bold opacity-60 decoration-2 offset-4">
                {item.num}. {item.category}
              </span>
              <h3 className="text-3xl font-medium">{item.title}</h3>
              <p className="font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
