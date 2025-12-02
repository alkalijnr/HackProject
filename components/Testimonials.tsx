import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Carlos M.",
    role: "Emprendedor",
    text: "Pensé que había perdido el acceso a mi cuenta de Instagram de negocios para siempre. Vargas El Hacker recuperó el acceso en 48 horas. Servicio increíble.",
    stars: 5
  },
  {
    name: "Ana P.",
    role: "Usuario Privado",
    text: "Total profesionalismo. Me ayudaron a desbloquear un iPhone antiguo del cual había olvidado la contraseña, sin perder mis fotos.",
    stars: 5
  },
  {
    name: "Roberto S.",
    role: "Consultor TI",
    text: "La auditoría de seguridad reveló vulnerabilidades críticas en mi red doméstica. Excelente servicio preventivo.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12 tracking-tight">Opiniones de <span className="text-cyber-500">Clientes</span></h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyber-800/20 backdrop-blur-md p-6 rounded-xl border border-cyber-700/50 hover:border-cyber-500/30 transition-all duration-300 relative group"
            >
              <div className="absolute -top-3 left-6 bg-cyber-900 p-1.5 rounded-lg border border-cyber-700 group-hover:border-cyber-500 transition-colors">
                <Quote className="w-5 h-5 text-cyber-500" />
              </div>
              
              <div className="flex gap-1 text-cyber-accent mb-4 mt-2">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_5px_rgba(10,255,157,0.5)]" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 text-base leading-relaxed">"{t.text}"</p>
              <div className="border-t border-cyber-700/50 pt-3">
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-cyber-500/80 text-xs font-mono">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;