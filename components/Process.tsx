import React from 'react';
import { Send, Cpu, Unlock } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Send className="w-6 h-6" />,
    title: "1. Enviar Solicitud",
    desc: "Contáctenos vía canales encriptados. Analizaremos la viabilidad técnica de inmediato."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "2. Análisis del Sistema",
    desc: "Evaluamos los protocolos de seguridad del objetivo y determinamos el mejor vector de entrada."
  },
  {
    icon: <Unlock className="w-6 h-6" />,
    title: "3. Acceso Seguro",
    desc: "Ejecutamos nuestras herramientas técnicas avanzadas y entregamos los resultados de forma segura."
  }
];

const Process: React.FC = () => {
  const fbLink = "https://www.facebook.com/profile.php?id=61584047322915";

  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-900/50 backdrop-blur-sm z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Proceso de Ejecución</h2>
          <p className="text-cyber-500 font-mono text-base">SIMPLE // DISCRETO // EFECTIVO</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10">
          
          {/* Animated Connecting Line */}
          <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-0.5 overflow-hidden z-0">
             <div className="w-full h-full bg-cyber-800"></div>
             <motion.div 
               initial={{ x: '-100%' }}
               whileInView={{ x: '100%' }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity }}
               className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyber-500 to-transparent opacity-50"
             ></motion.div>
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 bg-cyber-900/80 backdrop-blur border border-cyber-700 group-hover:border-cyber-500 rounded-full flex items-center justify-center text-cyber-400 group-hover:text-cyber-500 mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={fbLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-b-2 border-cyber-500 text-white hover:text-cyber-500 font-bold uppercase tracking-widest text-xs transition-colors hover:shadow-[0_10px_20px_-10px_rgba(0,240,255,0.3)]"
          >
            Iniciar Evaluación &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;