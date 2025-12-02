import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Garantía', href: '#garantia' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Reduced offset for smaller navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const fbLink = "https://www.facebook.com/profile.php?id=61584047322915";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-900/95 backdrop-blur-md border-b border-cyber-700/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Reduced height to h-16 */}
          
          {/* Logo */}
          <a 
            href="#" 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="bg-cyber-500/10 p-1.5 rounded-lg border border-cyber-500/20 group-hover:bg-cyber-500/20 transition-colors">
              <ShieldCheck className="h-5 w-5 text-cyber-500" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tighter text-white">
              MUSTY<span className="text-cyber-500">_EL_HACKER</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium text-slate-400 hover:text-cyber-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-500 hover:bg-cyber-400 text-black font-bold py-1.5 px-4 text-sm rounded-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center gap-2"
            >
              <Lock className="w-3 h-3" />
              ACCESO SEGURO
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;