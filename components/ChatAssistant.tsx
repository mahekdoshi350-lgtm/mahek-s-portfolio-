
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { ICONS } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hey there! I'm Mahek's AI Scout. 🏔️ Want to know about her design expeditions, her favorite summits, or how she can help your brand reach new heights?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the AI Scout for Mahek Doshi's portfolio.
          Mahek is a Visual Communicator who is fun, adventurous, and high-energy.
          
          Your Mission:
          - Act as her representative to potential clients.
          - Tell them about her: She loves branding, UI/UX, and strategy. She is an explorer (hiking, travel).
          - Tone: Energetic, witty, and professional. Use adventure/exploration metaphors.
          - Goal: Answer questions about her work and personality.
          
          Specific Info:
          - Projects: Wild Bound Identity (outdoor gear), Nomad Soul (magazine), Vivid Motion (abstract visuals), Echo (tech design system).
          - Motto: "Design is the tool, discovery is the goal."
          - Contact: Suggest email mahek@example.com or the 'Get in Touch' button in the footer.
          
          Keep responses concise (under 50 words) and visually interesting with occasional emojis.`,
        },
      });

      const aiText = response.text || "Connection dropped! The mountain peaks are blocking the signal. Try again?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Search party dispatched! My signal is weak right now, let's try one more time." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[550px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-pink-500 to-indigo-600 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner">
                🧭
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Mahek's AI</p>
                <p className="font-bold text-sm tracking-tight">Expedition Scout</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-slate-50 dark:bg-slate-900/50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] px-5 py-3 rounded-3xl text-sm font-quicksand font-bold leading-relaxed shadow-sm
                  ${m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                  }
                `}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-5 py-3 rounded-3xl rounded-tl-none border border-slate-100 dark:border-slate-700 flex space-x-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl border border-transparent focus-within:border-pink-500/50 transition-all">
              <input 
                type="text"
                placeholder="Where should we explore next?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none font-quicksand font-bold placeholder:text-slate-400 dark:text-white"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="w-10 h-10 bg-pink-500 text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/20 disabled:opacity-50"
              >
                <ICONS.Send />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-20 h-20 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.3)] 
          flex flex-col items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300 floating group border-4 border-white dark:border-slate-900
          ${isOpen ? 'rotate-90' : ''}
        `}
      >
        <span className="text-3xl mb-0.5">{isOpen ? '❌' : '🧭'}</span>
        {!isOpen && (
          <span className="text-[7px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
            Open Scout
          </span>
        )}
        
        {/* Notification Dot */}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
