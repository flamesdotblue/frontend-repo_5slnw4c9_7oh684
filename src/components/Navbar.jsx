import React from 'react';
import { Rocket, Users } from 'lucide-react';

const Navbar = ({ navigateTo, current }) => {
  const linkClass = (hash) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-white hover:bg-white/10 ${
      current === hash ? 'text-white' : 'text-white/80'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 grid place-items-center shadow-lg">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide">Igniters Club</p>
            <p className="text-xs text-white/70 -mt-0.5">RCPIT</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <button onClick={() => navigateTo('#/')} className={linkClass('#/')}>Home</button>
          <a href="#about" className={linkClass('#about')}>About</a>
          <a href="#team" className={linkClass('#team')}>Team</a>
          <button onClick={() => navigateTo('#/study-cafe')} className={linkClass('#/study-cafe')}>Study Café</button>
          <a href="#contact" className={linkClass('#contact')}>Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => navigateTo('#/study-cafe')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition">
            <Users className="h-4 w-4" />
            Study Café
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
