import React from 'react';
import { Menu } from 'lucide-react';
import { COLORS } from '../constants';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-[#F0F9FF]">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[#F0F9FF] rounded-full animate-pulse" />
        <span className="font-display tracking-tighter text-xl">BOWHEAD</span>
      </div>
      
      <button 
        className="group flex items-center gap-3 cursor-pointer"
        aria-label="Menu"
      >
        <span className="hidden md:block font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          System Menu
        </span>
        <Menu className="w-8 h-8" />
      </button>
    </nav>
  );
};