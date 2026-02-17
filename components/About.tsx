
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white dark:bg-slate-900 transition-colors duration-1000 overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 rounded-[3.5rem] blur-2xl"></div>
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1512413316925-fd4b93f31521?q=80&w=800&auto=format&fit=crop" 
                  alt="Mahek Environment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white font-black text-4xl italic tracking-tighter leading-none mb-2">"Design is the tool, discovery is the goal."</p>
                    <p className="text-pink-400 font-bold uppercase tracking-widest text-[10px]">Mahek Doshi, 2024</p>
                </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                THE ADVENTURER'S <br />
                <span className="text-indigo-500">MINDSET</span>
              </h2>
              <div className="w-20 h-2 bg-pink-500 rounded-full"></div>
            </div>

            <div className="space-y-6 font-quicksand text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Mahek Doshi doesn’t follow maps; she draws them. Her approach to visual communication is rooted in the belief that every brand has a wild, authentic core waiting to be unmasked.
              </p>
              <p>
                Whether she's scaling a mountain ridge or a complex UX problem, her methodology remains the same: observe, iterate, and conquer with style. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { label: "Creative Direction", value: "100%" },
                { label: "Wilderness Survival", value: "A+" },
                { label: "Brand Strategy", value: "Expert" },
                { label: "Curiosity", value: "Infinite" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-pink-500 transition-colors">{stat.label}</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
