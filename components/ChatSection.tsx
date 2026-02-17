
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { ICONS } from '../constants';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "You've reached the end of the trail! I'm Mahek's AI Sidekick. Have questions about her design process, her latest trek, or want to start a project together? Ask away!" }
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
          systemInstruction: `You are the Adventure Consultant for Mahek Doshi's design portfolio.
          Mahek is a fun, adventurous Visual Communicator.
          Your personality: 
          - High-energy, professional yet witty.
          - Use adventure metaphors (summiting goals, navigating complexity).
          - Expert on branding, UI/UX, and strategy.
          - If asked about contact, suggest the 'Get in touch' button or mailing mahek@example.com.
          - Keep responses punchy and inspiring (under 60 words).`,
        },
      });

      const aiText = response.text || "My signal is dropping... maybe it's the altitude? Let's try that again!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "The connection is weak in this canyon. Try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            THE FINAL <span className="text-pink-500">DEBRIEF</span>
          </h2>
          <p className="text-slate-400 font-quicksand font-bold text-lg max-w-xl mx-auto">
            Got a specific question? My AI Sidekick has all the maps to my creative world.
          </p>
        </div>

        {/* Chat Terminal Interface */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col h-[600px]">
          {/* Header */}
          <div className="px-8 py-6 border-b border-slate-700 flex items-center justify-between bg-slate-800/80">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 pl-4">Adventure_Consultant.exe</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] md:max-w-[70%] px-6 py-4 rounded-3xl font-quicksand font-bold leading-relaxed
                  ${m.role === 'user' 
                    ? 'bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-tr-none shadow-xl' 
                    : 'bg-slate-700/50 text-slate-200 rounded-tl-none border border-slate-600/50'
                  }
                `}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 px-6 py-4 rounded-3xl rounded-tl-none flex space-x-2 items-center border border-slate-600/50">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 border-t border-slate-700 bg-slate-800/80">
            <div className="flex items-center space-x-4 bg-slate-900/50 rounded-2xl p-2 border border-slate-700 focus-within:border-pink-500 transition-colors">
              <input 
                type="text"
                placeholder="Ask about design, mountains, or a collaboration..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none font-quicksand font-bold placeholder:text-slate-600"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="w-12 h-12 bg-pink-500 text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/20 disabled:opacity-50"
              >
                <ICONS.Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
