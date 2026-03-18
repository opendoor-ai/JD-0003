import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-dark font-black text-lg italic">C</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tighter">C-CONVEYOR</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              C콘베어는 극한의 환경에서도 멈추지 않는 혁신적인 이송 솔루션을 제공합니다. 
              슬러지, 폐기물, 점성 물질 이송에 특화된 독자적 기술력으로 
              귀사의 생산 라인을 한 단계 업그레이드 해드립니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/product-details" className="hover:text-primary transition-colors">제품 상세 정보</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">산업별 솔루션</Link></li>
              <li><Link to="/about-us" className="hover:text-primary transition-colors">회사 소개</Link></li>
              <li><Link to="/contact-support" className="hover:text-primary transition-colors">고객 지원</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>T. 010-6355-8055</li>
              <li>E. info@c-conveyor.com</li>
              <li>H. 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 C-CONVEYOR Co., Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
