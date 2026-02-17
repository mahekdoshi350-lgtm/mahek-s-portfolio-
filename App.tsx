
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import { Theme } from './types';

const App: React.FC = () => {
  // Setting default mode to 'dark' as requested
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;
