import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "¿Es el servicio anónimo?",
    a: "100%. Utilizamos canales de comunicación encriptados y no guardamos registros de nuestras interacciones. No requerimos identificación personal."
  },
  {
    q: "¿Qué información necesitan?",
    a: "Solo necesitamos el nombre de usuario objetivo, enlace o información del dispositivo para comenzar nuestro análisis. No necesitamos su identificación."
  },
  {
    q: "¿Cuánto tiempo toma el proceso?",
    a: "La mayoría de los casos se resuelven entre 24 y 72 horas. El análisis de encriptación complejo puede tomar más tiempo."
  },
  {
    q: "¿Garantizan el éxito?",
    a: "Realizamos un análisis preliminar gratuito para determinar la viabilidad técnica. Nuestra tasa de éxito es superior al 95% para casos aceptados."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-cyber-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-cyber-800 rounded bg-cyber-950/50 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium ${openIndex === index ? 'text-cyber-400' : 'text-slate-300'}`}>
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyber-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 p-4 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-400 text-sm leading-relaxed border-t border-cyber-800/50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;