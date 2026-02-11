
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-2xl font-black text-white mb-6">ROWING PRO</h2>
            <p className="max-w-md mb-8 leading-relaxed">
              로잉프로는 단순한 스포츠 교육을 넘어, 팀워크를 통해 개인의 성장과 
              조직의 화합을 실천하는 대한민국 최고의 조정 전문 기업입니다.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Blog', 'YouTube'].map(sns => (
                <a key={sns} href="#" className="hover:text-blue-500 transition-colors text-sm font-bold">{sns}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">프로그램 안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">강사진 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">온라인 문의</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>서울특별시 송파구 가락동 (본사)</li>
              <li>T. 02-1234-5678</li>
              <li>E. info@rowingpro.com</li>
              <li className="text-blue-500 font-bold">24/7 Safety Team Operational</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2013-2024 ROWING PRO. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white font-bold">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
