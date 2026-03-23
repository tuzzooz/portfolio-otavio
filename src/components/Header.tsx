import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const contentFadeUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] } }
  };

  return (
    <>
      {/* Header */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center z-[50] px-6 py-8 md:px-16 md:py-12 w-screen max-w-full box-border pointer-events-auto">
        <motion.div initial="hidden" animate="visible" variants={contentFadeUp} className="text-manga-green text-sm md:text-base font-medium flex-1 min-w-0 pr-4">
          <Link to="/" className="hover:text-manga-white transition-colors duration-300 block truncate">
            Code by Otávio Vianna
          </Link>
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={contentFadeUp} className="hidden md:flex gap-16 text-manga-green text-sm md:text-base">
          <Link to="/projetos" className="hover:text-manga-white transition-colors duration-300">Projetos</Link>
          <Link to="/sobre" className="hover:text-manga-white transition-colors duration-300">Sobre Mim</Link>
          <Link to="/guestbook" className="hover:text-manga-white transition-colors duration-300">Guestbook</Link>
          <Link to="/contato" className="hover:text-manga-white transition-colors duration-300 whitespace-nowrap">Contato</Link>
        </motion.div>

        <motion.button 
          initial="hidden" animate="visible" variants={contentFadeUp}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-manga-green text-sm font-medium uppercase tracking-widest flex-shrink-0"
        >
          {isMobileMenuOpen ? 'Fechar' : 'Menu'}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-manga-black z-[9998] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link to="/projetos" onClick={() => setIsMobileMenuOpen(false)} className="text-manga-white text-3xl font-light hover:text-manga-green transition-colors">Projetos</Link>
            <Link to="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-manga-white text-3xl font-light hover:text-manga-green transition-colors">Sobre Mim</Link>
            <Link to="/guestbook" onClick={() => setIsMobileMenuOpen(false)} className="text-manga-white text-3xl font-light hover:text-manga-green transition-colors">Guestbook</Link>
            <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)} className="text-manga-white text-3xl font-light hover:text-manga-green transition-colors">Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}