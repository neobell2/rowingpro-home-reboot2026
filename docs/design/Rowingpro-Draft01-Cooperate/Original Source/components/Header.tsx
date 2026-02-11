
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-blue-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Placeholder */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
             <span className={`font-heading text-2xl tracking-tight ${isScrolled ? 'text-blue-700' : 'text-white'}`}>ROWING PRO</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Programs', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className={`btn-slide-hover px-6 py-2.5 text-xs font-bold uppercase tracking-tighter border-2 ${
            isScrolled ? 'border-blue-700 text-blue-700' : 'border-white text-white'
          }`}>
            상담 문의하기
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
