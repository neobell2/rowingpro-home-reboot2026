
import React from 'react';
import ScrollReveal from './ScrollReveal';

const programs = [
  {
    title: "HRD 팀빌딩",
    desc: "인도어/아웃도어 커스텀 프로그램을 통해 조직의 결속력을 극대화합니다.",
    tag: "CORPORATE",
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "학교 체육 프로그램",
    desc: "학생들의 인내와 협력, 소통을 기르는 스포츠 정신을 전파합니다.",
    tag: "SCHOOL",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "이벤트 & 부스",
    desc: "각종 축제 및 행사에서 로잉 머신을 활용한 이색 체험 부스를 운영합니다.",
    tag: "EVENT",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "동호인 & 사회공헌",
    desc: "조정 클럽 운영 및 소외계층을 위한 재능기부 봉사활동을 진행합니다.",
    tag: "CLUB",
    img: "https://images.unsplash.com/photo-1481132821971-f6711500d210?auto=format&fit=crop&q=80&w=500"
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Oar background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full -mr-48 -mt-48 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h3 className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-4">Our Programs</h3>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">Education Excellence</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 100}>
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-blue-600 transition-all duration-500 hover:-translate-y-4">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded tracking-tighter mb-4 inline-block uppercase">
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-black text-slate-800 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                    자세히 보기 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
