
import React from 'react';
import ScrollReveal from './ScrollReveal';

const values = [
  { title: "조화와 협력", desc: "여덟 개의 노가 하나로 움직일 때 진정한 속도가 납니다." },
  { title: "인내와 극기", desc: "한계를 넘어선 순간, 새로운 시너지가 창출됩니다." },
  { title: "소통과 배려", desc: "뒷사람을 향한 배려가 완벽한 리듬을 완성합니다." },
  { title: "헌신과 책임", desc: "팀의 목표를 위해 자신의 모든 에너지를 쏟아붓습니다." }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 bg-blue-700 text-white relative overflow-hidden">
      {/* Skewed decorative stripe */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-800/50 skew-y-3 transform -translate-y-1/2 origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">
              TEAMWORK CORE VALUES
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              {values.map((v) => (
                <div key={v.title} className="group cursor-default">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-1 bg-white transition-all duration-500 group-hover:w-20"></div>
                    <h3 className="text-2xl font-bold">{v.title}</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
