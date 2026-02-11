
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  Users,
  ShieldCheck,
  Award,
  Anchor,
  Waves,
  Target,
  Heart,
  MessageCircle,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  Phone,
  MapPin,
  Calendar,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '로잉프로', href: '#about' },
    { name: '교육 프로그램', href: '#programs' },
    { name: '전문가 그룹', href: '#experts' },
    { name: '사회공헌', href: '#social' },
  ];

  return (
    <nav className={`fixed w-full z-50 nav-transition ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden">
            <span className={`text-2xl md:text-3xl font-black tracking-tighter nav-transition ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              ROWING<span className="text-blue-500">PRO</span>
            </span>
            <div className={`h-1 w-0 group-hover:w-full transition-all duration-300 bg-blue-500 absolute bottom-0`}></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold nav-transition hover:scale-105 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/40">
            상담 신청하기
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-[400px] border-t' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-lg">상담 신청하기</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544601284-48092f6b30f8?auto=format&fit=crop&q=80&w=2000"
          alt="Rowing Background"
          className="w-full h-full object-cover opacity-60 scale-110 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-blue-950/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-blue-200 font-bold text-sm tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          WE ARE IN THE SAME BOAT
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          ROWING = <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">TEAMWORK</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-12 text-blue-50/80 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          팀워크가 필요한 모든 조직을 위한 맞춤 조정교육 프로그램 <br className="hidden md:block" />
          로잉프로는 팀을 만드는 법을 가장 잘 아는 전문가 그룹입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl">
            프로그램 상담하기
          </button>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-xl">
            로잉프로 소개
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Waves className="text-white/50 w-8 h-8" />
      </div>
    </section>
  );
};

const SectionHeading = ({ sub, title, desc, centered = false }: { sub: string, title: string, desc?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">{sub}</span>
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6" dangerouslySetInnerHTML={{ __html: title }}></h2>
    {desc && <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">{desc}</p>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=1200"
                alt="Elite Coaching"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map(s => <Award key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-2xl font-black">대한민국 최초 조정 교육 기업</p>
                  <p className="opacity-80">Since 2013</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              sub="WE BUILD TEAMS"
              title="로잉프로는 팀을 만드는 법을 <br/>가장 잘 아는 조정 전문 교육회사입니다"
              desc="2013년 설립된 로잉프로는 대한민국 최초의 조정 전문 교육 기업입니다. 국가대표 및 엘리트 선수 출신, 10년 이상의 베테랑 코치진이 체계적이고 안전한 교육을 약속합니다."
            />
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">엘리트 전문가 그룹</h4>
                  <p className="text-gray-500 leading-relaxed">조정 국가대표 출신 및 10년 이상의 전문 코치진이 선사하는 차원이 다른 교육 퀄리티를 경험하세요.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl flex-shrink-0">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">100% 무사고 안전 교육</h4>
                  <p className="text-gray-500 leading-relaxed">모든 교육은 안전이 최우선입니다. 지금까지 단 1건의 인명사고 없이 완벽한 안전 관리 체계를 유지하고 있습니다.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-blue-50 p-4 rounded-2xl flex-shrink-0">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">실전 팀빌딩 솔루션</h4>
                  <p className="text-gray-500 leading-relaxed">사무실에선 몰랐던 우리 팀의 진짜 호흡을 확인하고, 끈끈한 조직력을 구축하는 최적의 프로그램을 제공합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => {
  const values = [
    { word: "팀워크", icon: <Users />, desc: "함께 노를 저을 때만 배는 앞으로 나아갑니다." },
    { word: "조화와 협력", icon: <Waves />, desc: "동료의 리듬을 느끼고 자신의 속도를 조절하는 지혜" },
    { word: "소통과 배려", icon: <MessageCircle />, desc: "눈빛만으로 통하는 우리 팀만의 완벽한 소통" },
    { word: "인내와 극기", icon: <Anchor />, desc: "한계를 넘어설 때 비로소 완성되는 팀의 결속력" }
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 100">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">조정의 핵심 키워드</h2>
          <p className="text-blue-200 text-lg">우리가 추구하는 가치가 곧 귀하의 조직이 나아갈 방향입니다.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-blue-900 transition-all group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                {React.cloneElement(v.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <h4 className="text-2xl font-black mb-4">{v.word}</h4>
              <p className="opacity-70 group-hover:opacity-100 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const progs = [
    {
      title: "HRD & 기업 팀빌딩",
      desc: "임직원 결속력 강화 및 직무 스트레스 해소를 위한 전문 과정",
      items: ["인도어/아웃도어 로잉", "직무 역량 강화 워크숍", "리더십 & 팔로워십 교육"],
      img: "https://images.unsplash.com/photo-1544601284-48092f6b30f8?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "학교 체육 & 학교폭력 예방",
      desc: "초·중·고·대학교를 위한 올바른 협력과 소통 교육",
      items: ["방과후 수업", "자유학기제 프로그램", "대입 동아리 및 멘토링"],
      img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "축제 & 이벤트",
      desc: "대규모 행사 및 축제를 위한 부스 참가형 로잉 체험 상품",
      items: ["로잉 챌린지 대회", "대형 LED 스크린 체험 부스", "이색 기업 홍보 프로모션"],
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          centered
          sub="OUR SERVICES"
          title="모든 조직에 최적화된 <br/>맞춤형 조정 교육 프로그램을 제공합니다"
        />
        <div className="grid lg:grid-cols-3 gap-10">
          {progs.map((p, i) => (
            <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all border border-transparent hover:border-blue-100 group">
              <div className="h-64 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-black">{p.title}</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{p.desc}</p>
                <ul className="space-y-4 mb-10">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800 font-bold">
                      <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-2xl bg-blue-50 text-blue-700 font-black hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  상세 보기 <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Contribution Banner */}
        <div id="social" className="mt-20 relative rounded-[40px] overflow-hidden bg-blue-900 text-white p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 relative z-10">
            <span className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">Social Responsibility</span>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">장애인과 소외계층을 위한 <br />따뜻한 노 젓기</h2>
            <p className="text-xl text-blue-100/80 mb-10 font-medium">로잉프로는 사회적 가치를 실현하기 위해 지속적인 체육 봉사 활동과 재능 기부를 이어가고 있습니다.</p>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center w-32 h-32">
                <Heart className="w-8 h-8 text-pink-400 mb-2" />
                <span className="text-sm font-bold">나눔</span>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center w-32 h-32">
                <Users className="w-8 h-8 text-green-400 mb-2" />
                <span className="text-sm font-bold">동행</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center relative">
            <div className="w-64 h-64 bg-blue-500 rounded-full blur-[100px] absolute opacity-50"></div>
            <img src="https://images.unsplash.com/photo-1544601284-48092f6b30f8?auto=format&fit=crop&q=80&w=500" className="relative z-10 rounded-[30px] border-4 border-white/10 shadow-2xl rotate-3" alt="Social Impact" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-card p-12 md:p-20 rounded-[48px] shadow-2xl flex flex-col items-center text-center">
          <SectionHeading
            centered
            sub="GET IN TOUCH"
            title="팀워크가 필요하세요? <br/>지금 바로 로잉프로와 상담하세요"
            desc="사무실에선 몰랐던 우리 팀의 진짜 호흡, 로잉프로 조정 교육 프로그램이 확실하게 보여드립니다."
          />

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl mt-8">
            <div className="flex-1 p-8 rounded-3xl bg-blue-50 border border-blue-100 flex items-center gap-6">
              <div className="bg-blue-600 p-4 rounded-2xl text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">상담 전화</p>
                <p className="text-2xl font-black text-gray-900 tracking-tight">02-1234-5678</p>
              </div>
            </div>
            <div className="flex-1 p-8 rounded-3xl bg-blue-50 border border-blue-100 flex items-center gap-6">
              <div className="bg-blue-600 p-4 rounded-2xl text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-bold uppercase mb-1">운영 장소</p>
                <p className="text-xl font-black text-gray-900">전국 조정 경기장</p>
              </div>
            </div>
          </div>

          <button className="mt-12 bg-blue-600 text-white px-16 py-7 rounded-3xl font-black text-2xl hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/40">
            상담 신청서 작성하기
          </button>

          <p className="mt-8 text-gray-400 font-medium">안전한 교육을 위해 사전 예약제로 운영됩니다.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black tracking-tighter mb-8 italic">ROWING<span className="text-blue-500">PRO</span></h2>
            <p className="text-blue-100/60 max-w-sm mb-10 leading-relaxed font-medium">
              로잉프로는 조정 교육을 통해 조직의 진정한 가치를 발견하고 최상의 팀워크를 실현하는 대한민국 No.1 조정 전문 교육 기업입니다.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Blog'].map(s => (
                <a key={s} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <span className="sr-only">{s}</span>
                  <Anchor className="w-5 h-5 text-blue-400" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase tracking-widest text-xs">Programs</h4>
            <ul className="space-y-4 font-medium text-blue-100/70">
              <li><a href="#" className="hover:text-white">기업 HRD 연수</a></li>
              <li><a href="#" className="hover:text-white">공공기관 팀빌딩</a></li>
              <li><a href="#" className="hover:text-white">학교체육 프로그램</a></li>
              <li><a href="#" className="hover:text-white">이벤트/축제 체험부스</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase tracking-widest text-xs">Information</h4>
            <ul className="space-y-4 font-medium text-blue-100/70">
              <li><a href="#" className="hover:text-white">회사 소개</a></li>
              <li><a href="#" className="hover:text-white">전문 코치진 소개</a></li>
              <li><a href="#" className="hover:text-white">사회공헌 소식</a></li>
              <li><a href="#" className="hover:text-white">동호인 클럽 운영</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-blue-100/40 text-sm font-medium">
          <p>© 2013-2025 ROWINGPRO. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white font-black text-blue-400">개인정보처리방침</a>
            <a href="#" className="hover:text-white">안전가이드</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueSection />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
