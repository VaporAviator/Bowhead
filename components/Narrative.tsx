import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Database, Cpu } from 'lucide-react';

export const Narrative: React.FC = () => {
  return (
    <div className="relative z-20 bg-[#F0F9FF] min-h-screen pt-24 pb-48 px-6 md:px-12 border-t border-[#0A2540]/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b-2 border-[#0A2540] pb-8">
          <span className="font-mono text-[#0A2540] text-sm tracking-widest uppercase mb-4 md:mb-0">
            [ 001 — The Mission ]
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-[#0A2540]">
            DECODING THE<br/>DEEP OCEAN.
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Big Statement 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl font-bold leading-tight text-[#0A2540]">
              Biological data is the new oil. <span className="text-[#0A2540]/50">We build the rigs to drill it.</span>
            </p>
            <p className="font-mono text-sm md:text-base leading-relaxed max-w-md">
              Bowhead provides the infrastructure to train, deploy, and scale biological foundation models. From genomic sequencing to proteomic prediction, our nodes handle the pressure.
            </p>
          </motion.div>

          {/* Feature List (Right Side) */}
          <div className="space-y-12 pt-12 md:pt-0">
             <FeatureItem 
               icon={<Database className="w-8 h-8" />}
               title="Abyssal Storage"
               desc="Immutable, decentralized storage for petabyte-scale genomic datasets."
             />
             <FeatureItem 
               icon={<Cpu className="w-8 h-8" />}
               title="Inference Engines"
               desc="Low-latency inference for AlphaFold and ESM-based architectures."
             />
             <FeatureItem 
               icon={<Activity className="w-8 h-8" />}
               title="Live Monitoring"
               desc="Real-time telemetry for your biological computation pipelines."
             />
          </div>
        </div>

        {/* Big CTA */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 w-full bg-[#0A2540] text-[#F0F9FF] p-12 md:p-24 flex flex-col items-center text-center rounded-sm relative overflow-hidden group cursor-pointer"
        >
            <div className="absolute inset-0 bg-[#F0F9FF] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            
            <h3 className="font-display text-5xl md:text-8xl mb-8 relative z-10">
              START<br/>BUILDING
            </h3>
            <div className="flex items-center gap-4 font-mono text-lg border border-[#F0F9FF]/30 px-8 py-3 rounded-full group-hover:bg-[#F0F9FF] group-hover:text-[#0A2540] transition-colors duration-300">
              <span>Read Documentation</span>
              <ArrowRight className="w-5 h-5" />
            </div>
        </motion.div>

      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 items-start group"
  >
    <div className="p-4 border border-[#0A2540] rounded-none group-hover:bg-[#0A2540] group-hover:text-[#F0F9FF] transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-display text-xl mb-2 text-[#0A2540] uppercase">{title}</h4>
      <p className="font-mono text-sm text-[#0A2540]/70 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);