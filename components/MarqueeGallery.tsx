
import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1433086566280-57823a7a414b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
];

const MarqueeGallery: React.FC = () => {
  // We double the images for a seamless loop
  const doubleImages = [...IMAGES, ...IMAGES];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-pink-500 flex items-center justify-center text-[10px] text-white font-black">M</div>
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-500 flex items-center justify-center text-xs">📷</div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500">Visual Pulse</p>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Expedition Snapshot Log</h2>
          </div>
        </div>
      </div>

      <div className="relative group">
        {/* The Marquee Container */}
        <div className="animate-marquee">
          {doubleImages.map((img, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[450px] aspect-[4/3] mx-3 md:mx-6 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 shadow-lg group-hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Scouted scene ${idx}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Floating Captions for aesthetics */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 pointer-events-none z-10 hidden lg:block">
           <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 -rotate-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Latitude: 34.0522° N</span>
           </div>
        </div>
        <div className="absolute bottom-1/2 right-20 translate-y-1/2 pointer-events-none z-10 hidden lg:block">
           <div className="bg-pink-500/20 backdrop-blur-md p-4 rounded-2xl border border-pink-500/20 rotate-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-400">Altitude: 4,500m</span>
           </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[1em] text-slate-300 dark:text-slate-700">Infinite Discovery Loop</p>
      </div>
    </section>
  );
};

export default MarqueeGallery;
