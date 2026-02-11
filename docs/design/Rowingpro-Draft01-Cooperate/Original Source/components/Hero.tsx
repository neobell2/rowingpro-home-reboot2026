
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-900 overflow-hidden pt-20">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544473244-f6895a69ad41?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-110"
          alt="Rowing Background"
        />
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-[200%] h-32 opacity-30 pointer-events-none animate-wave">
          <svg viewBox="0 0 1440 320" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <path fill="#2B6CB0" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full">
              Established 2013
            </span>
          </div>
          <h1 className="font-heading text-6xl md:text-9xl text-white leading-tight tracking-tighter mb-6 uppercase">
            ROWING = <br/>
            <span className="text-blue-400">TEAMWORK</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-10">
            사무실에선 몰랐던 우리 팀의 진짜 호흡.<br/>
            팀워크가 필요한 모든 조직을 위한 맞춤 조정교육 프로그램
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="btn-slide-hover bg-blue-600 text-white px-10 py-5 text-lg font-black uppercase tracking-widest rounded-sm w-full md:w-auto">
              프로그램 보기
            </button>
            <button className="px-10 py-5 text-lg font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors rounded-sm w-full md:w-auto">
              교육 제안서 받기
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Skewed Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-[polygon(0_100%,100%_100%,100%_0)]"></div>
    </section>
  );
};

export default Hero;
