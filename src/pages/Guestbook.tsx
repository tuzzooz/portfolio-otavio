import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../services/supabase';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Guestbook() {
  const [messages, setMessages] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalMessages, setTotalMessages] = useState(0);
  const [activeTab, setActiveTab] = useState('musicas');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setIsLoading(true);
    
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    const { count } = await supabase
      .from('guestbook')
      .select('*', { count: 'exact', head: true });

    if (!error && data) {
      setMessages(data);
      setTotalMessages(count || data.length);
    }
    
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const { error } = await supabase
      .from('guestbook')
      .insert([{ name, message }]);

    if (!error) {
      setName('');
      setMessage('');
      fetchMessages();
    }
    setIsSubmitting(false);
  };

  // Função para transformar URLs em texto em links clicáveis
  const renderMessageWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-manga-green hover:text-manga-white transition-colors underline decoration-manga-green/30 underline-offset-4 break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const tabContent: Record<string, any> = {
    musicas: {
      title: "On Repeat",
      items: ["Nirvana - Smells Like Teen Spirit", "My Chemical Romance - Demolition Lovers", "Los Hermanos - Último Romance", "My Chemical Romance - The Foundations of Decay", "LISA - Rockstar"]
    },
    livros: {
      title: "Ando Lendo",
      items: [" UK Design Council - Eleven Lessons: Managing Design in Eleven Global Companies", "Scott Snyder - Absolute Batman", "Don Norman - The Design of Everyday Things", "Sumiko Arai - The Guy She Was Interested In Wasn't a Guy at All", "Gene Kim - The DevOps Handbook"]
    },
    stack: {
      title: "Aprendendo / Desenvolvendo",
      items: ["Modelagem no Blender", "Me aprofundando no Framer", "Expo", "Remodelagem do Spotify"]
    }
  };

  return (
    <div className="min-h-screen w-full bg-manga-black flex flex-col relative overflow-x-hidden">
      
      {/* Loading */}
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
          Guestbook
        </motion.div>
      </motion.div>

      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-16 px-8 md:px-20 lg:px-32">
        
        <div className="absolute top-0 right-0 w-full h-[70vh] md:top-auto md:bottom-0 md:w-[60%] md:h-[90%] pointer-events-none z-0 opacity-10 md:opacity-90 transition-opacity duration-500">
          <img 
            src="yuriverde_waifu2x_art_scan_noise3_scale.png" 
            alt="Artwork" 
            className="w-full h-full object-contain object-right-top md:object-right-bottom mt-20 md:mt-0 opacity-50 md:opacity-100"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-manga-green text-6xl md:text-8xl lg:text-[130px] font-medium tracking-tighter uppercase mb-12 leading-[0.85]"
          >
            Guestbook
          </motion.h1>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h2 className="text-manga-white text-3xl md:text-4xl font-light mb-4">
              Marque a sua presença.
            </h2>
            <p className="text-manga-white/50 text-sm md:text-base mb-12 max-w-md leading-relaxed">
              Deixe o seu portfólio, uma mensagem ou uma recomendação de música para mim. O espaço é seu.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
              <input
                type="text"
                placeholder="O seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-manga-white/20 pb-3 text-manga-white placeholder:text-manga-white/30 focus:outline-none focus:border-b-manga-green transition-colors"
                required
              />
              <textarea
                placeholder="A sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className="w-full bg-transparent border-b border-manga-white/20 pb-3 pt-3 text-manga-white placeholder:text-manga-white/30 focus:outline-none focus:border-b-manga-green transition-colors resize-none overflow-hidden"
                style={{ minHeight: '40px' }}
                required
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start px-10 py-4 bg-manga-green text-manga-black rounded-full font-medium hover:scale-105 transition-transform disabled:opacity-50 mt-4"
              >
                {isSubmitting ? 'A enviar...' : 'Assinar Guestbook'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Messages & Status Block */}
      <section className="bg-manga-black px-8 md:px-20 lg:px-32 py-24 relative z-30 border-t border-manga-white/5">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            
            {/* Contador */}
            {!isLoading && totalMessages > 0 && (
              <div className="text-manga-white/40 text-sm font-light uppercase tracking-widest border-b border-manga-white/10 pb-4">
                {totalMessages} {totalMessages === 1 ? 'pessoa já passou' : 'pessoas já passaram'} por aqui
              </div>
            )}

            {/* Skeleton Loading */}
            {isLoading ? (
              <>
                {[1, 2, 3].map((skeleton) => (
                  <div key={skeleton} className="border border-manga-white/5 p-8 rounded-lg flex flex-col gap-4 animate-pulse">
                    <div className="h-4 bg-manga-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-manga-white/10 rounded w-1/2"></div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="h-3 bg-manga-green/20 rounded w-20"></div>
                      <div className="h-3 bg-manga-white/10 rounded w-16"></div>
                    </div>
                  </div>
                ))}
              </>
            ) : messages.length === 0 ? (
              <p className="text-manga-white/40 font-light">Nenhuma mensagem ainda. Seja o primeiro!</p>
            ) : (
              messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-manga-white/10 p-8 rounded-lg flex flex-col gap-4"
                >
                  <p className="text-manga-white text-lg font-light leading-relaxed whitespace-pre-wrap">
                    {renderMessageWithLinks(msg.message)}
                  </p>

                  <div className="flex justify-between items-center text-xs text-manga-white/40 uppercase tracking-widest mt-2">
                    <span className="text-manga-green font-medium">{msg.name}</span>
                    <span>{new Date(msg.created_at).toLocaleDateString('pt-BR')}</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Status Block */}
          <div className="w-full md:w-1/3 sticky top-32 border border-manga-white/10 rounded-lg p-8 bg-manga-black">
            <h3 className="text-manga-white text-xl font-medium mb-6">Durante Meu Tempo Livre</h3>
            
            <div className="flex gap-6 border-b border-manga-white/10 mb-6">
              <button 
                onClick={() => setActiveTab('musicas')}
                className={`pb-2 text-sm transition-colors ${activeTab === 'musicas' ? 'text-manga-green border-b-2 border-manga-green' : 'text-manga-white/40 hover:text-manga-white'}`}
              >
                Músicas
              </button>
              <button 
                onClick={() => setActiveTab('livros')}
                className={`pb-2 text-sm transition-colors ${activeTab === 'livros' ? 'text-manga-green border-b-2 border-manga-green' : 'text-manga-white/40 hover:text-manga-white'}`}
              >
                Livros
              </button>
              <button 
                onClick={() => setActiveTab('stack')}
                className={`pb-2 text-sm transition-colors ${activeTab === 'stack' ? 'text-manga-green border-b-2 border-manga-green' : 'text-manga-white/40 hover:text-manga-white'}`}
              >
                Stack
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <span className="text-xs text-manga-white/40 uppercase tracking-widest">{tabContent[activeTab].title}</span>
                <ul className="flex flex-col gap-3">
                  {tabContent[activeTab].items.map((item: string, index: number) => (
                    <li key={index} className="text-manga-white text-sm font-light flex items-start gap-3">
                    <span className="w-1 h-1 bg-manga-green rounded-full flex-shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}