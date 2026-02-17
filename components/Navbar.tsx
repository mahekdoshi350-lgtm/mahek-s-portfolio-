
import React from 'react';
import { Theme } from '../types';
import { ICONS } from '../constants';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-pink-500/30">
              M
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              MAHEK.DOSHI
            </span>
          </div>
          
          <div className="hidden md:flex space-x-10 font-bold uppercase tracking-widest text-[10px]">
            <a href="#home" className="hover:text-pink-500 transition-colors py-2 border-b-2 border-transparent hover:border-pink-500">Home</a>
            <a href="#about" className="hover:text-pink-500 transition-colors py-2 border-b-2 border-transparent hover:border-pink-500">Exhibitions</a>
            <a href="#projects" className="hover:text-pink-500 transition-colors py-2 border-b-2 border-transparent hover:border-pink-500">Join the Quest</a>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <ICONS.Moon /> : <ICONS.Sun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
