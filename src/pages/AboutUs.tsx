import { motion } from 'motion/react';
import { Award, History, Users, Building2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Story</h2>
            <h1 className="text-5xl font-black text-secondary tracking-tighter mb-8 leading-tight">
              산업 이송의 새로운 기준을 <br />만들어가는 사람들
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              C콘베어는 지난 20년간 산업용 컨베이어 시스템 한 길만을 걸어왔습니다. 
              우리는 단순히 물건을 옮기는 기계를 만드는 것이 아니라, 
              고객사의 생산 효율을 극대화하고 작업 환경을 개선하는 가치를 만듭니다.
            </p>
            <div className="bg-gray-100 p-8 border-l-4 border-primary italic text-secondary font-medium">
              "우리의 기술이 멈추지 않을 때, 대한민국의 공장도 멈추지 않습니다."
              <p className="mt-4 not-italic font-bold text-sm">— CEO 홍길동</p>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://loremflickr.com/800/1000/factory,office?lock=301" 
              alt="Company Building" 
              className="rounded-sm shadow-2xl grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <History />, label: "설립 연도", value: "2006" },
            { icon: <Users />, label: "전문 엔지니어", value: "45+" },
            { icon: <Award />, label: "보유 특허", value: "12" },
            { icon: <Building2 />, label: "글로벌 파트너", value: "150+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-[#F2F4F4] rounded-sm">
              <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-secondary">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-secondary mb-12 text-center">주요 연혁</h3>
          <div className="max-w-3xl mx-auto">
            {[
              { year: "2024", event: "스마트 팩토리 연동형 차세대 C-CV 시리즈 출시" },
              { year: "2021", event: "ISO 9001 / 14001 품질 및 환경 경영 인증 획득" },
              { year: "2018", event: "수분/점성 특화 벨트 스크래퍼 독자 특허 등록" },
              { year: "2015", event: "제2 생산 공장 준공 및 R&D 센터 확장" },
              { year: "2006", event: "C콘베어 주식회사 설립" }
            ].map((item, i) => (
              <div key={i} className="flex items-start mb-8 group">
                <div className="w-24 font-black text-primary text-xl pt-1">{item.year}</div>
                <div className="flex-1 pb-8 border-b border-gray-200 group-last:border-0">
                  <p className="text-lg text-secondary font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-secondary p-16 rounded-sm text-white text-center">
          <h3 className="text-2xl font-bold mb-12 uppercase tracking-widest">Quality Certifications</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">ISO</div>
              <p className="text-xs">ISO 9001</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">CE</div>
              <p className="text-xs">CE 인증</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">INNO</div>
              <p className="text-xs">이노비즈 인증</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">PAT</div>
              <p className="text-xs">특허청 우수제품</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
