import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Settings, Factory, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1600/900/conveyor,factory?lock=1" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Premium Industrial Conveyor Systems
            </span>
            <h1 className="text-clamp-h1 font-black text-white mb-8 tracking-tighter">
              극한의 환경에서도 <br />
              <span className="text-primary italic">멈추지 않는 혁신</span>, <br />
              C콘베어 이송 시스템
            </h1>
            <p className="text-clamp-p text-gray-400 mb-10 max-w-2xl">
              수분 및 점성 물질, 슬러지 이송에 최적화된 독자적 벨트 설계로 
              잦은 고장으로 인한 라인 중단을 원천 차단합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact-support" 
                className="bg-primary text-dark px-8 py-4 text-lg font-bold rounded-sm hover:bg-yellow-500 transition-all flex items-center justify-center"
              >
                전문 엔지니어 맞춤 견적 상담 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/product-details" 
                className="border border-white/20 text-white px-8 py-4 text-lg font-bold rounded-sm hover:bg-white/10 transition-all text-center"
              >
                제품 라인업 보기
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-primary/50"></div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Challenge</h2>
              <h3 className="text-clamp-h2 font-black text-secondary mb-8 tracking-tight">
                기존 컨베이어의 한계, <br />
                귀사의 수익성을 갉아먹고 있지는 않습니까?
              </h3>
              <div className="space-y-6">
                {[
                  "슬러지 및 점성 물질로 인한 벨트 미끄러짐과 잦은 이탈",
                  "수분 노출로 인한 부식과 베어링 파손, 짧은 교체 주기",
                  "청소 및 유지보수를 위한 반복적인 라인 가동 중단",
                  "비효율적인 이송으로 인한 과도한 인건비 지출"
                ].map((text, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    </div>
                    <p className="text-lg text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://loremflickr.com/800/600/sludge,waste?lock=2" 
                alt="Pain Point Illustration" 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-dark p-8 rounded-sm shadow-xl hidden md:block">
                <p className="text-primary text-4xl font-black mb-1">35%</p>
                <p className="text-white text-sm font-medium">평균 생산성 저하 요인</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Core Technology</h2>
            <h3 className="text-clamp-h2 font-black tracking-tight">C콘베어만의 압도적인 기술력</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "초고내구성 설계",
                desc: "특수 합금 프레임과 강화 롤러를 사용하여 일반 컨베이어 대비 3배 이상의 수명을 보장합니다."
              },
              {
                icon: <Settings className="w-10 h-10 text-primary" />,
                title: "점성 물질 특화 벨트",
                desc: "수분과 점성이 높은 물질도 미끄러짐 없이 안정적으로 이송하는 독자적인 표면 처리 기술을 적용했습니다."
              },
              {
                icon: <Zap className="w-10 h-10 text-primary" />,
                title: "스마트 자동화 시스템",
                desc: "공정 간 완벽한 연동으로 인적 개입을 최소화하고 생산 라인의 흐름을 최적화합니다."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-dark/50 p-10 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-[#F2F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Applications</h2>
              <h3 className="text-clamp-h2 font-black text-secondary tracking-tight">어떤 산업 현장에서도 <br />완벽한 퍼포먼스를 보여줍니다.</h3>
            </div>
            <Link to="/solutions" className="text-secondary font-bold flex items-center hover:text-primary transition-colors">
              모든 솔루션 보기 <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "폐기물 처리 시설", img: "waste" },
              { name: "화학 공정 라인", img: "chemical" },
              { name: "식품 가공 공장", img: "food,factory" },
              { name: "대규모 물류 센터", img: "logistics" }
            ].map((item, i) => (
              <div key={i} className="relative h-[400px] group overflow-hidden">
                <img 
                  src={`https://loremflickr.com/600/800/${item.img}?lock=${i + 10}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-xl font-bold">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Success Stories</h2>
              <h3 className="text-clamp-h2 font-black text-secondary tracking-tight mb-6">검증된 효율성</h3>
              <p className="text-clamp-p text-gray-600 mb-8">
                C콘베어 도입 후 수많은 기업들이 가시적인 성과를 거두고 있습니다. 
                단순한 설비 교체를 넘어 비즈니스의 경쟁력을 높여드립니다.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">500+ 기업 도입 완료</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Factory />, label: "가동률 상승", value: "45%", desc: "유지보수 시간 단축으로 인한 실질 가동 시간 증가" },
                { icon: <BarChart3 />, label: "인건비 절감", value: "30%", desc: "이송 공정 자동화로 인한 불필요한 인력 배치 감소" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#F2F4F4] p-10 rounded-sm">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm mb-6 text-primary shadow-sm">
                    {stat.icon}
                  </div>
                  <p className="text-secondary font-bold mb-2">{stat.label}</p>
                  <p className="text-5xl font-black text-primary mb-4">{stat.value}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://loremflickr.com/800/800/blueprint?lock=50" alt="blueprint" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-clamp-h2 font-black text-white mb-8 tracking-tighter">
            지금 바로 귀사의 공정에 맞는 <br />
            <span className="text-primary italic">최적의 솔루션</span>을 확인하세요.
          </h2>
          <p className="text-clamp-p text-gray-400 mb-12 max-w-2xl mx-auto">
            현장 상황과 이송 물질에 따른 맞춤 설계를 제안해 드립니다. 
            전문 엔지니어가 직접 상담을 도와드립니다.
          </p>
          <Link 
            to="/contact-support" 
            className="inline-flex items-center bg-primary text-dark px-12 py-5 text-xl font-bold rounded-sm hover:bg-yellow-500 transition-all shadow-lg shadow-primary/20"
          >
            무료 견적 상담 신청하기 <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
