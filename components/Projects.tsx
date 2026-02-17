
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-white dark:bg-slate-900 transition-colors duration-500">
      {/* Section Header - This will scroll away as the first card hits the top */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-pink-500"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-pink-500">The Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-none text-slate-900 dark:text-white">
              SELECTED <br />
              <span className="text-indigo-600 dark:text-indigo-400">EXPEDITIONS</span>
            </h2>
            <p className="text-xl font-quicksand font-bold text-slate-500 dark:text-slate-400 max-w-xl">
              A curated log of creative journeys. Explore the intersections of brand, strategy, and wild imagination.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center animate-spin-slow">
               <span className="text-2xl">🧭</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Stacked Cards Container */}
      <div className="relative">
        {PROJECTS.map((project, index) => {
          return (
            <div 
              key={project.id} 
              className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
              style={{ zIndex: index + 1 }}
            >
              {/* Individual Full Screen Card */}
              <div className="group relative w-full h-full max-w-[95vw] max-h-[85vh] rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-[0_-20px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_-40px_100px_rgba(0,0,0,0.6)] border border-white/20 transition-all duration-700">
                
                {/* Background Image with Reveal Effect */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  />
                  {/* High-Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full w-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
                  <div className="max-w-4xl space-y-6">
                    {/* Tags Reveal */}
                    <div className="flex flex-wrap gap-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-5 py-2 bg-pink-500/20 backdrop-blur-xl text-pink-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-pink-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-4">
                      <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                        {project.title.split(' ').map((word, i) => (
                          <span key={i} className={i % 2 === 1 ? 'text-pink-500 block md:inline' : 'block md:inline mr-4'}>
                            {word}{' '}
                          </span>
                        ))}
                      </h3>
                      <p className="text-xl md:text-2xl font-quicksand font-bold text-white/70 max-w-2xl leading-relaxed transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                        {project.description}
                      </p>
                    </div>

                    {/* View Button */}
                    <div className="pt-8 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                      <button className="group/btn relative flex items-center bg-white text-slate-900 px-10 py-5 rounded-2xl overflow-hidden transition-all duration-300 hover:pr-14">
                        <span className="font-black text-[12px] uppercase tracking-widest relative z-10">Study Mission Log</span>
                        <div className="absolute right-0 top-0 h-full w-0 group-hover/btn:w-full bg-pink-500 transition-all duration-500"></div>
                        <svg className="ml-4 relative z-10 transition-transform group-hover/btn:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </button>
                    </div>
                  </div>

                  {/* Floating Project Number */}
                  <div className="absolute top-10 right-10 md:top-20 md:right-20">
                    <div className="w-20 h-20 md:w-32 md:h-32 rounded-[2rem] md:rounded-[3rem] bg-white/10 backdrop-blur-2xl border border-white/20 flex flex-col items-center justify-center text-white shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter opacity-50">Log #</span>
                      <span className="text-3xl md:text-6xl font-black">0{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 opacity-30"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spacing for Footer */}
      <div className="h-[20vh] bg-white dark:bg-slate-900"></div>
    </section>
  );
};

export default Projects;
