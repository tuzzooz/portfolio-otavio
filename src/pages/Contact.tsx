import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Github, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
  };

  const heroFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 1 } }
  };

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col">
      
      {/* Loading */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "100vh" }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 1 }}
        className="fixed inset-0 z-[9999] bg-manga-black flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-manga-white text-3xl md:text-4xl font-light tracking-tight flex items-center gap-4"
        >
          <span className="w-2 h-2 rounded-full bg-manga-white opacity-50"></span>
          Contato
        </motion.div>
      </motion.div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-32 pt-40 pb-24 md:pb-32 border-b border-manga-white/10">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-manga-green text-6xl md:text-8xl lg:text-[140px] font-medium tracking-tighter uppercase leading-[0.85] mb-12"
        >
          Vamos <br /> Construir.
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="max-w-2xl flex flex-col gap-6 text-manga-white text-xl md:text-2xl font-light leading-relaxed opacity-80"
        >
          <p>
            Não procuro apenas desenhar interfaces bonitas ou escrever código. Procuro entender a jornada do usuário de ponta a ponta e entregar uma experiência que gere valor real.
          </p>
          <p>
            Como designer de UI/UX com background FullStack, meu entendimento não para no protótipo: eu conheço a viabilidade técnica para construir o que projeto. Seja para desenhar um produto do zero, repensar uma experiência complexa ou criar uma interface imersiva, estou pronto para o desafio.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="px-6 md:px-16 lg:px-32 py-24 flex flex-col md:flex-row justify-between gap-24 flex-1">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="flex flex-col gap-16 w-full md:w-1/2"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-manga-white/40 text-sm uppercase tracking-widest font-medium">Atualmente morando em</h2>
            <div className="flex items-center gap-4 text-manga-white text-2xl font-light">
              <MapPin className="text-manga-green w-8 h-8" strokeWidth={1.5} />
              <span>São José dos Campos, SP</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-manga-white/40 text-sm uppercase tracking-widest font-medium">Onde me encontrar</h2>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/tuzzooz" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-manga-white/10 pb-4 text-manga-white text-2xl font-light hover:text-manga-green transition-colors">
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6" />
                  GitHub
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/otávio-vianna-lima-1b26a932a/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-manga-white/10 pb-4 text-manga-white text-2xl font-light hover:text-manga-green transition-colors">
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="flex flex-col gap-6 w-full md:w-1/2 md:items-end"
        >
          <h2 className="text-manga-white/40 text-sm uppercase tracking-widest font-medium md:text-right">Inicie uma conversa</h2>
          
          <a 
            href="mailto:otavioviannalima@gmail.com" 
            className="group flex flex-col md:items-end gap-2 w-fit md:w-auto cursor-pointer"
          >
            <span className="text-5xl md:text-6xl lg:text-7xl font-medium text-manga-white group-hover:text-manga-green transition-colors tracking-tighter">
              Fale Comigo
            </span>
            <div className="flex items-center gap-3 text-manga-green text-base md:text-lg font-medium uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="border-b border-manga-green pb-0.5">Enviar e-mail</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2} />
            </div>
          </a>
        </motion.div>

      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}