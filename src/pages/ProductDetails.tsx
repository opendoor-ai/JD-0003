import { motion } from 'motion/react';
import { Download, CheckCircle2 } from 'lucide-react';

export default function ProductDetails() {
  const specs = [
    { label: '모터 사양', value: '0.75kW ~ 5.5kW (공정별 가변 적용)' },
    { label: '벨트 재질', value: '특수 내유/내열/내점성 강화 고무 및 PVC' },
    { label: '이송 속도', value: '10m/min ~ 60m/min (인버터 제어 가능)' },
    { label: '최대 경사', value: '최대 45도 (클릿 벨트 적용 시)' },
    { label: '프레임 재질', value: 'SS400 (분체도장) / SUS304 (스테인리스)' },
    { label: '롤러 직경', value: 'Ø60, Ø76, Ø101 (하중별 선택)' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-black text-secondary tracking-tighter mb-6">제품 상세 정보</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            C콘베어의 정밀한 설계와 강력한 내구성을 뒷받침하는 기술 사양을 확인하세요. 
            모든 제품은 고객사의 현장 요구 조건에 맞춰 커스터마이징이 가능합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <img 
              src="https://loremflickr.com/800/600/machinery,blueprint?lock=101" 
              alt="Product Spec" 
              className="rounded-sm shadow-xl mb-8"
              referrerPolicy="no-referrer"
            />
            <div className="bg-white p-8 border border-gray-200 rounded-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle2 className="text-primary mr-2" /> 주요 강점
              </h3>
              <ul className="space-y-4">
                {[
                  "수분 노출에도 부식되지 않는 특수 코팅 프레임",
                  "점성 물질 고착 방지를 위한 벨트 스크래퍼 시스템 기본 장착",
                  "저소음/고효율 기어드 모터 채택으로 에너지 절감",
                  "모듈형 설계로 현장 설치 및 확장 용이"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="text-primary mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider">Technical Specifications</h3>
            <div className="border-t border-dark">
              {specs.map((spec, i) => (
                <div key={i} className="flex py-6 border-b border-gray-200">
                  <div className="w-1/3 font-bold text-secondary">{spec.label}</div>
                  <div className="w-2/3 text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-dark text-white rounded-sm">
              <h4 className="text-xl font-bold mb-4">카탈로그 다운로드</h4>
              <p className="text-gray-400 mb-6 text-sm">
                상세 도면과 전체 라인업이 포함된 최신 카탈로그를 확인하세요.
              </p>
              <button className="w-full bg-primary text-dark py-4 font-bold rounded-sm flex items-center justify-center hover:bg-yellow-500 transition-all">
                PDF 카탈로그 받기 <Download className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Lineup Table */}
        <div className="bg-white overflow-hidden border border-gray-200 rounded-sm">
          <div className="bg-secondary text-white p-6">
            <h3 className="text-xl font-bold">표준 라인업 제원표</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-sm font-bold text-secondary">
                  <th className="p-4 border-b">모델명</th>
                  <th className="p-4 border-b">벨트폭 (mm)</th>
                  <th className="p-4 border-b">최대 하중 (kg/m)</th>
                  <th className="p-4 border-b">주요 용도</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {[
                  { model: 'C-CV 300', width: '300', load: '50', usage: '경량 슬러지, 소형 부품' },
                  { model: 'C-CV 500', width: '500', load: '120', usage: '일반 폐기물, 박스 이송' },
                  { model: 'C-CV 800', width: '800', load: '250', usage: '대용량 수분 물질, 산업 폐기물' },
                  { model: 'C-CV 1200', width: '1200', load: '500', usage: '중량물, 대규모 공정 라인' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b font-bold text-secondary">{row.model}</td>
                    <td className="p-4 border-b">{row.width}</td>
                    <td className="p-4 border-b">{row.load}</td>
                    <td className="p-4 border-b">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
