export default function Home() {
    return (
        <>
        <section className="bg-Apink pt-[72px] px-20 lg:min-h-screen before:relative ">
        <div className="w-full relative">
            <div
            className="text-Adeepblue font-playfair italic absolute left-[5vw] top-[15vh] whitespace-nowrap"
            style={{ fontSize: '10vw', maxWidth: '80vw', lineHeight: '1.2' }}
            >
            <div className="mb-2">What's On</div>
            <div className="ml-[13vw]">Your Mind?</div>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[100px] pointer-events-none">
            <svg
            viewBox="0 0 1440 100"
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill="#FFFCFB"
                d="
                M0,60 
                Q 60,20 120,60 
                T 240,60 
                T 360,60 
                T 480,60 
                T 600,60 
                T 720,60 
                T 840,60 
                T 960,60 
                T 1080,60 
                T 1200,60 
                T 1320,60 
                T 1440,60 
                V 100 
                H 0 
                Z
                "
            />
            </svg>

            <img
            src="/flower.png"
            alt="Overlay"
            className="absolute left-1/4 bottom-[-20px] -translate-x-1/2 w-[170px] h-[170px] z-20"
            />
        </div>
    </section>

<section className="bg-Abeige px-20 relative z-0 pt-10 pb-20 flex flex-col items-center gap-16">
  {/* 웨이브 텍스트 */}
  <div className="relative w-full h-[200px] -mb-[20px] bg-[#FFFCFB] overflow-visible">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-4/5"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="wavePath"
        d="
          M0,60
          C 60,50 120,70 180,60
          S 300,70 360,60
          S 480,50 540,60
          S 660,70 720,60
          S 840,50 900,60
          S 1020,70 1080,60
          S 1200,50 1260,60
          S 1380,70 1440,60
        "
        fill="none"
      />
<text fontSize="40" fontFamily="'Unbounded', sans-serif" dominantBaseline="middle">
  <textPath href="#wavePath" startOffset="50%" textAnchor="middle">
    <tspan
      fill="#B4BCEB"
      fontWeight="300"
      fontSize="32"
      letterSpacing="3px"
    >
      It's the goal of
    </tspan>
    <tspan
      dx="18"
      fill="#6B84E7"
      fontWeight="700"
      fontSize="48"
      letterSpacing="6px"
    >
      ABOUT
    </tspan>
  </textPath>
</text>


    </svg>
  </div>

  {/* 카드들 */}
  <div className="flex justify-center items-center gap-10 flex-wrap">
    {[1, 2, 3].map((i) => {
      let title = '';
      let text = '';
      let bgColor = 'bg-Ablue';
      let borderColor = '#CDD4EF';

      if (i === 1) {
        title = '소통과 공유';
        text = '어바웃은 청년들과 소통하고 공유하는 모임입니다. 상호작용으로 함께 성장해요.';
      } else if (i === 2) {
        title = '질문과 교육';
        text = '어바웃은 질문에서 시작해 튜터와 함께하는 교육 콘텐츠를 제공합니다.';
        bgColor = 'bg-Apink';
        borderColor = '#FFDFE1';
      } else if (i === 3) {
        title = '목표와 성장';
        text = '어바웃은 청년들의 지적 성장과 효율적인 생활을 돕습니다. 스스로 노력하는 시간을 만드세요.';
      }

      return (
        <div
          key={i}
          className={`${bgColor} w-[280px] rounded-t-[130px] rounded-b-3xl overflow-hidden shadow-lg flex flex-col`}
          style={{ borderTopLeftRadius: '130px', borderTopRightRadius: '130px', minHeight: '420px' }}
        >
          {/* 이미지 영역 */}
          <div
            className="w-full h-[220px] overflow-hidden"
            style={{
              borderTopLeftRadius: '130px',
              borderTopRightRadius: '130px',
              border: `8px solid ${borderColor}`,
            }}
          >
            <img
              src={`/thumb${i}.jpg`}
              alt={`Thumb ${i}`}
              className="w-full h-full object-cover"
              style={{ borderTopLeftRadius: '130px', borderTopRightRadius: '130px' }}
            />
          </div>

          {/* 텍스트 */}
          <div className="px-6 pt-6 pb-8 flex-grow flex flex-col justify-start items-center text-center">
            <h3 className="text-[22px] text-blue-950 font-bold font-nanumpen leading-tight mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-800 text-[15px] leading-relaxed font-pretendard tracking-normal max-w-[230px]">
              {text}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>








        </>
    );
}

