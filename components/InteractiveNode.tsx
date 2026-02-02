import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Hexagon, Database, Dna } from 'lucide-react';

export const InteractiveNode: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative group perspective-1000">
      {/* Interaction Label (The Badge) */}
      <motion.div
        animate={{ 
          y: isHovered ? -140 : -120,
          scale: isHovered ? 1.1 : 1,
        }}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-none"
      >
        <div className="flex items-center gap-2 bg-[#0A2540] text-[#F0F9FF] px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest shadow-xl whitespace-nowrap">
          <span>{isClicked ? "Initializing..." : "Deploy Node"}</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
        {/* Connection Line */}
        <div className="w-[1px] h-12 bg-[#0A2540] mx-auto" />
      </motion.div>

      {/* The 3D Object Container (Fixed size 16rem/256px for perfect cube geometry) */}
      <motion.div
        className="relative w-64 h-64 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: isClicked ? 180 : isHovered ? 10 : 20,
          rotateY: isClicked ? 180 : isHovered ? 30 : -20,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Abstract Data Cube Faces (Half of 16rem = 8rem) */}
        <CubeFace translateZ="8rem" opacity={0.05} />
        <CubeFace translateZ="-8rem" opacity={0.05} />
        <CubeFace rotateY={90} translateZ="8rem" opacity={0.05} />
        <CubeFace rotateY="-90" translateZ="8rem" opacity={0.05} />
        <CubeFace rotateX={90} translateZ="8rem" opacity={0.05} />
        <CubeFace rotateX="-90" translateZ="8rem" opacity={0.05} />

        {/* Inner Content - The Bowhead Whale */}
        <motion.div 
          className="absolute inset-0 m-auto w-56 h-56 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            y: [0, -8, 0],
            rotateZ: isHovered ? [0, 1, -1, 0] : 0,
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
            {/* Whale SVG */}
            <svg viewBox="0 0 200 120" className="w-full h-full drop-shadow-[0_20px_50px_rgba(10,37,64,0.5)]">
               
               {/* Body Shape - Anatomically Distinct Bowhead
                   Features: Massive vertical head height, smooth finless back, rotund belly, distinct chin scoop.
               */}
               <motion.path 
                 d="M 170 65 L 188 50 L 182 65 L 188 80 L 170 65 C 140 100, 80 115, 40 95 C 20 85, 5 70, 5 50 C 5 20, 55 5, 95 5 C 135 5, 155 45, 170 65 Z"
                 className="fill-[#0A2540] stroke-[#F0F9FF] stroke-2"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               />
               
               {/* The "Bow" - The massive arched upper jawline line */}
               <motion.path 
                 d="M 5 52 C 15 30, 45 20, 75 55"
                 className="fill-none stroke-[#F0F9FF] stroke-1 opacity-60"
                 strokeDasharray="2 2"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ delay: 0.5, duration: 1 }}
               />

               {/* Chin Patch - Characteristic white chin patch of Bowheads */}
               <path d="M 10 75 Q 25 88 45 85" className="fill-none stroke-[#2DD4BF] stroke-2 opacity-40" />
               
               {/* Vertical Data Scans / Girth Lines */}
               <path d="M 55 12 Q 55 50 55 102" className="stroke-[#F0F9FF] stroke-[0.5] opacity-10" />
               <path d="M 95 5 Q 95 50 95 108" className="stroke-[#F0F9FF] stroke-[0.5] opacity-10" />
               <path d="M 135 25 Q 135 60 135 95" className="stroke-[#F0F9FF] stroke-[0.5] opacity-10" />
               
               {/* Horizontal Lateral Line */}
               <path d="M 20 55 L 150 60" className="stroke-[#F0F9FF] stroke-[0.5] opacity-10" strokeDasharray="4 4" />

               {/* Eye - Small, low, and far back (near corner of mouth arch) */}
               <circle cx="80" cy="58" r="2" className="fill-[#2DD4BF] animate-pulse" />
               <circle cx="80" cy="58" r="6" className="stroke-[#2DD4BF] stroke-1 fill-none opacity-30" />

            </svg>
        </motion.div>

        {/* Floating Particles / Data points around the whale */}
        <FloatingParticle x={-60} y={-40} z={80} delay={0} />
        <FloatingParticle x={60} y={50} z={60} delay={0.5} />
        <FloatingParticle x={30} y={-60} z={-40} delay={1} />
        <FloatingParticle x={-40} y={40} z={-60} delay={1.5} />

      </motion.div>
    </div>
  );
};

const CubeFace: React.FC<{ 
  rotateX?: number; 
  rotateY?: number; 
  translateZ: string; 
  opacity: number;
}> = ({ rotateX = 0, rotateY = 0, translateZ, opacity }) => (
  <div
    className="absolute inset-0 border border-[#0A2540] bg-[#F0F9FF]"
    style={{
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ})`,
      opacity: opacity,
      backfaceVisibility: 'visible',
    }}
  >
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-[1px] bg-[#0A2540] opacity-20" />
        <div className="h-full w-[1px] bg-[#0A2540] opacity-20 absolute" />
    </div>
  </div>
);

const FloatingParticle: React.FC<{ x: number; y: number; z: number; delay: number }> = ({ x, y, z, delay }) => (
  <motion.div
    className="absolute w-2 h-2 bg-[#0A2540] rounded-full top-1/2 left-1/2"
    style={{
      x, y, z
    }}
    animate={{
      y: [y - 15, y + 15, y - 15],
      opacity: [0.4, 1, 0.4],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);