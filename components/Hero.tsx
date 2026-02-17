
import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      {/* Layer 1: Professional Background (The Facade) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="portfolioimg.jpeg" alt= "mahek doshi" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
      </div>

      {/* Layer 2: Adventurous Background (The Reveal) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          clipPath: `circle(${isHovering ? '250px' : '0px'} at ${mousePos.x}% ${mousePos.y}%)`,
          WebkitClipPath: `circle(${isHovering ? '250px' : '0px'} at ${mousePos.x}% ${mousePos.y}%)`,
          transition: 'clip-path 0.15s ease-out, -webkit-clip-path 0.15s ease-out'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1533633035525-465274930350?q=80&w=2000&auto=format&fit=crop" 
          alt="Adventurous Identity" 
          className="w-full h-full object-cover"
        />
        {/* Subtle Inner Glow for the Reveal Circle */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),transparent_150px,rgba(0,0,0,0.2)_300px)]"
          style={{ '--x': `${mousePos.x}%`, '--y': `${mousePos.y}%` } as any}
        ></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32 pointer-events-none">
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center space-x-3 text-pink-500">
            <span className="w-12 h-[2px] bg-pink-500"></span>
            <span className="text-xs font-black uppercase tracking-[0.5em]">Identity: Explorer</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-white drop-shadow-2xl">
            MAHEK <br />
            <span className="italic outline-text text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">DOSHI</span>
          </h1>

          <p className="text-2xl md:text-3xl font-quicksand font-bold text-white/90 max-w-xl leading-tight drop-shadow-md">
            Visual Communicator <span className="text-pink-500">unmasking</span> narratives through design and discovery.
          </p>

          <div className="flex flex-wrap gap-4 pt-8 pointer-events-auto">
            <a href="#projects" className="px-10 py-5 bg-white text-slate-900 font-black rounded-full uppercase tracking-widest text-[10px] hover:bg-pink-500 hover:text-white transition-all shadow-2xl">
              Start Expedition
            </a>
            <a href="#about" className="px-10 py-5 border-2 border-white/30 text-white font-black rounded-full uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm">
              The Journey
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Placeholder */}
      <div 
        className={`fixed w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-200 ease-out ${isHovering ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%) scale(1.5)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Floating Instructions */}
      {!isHovering && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
           <p className="text-white/40 font-black uppercase tracking-[0.8em] text-xs animate-pulse">Move to reveal true self</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
