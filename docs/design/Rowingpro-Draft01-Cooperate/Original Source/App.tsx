
import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
