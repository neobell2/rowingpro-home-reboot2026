
import React from 'react';
import ScrollReveal from './ScrollReveal';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 -z-10 rounded-full"></div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                대한민국 최초,<br/>
                <span className="text-blue-700">최고의 조정 교육</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                로잉프로는 2013년 설립 이후 대한민국 조정 대중화의 선구자 역할을 해왔습니다. 
                모든 강사진은 국가대표 및 엘리트 출신으로 구성되어 있으며, 10년 이상의 전문적인 경력을 바탕으로 가장 안전하고 역동적인 교육을 제공합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "전문 강사진", value: "전원 국가대표" },
                  { label: "안전 기록", value: "무사고 100%" },
                  { label: "누적 교육생", value: "50,000+" },
                  { label: "파트너사", value: "200+ 기업" }
                ].map((stat) => (
                  <div key={stat.label} className="border-l-4 border-blue-600 pl-4 py-2">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform skew-x-[-2deg]">
              <img 
                src="https://images.unsplash.com/photo-1540304453527-62f979142a17?auto=format&fit=crop&q=80&w=1000" 
                alt="Rowing Training"
                className="w-full h-full object-cover transform skew-x-[2deg] scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
