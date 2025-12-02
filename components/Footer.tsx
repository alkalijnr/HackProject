import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h3.436l-1.054 3.667h-2.382v7.98h-4.843Z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Snapchat',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.003 2.06c-3.15 0-5.632 2.26-5.836 5.253-.01.127-.08.204-.21.218-.737.072-1.928.31-1.944 1.764-.006.51.196.942.585 1.25.263.208.245.39.04.577-.665.61-1.216 1.15-1.2 2.223.013.856.55 1.547 1.408 1.802.164.048.24.16.208.337-.168.917.18 1.344.606 1.62.266.172.637.28.98.286 1.815.03 2.812 1.448 3.528 2.457.195.275.467.433.805.463.388.035.792.054 1.18.054.34 0 .736-.017 1.096-.052.378-.035.655-.205.867-.503.655-1.022 1.658-2.39 3.33-2.42.34-.005.713-.113.98-.285.424-.275.772-.7.604-1.62-.032-.176.044-.288.208-.337.859-.255 1.396-.946 1.41-1.802.015-1.073-.535-1.614-1.2-2.223-.205-.188-.224-.37-.04-.577.389-.308.591-.74.585-1.25-.016-1.455-1.207-1.69-1.944-1.763-.13-.013-.2-.09-.21-.218-.204-2.993-2.686-5.253-5.836-5.253z"/>
        </svg>
      )
    },
  ];

  const targetLink = "https://www.facebook.com/profile.php?id=61584047322915";

  return (
    <footer id="contacto" className="bg-black/90 backdrop-blur-xl pt-12 pb-8 border-t border-cyber-900 cursor-default relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-cyber-500" />
              <span className="font-mono font-bold text-lg text-white">
                VARGAS<span className="text-cyber-500">_EL_HACKER</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs max-w-sm mb-4 font-light leading-relaxed">
              Expertos en ciberseguridad dedicados a proteger y recuperar su vida digital. 
              Tecnología de vanguardia al servicio de su tranquilidad.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={targetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-cyber-800/50 border border-cyber-800 rounded-md text-slate-400 hover:text-white hover:bg-cyber-500 hover:border-cyber-500 hover:-translate-y-1 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Servicios</h4>
            <div className="space-y-2 text-xs text-slate-500 font-mono">
              <div className="hover:text-slate-500">Recuperación de Cuentas</div>
              <div className="hover:text-slate-500">Desbloqueo de Dispositivos</div>
              <div className="hover:text-slate-500">Auditoría de Seguridad</div>
              <div className="hover:text-slate-500">Informática Forense</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contacto Directo</h4>
            <div className="space-y-2 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyber-500"></span>
                </span>
                Soporte de Emergencia 24/7
              </div>
              <div>contact@vargaselhacker.com</div>
              <div>Telegram: @VargasSecurity</div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-900 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-slate-600 text-[10px]">
              © {new Date().getFullYear()} Vargas El Hacker. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-[10px] text-slate-600 font-mono">
              <span>POLÍTICA DE PRIVACIDAD</span>
              <span>TÉRMINOS DE SERVICIO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;