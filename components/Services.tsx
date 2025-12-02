import React from 'react';
import { Smartphone, Search, Database, ShieldCheck, Zap, Lock, Eye, Copy, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const socialServices = [
  {
    platform: "WHATSAPP",
    color: "from-[#25D366] to-[#128C7E]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 filter drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    items: ["HACKEO", "RECUPERACIÓN", "ESPIAR", "CLONAR"]
  },
  {
    platform: "FACEBOOK",
    color: "from-[#1877F2] to-[#0D4F99]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 filter drop-shadow-[0_0_10px_rgba(24,119,242,0.5)]">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.436l-1.054 3.667h-2.382v7.98h-4.843Z"/>
      </svg>
    ),
    items: ["HACKEO", "RECUPERACIÓN", "ELIMINAR CUENTA", "ELIMINAR PÁGINA"]
  },
  {
    platform: "TIKTOK",
    color: "from-[#000000] to-[#25F4EE]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 filter drop-shadow-[0_0_10px_rgba(37,244,238,0.5)]">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    items: ["HACKEO", "RECUPERACIÓN", "ELIMINAR CUENTA", "ELIMINAR PUBLICACIÓN"]
  },
  {
    platform: "INSTAGRAM",
    color: "from-[#833AB4] to-[#F77737]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 filter drop-shadow-[0_0_10px_rgba(131,58,180,0.5)]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    items: ["HACKEO", "RECUPERACIÓN", "ELIMINAR CUENTA", "ELIMINAR PÁGINA"]
  }
];

const additionalServices = [
  {
    icon: <Smartphone className="w-12 h-12 text-cyber-500" />,
    title: "Desbloqueo de Dispositivos",
    description: "Bloqueos de pantalla, cuentas iCloud/Google y servicios de bypass MDM."
  },
  {
    icon: <Search className="w-12 h-12 text-cyber-500" />,
    title: "Auditorías de Seguridad",
    description: "Análisis de vulnerabilidades y pruebas de penetración para redes personales."
  },
  {
    icon: <Database className="w-12 h-12 text-cyber-500" />,
    title: "Informática Forense",
    description: "Recuperación de archivos eliminados y análisis profundo de datos en discos duros."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-cyber-500" />,
    title: "Protección de Identidad",
    description: "Asistencia con 2FA, eliminación de huella digital y servicios anti-doxing."
  }
];

const Services: React.FC = () => {
  const fbLink = "https://www.facebook.com/profile.php?id=61584047322915";

  return (
    <section id="servicios" className="py-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-cyber-500 font-mono text-sm tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
              <Zap className="w-4 h-4 animate-pulse" />
              Capacidades Operativas
              <Zap className="w-4 h-4 animate-pulse" />
            </h2>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            Recuperación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-500 to-cyber-purple">Hacking</span>
          </h3>
          <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-lg font-light">
            Soluciones avanzadas para las plataformas más utilizadas. 
            <span className="block mt-1 text-cyber-500 font-mono text-xs">* 100% Confidencial y Anónimo.</span>
          </p>
        </div>

        {/* Primary Social Services Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {socialServices.map((service, index) => (
            <motion.div
              key={service.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-cyber-800/20 border border-cyber-700/50 hover:border-cyber-500 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8 flex flex-col items-center relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-6 tracking-wide font-mono">
                  {service.platform}
                </h4>
                
                <ul className="w-full space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                      {i === 0 ? <Zap className="w-3 h-3 text-cyber-500" /> : 
                       i === 1 ? <RefreshCcw className="w-3 h-3 text-cyber-500" /> :
                       i === 2 ? <Eye className="w-3 h-3 text-cyber-500" /> :
                       <Copy className="w-3 h-3 text-cyber-500" />}
                      <span className="uppercase tracking-wider font-bold text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent w-full max-w-xs"></div>
          <span className="text-cyber-500 font-mono text-lg uppercase tracking-[0.2em] font-bold whitespace-nowrap glow-text">Y MUCHO MÁS</span>
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-500 to-transparent w-full max-w-xs"></div>
        </div>

        {/* Secondary Technical Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {additionalServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-cyber-900/60 border border-cyber-700 hover:border-cyber-500 rounded-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left group hover:bg-cyber-800/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-500/10"
            >
              <div className="mb-4 md:mb-0 md:mr-6 p-4 bg-cyber-950 rounded-xl border border-cyber-800 group-hover:border-cyber-500/50 transition-colors">
                {service.icon}
              </div>
              <div>
                <h5 className="text-white font-bold mb-2 text-xl uppercase tracking-wide group-hover:text-cyber-400 transition-colors">{service.title}</h5>
                <p className="text-base text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <a
            href={fbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-black font-bold uppercase tracking-[0.15em] text-base rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]"
          >
            <Lock className="w-5 h-5" />
            Solicitar Servicio Especializado
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;