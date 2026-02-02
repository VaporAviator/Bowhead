import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2540] text-[#F0F9FF] py-12 px-6 border-t border-[#F0F9FF]/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl tracking-tighter">BOWHEAD</h2>
          <p className="font-mono text-xs opacity-50 mt-1">© 2024 Abyssal Architect Labs</p>
        </div>
        
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-[#2DD4BF] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#2DD4BF] transition-colors">GitHub</a>
          <a href="#" className="hover:text-[#2DD4BF] transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
};