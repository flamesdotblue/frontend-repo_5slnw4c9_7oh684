import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-2 text-white/80">
        <div>
          <h3 className="text-white font-semibold text-lg">Igniters Club – RCPIT</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Igniting Ideas. Inspiring Minds.
          </p>
        </div>
        <div className="md:justify-self-end flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a href="mailto:igniters@rcpit.edu" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label="Email">
            <Mail className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 pb-8">© {new Date().getFullYear()} Igniters Club – RCPIT. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
