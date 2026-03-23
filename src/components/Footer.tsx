import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const playlist = [
  { artist:"Nirvana", 
    title: "Smells Like Teen Spirit", src: "/music/smells-like-nirvana.mp3" },
  { artist:"My Chemical Romance",
    title: "I Never Told You What I Do for a Living", src: "/music/mcr-i-never-told-you.mp3" }
];

export default function Footer() {
  const [time, setTime] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
    
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] } }
  };

  const currentSong = playlist[currentSongIndex];

  return (
    <footer className="w-full bg-manga-black px-8 md:px-20 lg:px-32 pt-32 pb-8 flex flex-col relative overflow-hidden">
      
      {/* Audio Engine */}
      <audio ref={audioRef} src={currentSong.src} onEnded={handleNext} />

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-16 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="flex flex-col"
        >
          <h2 className="text-manga-white text-6xl md:text-8xl lg:text-[140px] font-medium tracking-tighter leading-[0.9]">
            Vamos fazer
            <br />
            <span className="text-manga-green">barulho.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          transition={{ delay: 0.2 }}
        >
          <motion.a 
            href="mailto:otavioviannalima@gmail.com"
            whileHover={{ scale: 0.95 }}
            className="group relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-manga-green flex items-center justify-center cursor-pointer transition-colors duration-300"
          >
            <span className="text-manga-black text-lg md:text-xl font-medium z-10">
              Fale Comigo
            </span>
            <div className="absolute inset-0 rounded-full border border-manga-green scale-150 opacity-0 group-hover:animate-ping z-0" />
          </motion.a>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="my-16 md:my-24 border-manga-green/40 w-full origin-left"
      />

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-32 relative z-10">
      {[
        { name: 'otavioviannalima@gmail.com', url: 'mailto:otavioviannalima@gmail.com' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/otávio-vianna-lima-1b26a932a/' },
        { name: 'GitHub', url: 'https://github.com/tuzzooz' },
      ].map((link, i) => (
      <motion.a 
         key={link.name}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        transition={{ delay: 0.3 + (i * 0.1) }}
        href={link.url}
        target={link.url.startsWith('http') ? '_blank' : undefined}
        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="px-8 py-4 rounded-full border border-manga-white/30 text-manga-white hover:bg-manga-white hover:text-manga-black transition-colors duration-300 text-sm tracking-wide"
      >
      {link.name}
    </motion.a>
  ))}
</div>

      {/* Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full text-xs text-manga-white/40 uppercase tracking-widest gap-8 md:gap-0 relative z-10"
      >
        <div className="flex flex-col gap-2">
          <span>Local Time</span>
          <span className="text-manga-white font-medium">{time} BRT</span>
        </div>

        {/* Player */}
        <div className="flex items-center gap-4 group cursor-default">
          <motion.div 
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111] border border-manga-black flex items-center justify-center relative shadow-[0_0_10px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute w-[85%] h-[85%] rounded-full border border-white/5"></div>
            <div className="absolute w-[65%] h-[65%] rounded-full border border-white/5"></div>
            <div className="absolute w-[45%] h-[45%] rounded-full border border-white/5"></div>
            <div className="w-4 h-4 md:w-5 md:h-5 bg-manga-green rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-manga-black rounded-full"></div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="group-hover:text-manga-green transition-colors duration-300">Now Playing</span>
              
              <div className="flex items-center gap-2">
                <button onClick={handlePrev} className="hover:text-manga-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2"></line></svg>
                </button>
                
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-manga-black bg-manga-green w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                  ) : (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  )}
                </button>

                <button onClick={handleNext} className="hover:text-manga-white transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2"></line></svg>
                </button>
              </div>
            </div>
            
            <span className="text-manga-white font-medium group-hover:text-manga-green transition-colors duration-300">
              {currentSong.artist} - {currentSong.title}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
          <span>Design & Code by</span>
          <span className="text-manga-white font-medium">Otávio Vianna &copy; {new Date().getFullYear()}</span>
        </div>
      </motion.div>

    </footer>
  );
}