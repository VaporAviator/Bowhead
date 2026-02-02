import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONSTANTS, COLORS } from '../constants';
import { InteractiveNode } from './InteractiveNode';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects for the background text
  const textScale = useTransform(scrollY, [0, 800], [1, 1.4]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const textY = useTransform(scrollY, [0, 800], [0, 200]);

  // Effects for foreground content (moving slightly faster/slower for depth)
  const contentY = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full overflow-hidden flex flex-col items-center justify-start pt-32 md:pt-0 md:justify-center"
    >
      {/* Massive Background Text */}
      <motion.div 
        style={{ scale: textScale, opacity: textOpacity, y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 
          className="font-display text-[18vw] leading-[0.8] tracking-tighter text-[#0A2540] text-center select-none"
          aria-hidden="true"
        >
          BOW<br/>HEAD
        </h1>
      </motion.div>

      {/* Foreground Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 pointer-events-none"
      >
        {/* Left Floating Text */}
        <div className="md:absolute md:top-1/2 md:left-12 md:-translate-y-1/2 md:w-64 text-center md:text-left mb-8 md:mb-0">
          <p className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#0A2540] bg-[#F0F9FF]/80 backdrop-blur-sm p-2 inline-block">
            {CONSTANTS.taglineLeft}
          </p>
        </div>

        {/* Center Interactive Object (The Hook) */}
        <div className="pointer-events-auto flex flex-col items-center justify-center gap-8 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <InteractiveNode />
        </div>

        {/* Right Floating Text */}
        <div className="md:absolute md:top-1/2 md:right-12 md:-translate-y-1/2 md:w-64 text-center md:text-right mt-8 md:mt-0">
          <p className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#0A2540] bg-[#F0F9FF]/80 backdrop-blur-sm p-2 inline-block">
            {CONSTANTS.taglineRight}
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#0A2540] font-mono text-xs animate-bounce"
      >
        SCROLL TO DIVE DEEP
      </motion.div>
    </section>
  );
};