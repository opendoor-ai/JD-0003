import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactSupport() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-black text-secondary tracking-tighter mb-6">문의 및 지원</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            제품 견적, 기술 상담, A/S 접수 등 무엇이든 문의해 주세요. 
            담당 전문가가 24시간 이내에 답변해 드립니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-dark p-10 rounded-sm text-white">
              <h3 className="text-2xl font-bold mb-8">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">대표 번호</p>
                    <p className="text-lg">010-6355-8055</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">이메일 문의</p>
                    <p className="text-lg">sales@c-conveyor.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">본사 위치</p>
                    <p className="text-lg">서울특별시 강남구 테헤란로 123</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">업무 시간</p>
                    <p className="text-lg">평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-secondary mb-4">A/S 및 기술 지원</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                설치된 장비의 유지보수나 긴급 수리가 필요한 경우 아래 전용 라인으로 연락 주시면 가장 빠르게 대응해 드립니다.
              </p>
              <p className="text-primary font-black text-2xl">010-6355-8055</p>
            </div>
          </div>

          {/* New Content replacing the form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 border border-gray-200 rounded-sm shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-3xl font-black text-secondary mb-8 tracking-tighter">
                신속한 상담과 <br />
                <span className="text-primary">최적의 솔루션</span>을 약속드립니다.
              </h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <CheckCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">24시간 이내 피드백</h4>
                    <p className="text-gray-600 text-sm">모든 문의에 대해 전문 엔지니어가 24시간 이내에 검토 후 답변을 드립니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <CheckCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">현장 맞춤형 컨설팅</h4>
                    <p className="text-gray-600 text-sm">단순 견적을 넘어, 현장 상황에 가장 적합한 이송 시스템 레이아웃을 제안합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                    <CheckCircle className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">철저한 사후 관리</h4>
                    <p className="text-gray-600 text-sm">설치 후에도 정기적인 점검과 신속한 A/S를 통해 라인 중단을 최소화합니다.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-8 rounded-sm text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Direct Consultation</p>
                  <p className="text-2xl font-black">지금 바로 전화로 상담하세요</p>
                </div>
                <a 
                  href="tel:010-6355-8055" 
                  className="bg-primary text-dark px-10 py-4 font-black text-xl rounded-sm hover:bg-yellow-500 transition-all flex items-center"
                >
                  <Phone className="mr-2 w-6 h-6" /> 010-6355-8055
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-secondary mb-8">오시는 길</h3>
          <div className="w-full h-[400px] bg-gray-200 rounded-sm relative overflow-hidden flex items-center justify-center">
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <p className="font-bold text-secondary">구글 맵 또는 네이버 지도 연동 영역</p>
              <p className="text-sm text-gray-500">서울특별시 강남구 테헤란로 123</p>
            </div>
            {/* Fake map background */}
            <div className="absolute inset-0 opacity-30 grayscale">
              <img src="https://loremflickr.com/1600/800/map?lock=500" alt="map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
