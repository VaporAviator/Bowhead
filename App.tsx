import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Narrative } from './components/Narrative';
import { Footer } from './components/Footer';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} className="relative min-h-screen w-full selection:bg-[#0A2540] selection:text-white">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Narrative />
      </main>
      <Footer />
    </div>
  );
}