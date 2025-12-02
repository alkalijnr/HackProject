import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const fbLink = "https://www.facebook.com/profile.php?id=61584047322915";

  // Abstract HUD Animation Component
  const CyberHUD = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] pointer-events-none hidden lg:block opacity-30"
    >
      <svg viewBox="0 0 500 500" className="w-full h-full text-cyber-500/20 fill-none stroke-current">
        <motion.circle 
          cx="250" cy="250" r="100" 
          strokeWidth="1" 
          strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="250" cy="250" r="150" 
          strokeWidth="0.5" 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          x="150" y="150" width="200" height="200"
          strokeWidth="0.5"
          animate={{ rotate: 45, scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.path
          d="M250 50 L250 150 M250 350 L250 450 M50 250 L150 250 M350 250 L450 250"
          strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <CyberHUD />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-800/80 border border-cyber-500/30 text-cyber-400 text-[10px] font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-500"></span>
            </span>
            SISTEMA SEGURO // CONEXIÓN ENCRIPTADA
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-5 font-sans">
            RECUPERA EL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-500 via-white to-cyber-purple animate-pulse-slow">
              CONTROL DIGITAL
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Servicios profesionales de acceso y recuperación digital. 
            <span className="text-white font-medium"> 100% Anónimo.</span> 
            Sin preguntas. Recuperamos activos digitales utilizando tecnología avanzada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-cyber-500 hover:bg-white text-black font-bold text-base rounded-sm transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">INICIAR RECUPERACIÓN</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#servicios"
              onClick={handleScrollToServices}
              className="px-6 py-3 bg-cyber-900/50 backdrop-blur-sm border border-cyber-700 text-slate-300 hover:text-white hover:border-cyber-500 font-medium text-base rounded-sm transition-all flex items-center gap-2 cursor-pointer hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <Terminal className="w-4 h-4" />
              VER SERVICIOS
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
            {['ENCRIPTADO', 'CONFIDENCIAL', 'RESPUESTA RÁPIDA', 'SEGURO'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-cyber-500">
                <div className="w-1 h-1 bg-cyber-500"></div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;