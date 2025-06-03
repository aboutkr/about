import React from 'react';
import { Link } from 'react-router-dom';

const text = 'W O Y M ?';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      {/* 첫 번째 섹션 */}
      <section className="snap-start px-20 bg-Abeige w-full h-screen flex justify-center items-center">
        <div
          className="w-4/5 h-3/5 bg-white rounded-[16px] relative"
          style={{ boxShadow: '6px 6px 0 0 black' }}
        >
          <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3">
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          </div>
          <div className="p-6 min-h-[300px] rounded-b-[16px]">
            <p className="text-gray-700 font-english italic mb-1 border-b-2 border-dashed border-gray-400 pb-2 mt-6">
              What is on your mind
            </p>
            <h2
              className="font-english font-bold flex justify-center items-end gap-2 w-full h-full text-[16vw] mt-1"
            >
              {text.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block opacity-0"
                  style={{
                    animation: 'dropIn 0.5s forwards',
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>
        </div>

        <style>{`
          @keyframes dropIn {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* 두 번째 섹션 */}
      <section className="snap-start px-20 bg-Abeige w-full h-screen flex justify-center items-center relative">
        <div className="z-10 text-center">
          <h1 className="text-4xl font-english font-extrabold tracking-wide leading-tight mb-8">
            ABOUT’s GOAL
          </h1>
          <p className="text-gray-700 font-korean max-w-md mx-auto">
            어바웃의 목표는 대한민국 청년들의 지적 수준을 높여<br />
            합리적이고 효율적인 생활을 할 수 있도록 돕는 것입니다.<br /><br />
            빠르게 변화하는 사회 속에서 함몰되지 않기 위해<br />
            스스로에 대한 노력의 시간을 확보해야합니다.<br /><br />
            어바웃의 모임 콘텐츠를 이용해 보다 재밌는 일상을 경험해보세요.<br />
            튜터가 기다리고 있겠습니다.
          </p>
          <Link to="/contact">
            <button
              className="mt-8 bg-[#fff] hover:bg-Aorange text-[#000] hover:text-[#fff] font-semibold py-3 px-6 rounded-[16px] shadow-md transition duration-300"
              style={{ boxShadow: '6px 6px 0 0 black' }}
            >
              Contact Us {'->'}
            </button>
          </Link>
        </div>

        <img
          src="/pinkflower.png"
          alt="꽃 왼쪽"
          className="absolute top-10 left-10 w-80 h-auto object-contain"
        />
        <img
          src="/blueflower.png"
          alt="꽃 오른쪽"
          className="absolute top-30 right-10 w-32 h-32 object-contain"
        />
        <img
          src="/orangeflower.png"
          alt="꽃 하단"
          className="absolute bottom-0 left-1/2 transform -translate-x-2/5 translate-y-1/2 w-36 h-36 z-10 object-contain"
        />
      </section>

      {/* 세 번째 섹션 */}
      <section className="snap-start w-full h-screen flex relative overflow-hidden">
        {/* 배경 기둥 */}
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-Apink' : 'bg-Abeige'}`}
          />
        ))}

        {/* 중앙 콘텐츠 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          {/* 창문 박스 3개 */}
          <div className="flex flex-wrap justify-center gap-16 mb-16">
            {[1, 2, 3].map((i) => {
              let title = '';
              let text = '';
              let boxBg = 'bg-white';
              let borderColor = 'transparent';

              if (i === 1) {
                title = '소통과 공유';
                text = '어바웃은 청년들과 소통하고 공유하는 모임입니다. 상호작용으로 함께 성장해요.';
              } else if (i === 2) {
                title = '질문과 교육';
                text = '어바웃은 질문에서 시작해 튜터와 함께하는 교육 콘텐츠를 제공합니다.';
                boxBg = 'bg-Apink';
                borderColor = '#FFDFE1';
              } else if (i === 3) {
                title = '목표와 성장';
                text = '어바웃은 청년들의 지적 성장과 효율적인 생활을 돕습니다. 스스로 노력하는 시간을 만드세요.';
              }

              return (
                <div
                  key={i}
                  className={`w-72 h-[380px] ${boxBg} rounded-t-full shadow-lg flex flex-col overflow-hidden`}
                  style={{ border: `4px solid ${borderColor}` }}
                >
                  {/* 이미지 영역 */}
                  <div className="h-[60%] w-full overflow-hidden rounded-t-full">
                    <img
                      src={`/thumb${i}.jpg`}
                      alt={`Window ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="font-korean flex flex-col justify-start items-center p-4 h-[40%]">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-center text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 하단 버튼 */}
          <Link to="/contents">
            <button
              className="bg-[#fff] hover:bg-Aorange hover:text-[#fff] text-[#000] font-semibold py-3 px-6 rounded-[16px] shadow-md transition duration-300"
              style={{ boxShadow: '6px 6px 0 0 black' }}
            >
              more
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
