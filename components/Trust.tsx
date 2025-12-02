import React from 'react';
import { EyeOff, Shield, Server, Ghost } from 'lucide-react';
import { motion } from 'framer-motion';

const Trust: React.FC = () => {
  return (
    <section id="garantia" className="py-16 bg-transparent border-y border-cyber-800/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cyber-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyber-700/30 relative overflow-hidden shadow-2xl">
          
          {/* Decorative glowing orb */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyber-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Anonimato y <span className="text-cyber-500">Tecnología</span>
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed text-base font-light">
                En <strong>Vargas El Hacker</strong>, operamos bajo total discreción. 
                Nuestros servicios están diseñados para brindar resultados sin comprometer su identidad utilizando encriptación de última generación.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: <Ghost className="w-5 h-5" />, title: "Anonimato Total", desc: "No se requiere identificación personal. Su privacidad es primordial." },
                  { icon: <Server className="w-5 h-5" />, title: "Protocolos Avanzados", desc: "Métodos propietarios para evadir restricciones de seguridad estándar." },
                  { icon: <Shield className="w-5 h-5" />, title: "Privacidad Garantizada", desc: "Encriptación de grado militar con protocolos de auto-eliminación." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-cyber-500/10 rounded-lg text-cyber-500 mt-1 border border-cyber-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-black/40 p-8 rounded-2xl border border-cyber-800/50 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cyber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-cyber-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyber-700 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                   <EyeOff className="w-8 h-8 text-cyber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discreción Asegurada</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  "Nuestra misión es la recuperación y el acceso. Somos la solución técnica para cuando la tecnología le cierra la puerta. Sin registros. Sin rastros."
                </p>
                <div className="inline-block px-4 py-1.5 border border-cyber-500/30 text-cyber-500 text-[10px] font-mono rounded-full bg-cyber-500/5 tracking-widest uppercase">
                  ENCRIPTADO Y SEGURO
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;