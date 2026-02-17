
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MarqueeGallery from './components/MarqueeGallery';
import ProjectDetail from './components/ProjectDetail';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';
import { Theme, Project } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [view, setView] = useState<'home' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleViewProject = (project: Project) => {
    setIsTransitioning(true);
    // Wait for the shutter to close
    setTimeout(() => {
      setSelectedProject(project);
      setView('project');
      window.scrollTo(0, 0);
      // Wait a bit before opening shutter
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 600);
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView('home');
      setSelectedProject(null);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 600);
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white selection:bg-pink-500 selection:text-white overflow-x-hidden relative">
      
      {/* Tactical Shutter Overlay */}
      <div className={`fixed inset-0 z-[9999] pointer-events-none flex flex-col transition-opacity duration-300 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`flex-1 bg-slate-900 dark:bg-white transition-transform duration-500 ease-in-out ${isTransitioning ? 'translate-y-0' : '-translate-y-full'}`}></div>
        <div className={`flex-none h-20 bg-pink-500 flex items-center justify-center overflow-hidden transition-all duration-500 delay-100 ${isTransitioning ? 'scale-y-100' : 'scale-y-0'}`}>
           <span className="text-white dark:text-slate-900 font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">
             Accessing Mission Log...
           </span>
        </div>
        <div className={`flex-1 bg-slate-900 dark:bg-white transition-transform duration-500 ease-in-out ${isTransitioning ? 'translate-y-0' : 'translate-y-full'}`}></div>
      </div>

      <div className={isTransitioning ? 'hidden' : 'block'}>
        {view === 'home' ? (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Hero />
              <About />
              <MarqueeGallery />
              <Projects onOpenProject={handleViewProject} />
            </main>
            <ChatAssistant />
            <Footer />
          </>
        ) : (
          <ProjectDetail 
            project={selectedProject!} 
            onBack={handleBackToHome} 
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}
      </div>
    </div>
  );
};

export default App;
