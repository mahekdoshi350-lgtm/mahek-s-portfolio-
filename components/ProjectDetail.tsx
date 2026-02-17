
import React from 'react';
import { Project, Theme } from '../types';
import { ICONS } from '../constants';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, theme, toggleTheme }) => {
  // Mock assets for the project
  const projectAssets = [
    project.image,
    `https://picsum.photos/seed/${project.id + 10}/800/600`,
    `https://picsum.photos/seed/${project.id + 20}/800/600`,
    `https://picsum.photos/seed/${project.id + 30}/800/600`,
    `https://picsum.photos/seed/${project.id + 40}/800/600`,
    `https://picsum.photos/seed/${project.id + 50}/800/600`,
    `https://picsum.photos/seed/${project.id + 60}/800/600`,
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden animate-fade-in-up">
      {/* Detail Navbar */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={onBack}
              className="group flex items-center space-x-3 text-slate-500 hover:text-pink-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </div>
              <span className="font-black text-xs uppercase tracking-[0.3em]">Abort Expedition</span>
            </button>
            
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logged Expedition:</span>
              <span className="font-black text-pink-500 text-sm uppercase tracking-tighter">{project.title}</span>
            </div>

            <button 
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-transform shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <ICONS.Moon /> : <ICONS.Sun />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-500/5 to-transparent blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-pink-500/20">
                Mission Objective 0{project.id}
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
                {project.title.toUpperCase()}
              </h1>
              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-slate-400 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-200 dark:border-slate-800 pb-1">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 pt-4">
              <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl">
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">The Log entry</p>
                <p className="text-lg font-quicksand font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MANUAL SCROLLING ASSET REEL */}
      <section className="py-20 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-end justify-between">
           <div className="space-y-1">
             <span className="text-pink-500 text-[10px] font-black uppercase tracking-widest">Evidence Reel</span>
             <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white italic">Scouted Assets</h2>
           </div>
           <div className="text-right">
             <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">Manual_Review_Enabled</span>
           </div>
        </div>

        {/* The Horizontal Scroll Area */}
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-[10vw] gap-6 pb-12 cursor-grab active:cursor-grabbing">
          {projectAssets.map((asset, idx) => (
            <div 
              key={idx} 
              className="relative w-[85vw] md:w-[600px] aspect-video rounded-[3rem] overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl flex-shrink-0 snap-center transition-transform duration-500 hover:scale-[1.02]"
            >
              <img 
                src={asset} 
                alt={`Asset ${idx}`} 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              {/* Technical Overlay */}
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[8px] font-black uppercase rounded-md tracking-widest border border-white/20">
                  REF_0{idx}
                </span>
                <span className="px-3 py-1 bg-pink-500/80 backdrop-blur-md text-white text-[8px] font-black uppercase rounded-md tracking-widest">
                  FIELD_ASSET
                </span>
              </div>
              <div className="absolute bottom-6 right-6">
                 <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping"></div>
                 </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow centering last item */}
          <div className="w-1 md:w-[10vw] flex-shrink-0"></div>
        </div>

        {/* Decoration Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 space-y-24 pb-40">
        
        {/* Tactical Breakdown Section */}
        <section className="grid md:grid-cols-3 gap-12 pt-12">
          {[
            { title: "The Brief", text: `How do we unmask the soul of ${project.title} in a crowded digital landscape? Mahek set out to explore the visual limits of this mission.` },
            { title: "The Solution", text: "By iterating through field-tested variations and scaled color theories, we landed on a direction that breathes life into the narrative." },
            { title: "The Result", text: "A 40% increase in user engagement and a design system that scales across print, digital, and physical environments." }
          ].map((block, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-[2px] bg-indigo-500"></div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{block.title}</h3>
              <p className="font-quicksand font-bold text-slate-500 dark:text-slate-400 leading-relaxed italic">
                {block.text}
              </p>
            </div>
          ))}
        </section>

        {/* Call to Action for Next Project */}
        <div className="pt-20 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
           <div className="group cursor-not-allowed opacity-30">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Previous Peak</p>
              <p className="text-xl font-black">Unknown territory</p>
           </div>
           <button 
             onClick={onBack}
             className="relative px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] overflow-hidden group/back"
           >
             <span className="relative z-10">Return to Basecamp</span>
             <div className="absolute inset-0 bg-pink-500 translate-y-full group-hover/back:translate-y-0 transition-transform duration-300"></div>
           </button>
           <div className="group text-right cursor-not-allowed opacity-30">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Next Quest</p>
              <p className="text-xl font-black">Deep forest ahead</p>
           </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
