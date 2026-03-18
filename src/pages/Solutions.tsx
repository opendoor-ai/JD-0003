import { motion } from 'motion/react';
import { Settings2, Recycle, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      title: "슬러지 및 폐기물 처리 솔루션",
      icon: <Recycle className="w-12 h-12" />,
      desc: "수분 함량이 높은 슬러지나 점성이 강한 산업 폐기물 이송 시 발생하는 벨트 오염과 미끄러짐 문제를 완벽하게 해결합니다.",
      features: ["벨트 세척 스크래퍼 시스템", "누수 방지 사이드 가드", "내부식성 SUS 프레임"]
    },
    {
      title: "공정 간 자동 이송 시스템",
      icon: <Cpu className="w-12 h-12" />,
      desc: "생산 라인의 각 단계별로 최적화된 이송 경로를 설계하여 물류 흐름을 자동화하고 병목 현상을 제거합니다.",
      features: ["센서 연동 속도 제어", "다단 적재 및 분류 시스템", "MES/ERP 시스템 연동 가능"]
    },
    {
      title: "기존 설비 교체 및 최적화",
      icon: <Settings2 className="w-12 h-12" />,
      desc: "노후화된 기존 컨베이어 라인을 진단하고, C콘베어의 고내구성 시스템으로 교체하여 유지보수 비용을 획기적으로 절감합니다.",
      features: ["현장 정밀 실측 서비스", "최소 가동 중단 교체 공법", "에너지 효율 최적화 진단"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#F2F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-black text-secondary tracking-tighter mb-6">산업별 맞춤 솔루션</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            단순한 장비 공급을 넘어, 귀사의 공정 특성에 가장 적합한 
            이송 시스템을 설계하고 구축해 드립니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row bg-white rounded-sm shadow-sm overflow-hidden ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 h-[400px] relative">
                <img 
                  src={`https://loremflickr.com/800/600/factory,automation?lock=${i + 200}`} 
                  alt={sol.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20"></div>
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <div className="text-primary mb-6">{sol.icon}</div>
                <h3 className="text-3xl font-bold text-secondary mb-6">{sol.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {sol.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {sol.features.map((f, j) => (
                    <div key={j} className="flex items-center text-sm font-medium text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {f}
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact-support" 
                  className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors"
                >
                  상세 상담 신청 <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 bg-dark p-16 rounded-sm text-white">
          <h3 className="text-3xl font-bold text-center mb-16">시스템 구축 프로세스</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "현장 진단", desc: "전문 엔지니어의 현장 방문 및 이송 물질 분석" },
              { step: "02", title: "최적 설계", desc: "공정 흐름에 맞춘 커스텀 레이아웃 및 사양 설계" },
              { step: "03", title: "정밀 제작", desc: "엄격한 품질 관리 하에 본사 공장 직접 생산" },
              { step: "04", title: "설치 및 시운전", desc: "숙련된 기술팀의 현장 설치 및 안정화 테스트" }
            ].map((item, i) => (
              <div key={i} className="relative z-10">
                <p className="text-primary text-5xl font-black mb-4 opacity-50">{item.step}</p>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 -z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
