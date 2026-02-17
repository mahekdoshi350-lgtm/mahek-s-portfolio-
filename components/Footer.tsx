
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-black mb-4">Let's start a new quest!</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 font-quicksand">
          Whether it's a code-related challenge or a recommendation for a hiking trail, my inbox is always open.
        </p>
        <a 
          href="mailto:mahek@example.com" 
          className="inline-block px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform"
        >
          Get In Touch
        </a>
        
        <div className="mt-16 flex justify-center space-x-6 text-slate-400">
          <a href="#" className="hover:text-pink-500 transition-colors font-bold">LinkedIn</a>
          <a href="#" className="hover:text-pink-500 transition-colors font-bold">GitHub</a>
          <a href="#" className="hover:text-pink-500 transition-colors font-bold">Instagram</a>
        </div>
        
        <p className="mt-12 text-sm text-slate-400 dark:text-slate-600 font-quicksand">
          © {new Date().getFullYear()} Mahek Doshi. Handcrafted with ✨ and ☕.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
