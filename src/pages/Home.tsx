import { Link } from 'react-router-dom';

const text = 'W O Y M ?';

const renderCard = (i: number) => {
  const info = [
    {
      title: '소통과 공유',
      text: '어바웃유스(about-youth)는 청년들과 소통하고 공유하는 모임입니다. 상호작용으로 함께 성장해요.',
    },
    {
      title: '질문과 교육',
      text: '어바웃유스(about-youth)는 질문에서 시작해 튜터와 함께하는 교육 콘텐츠를 제공합니다.',
    },
    {
      title: '목표와 성장',
      text: '어바웃유스(about-youth)는 청년들의 지적 성장과 효율적인 생활을 돕습니다. 스스로 노력하는 시간을 만드세요.',
    },
  ][i - 1];

  const isSecond = i === 2;

  return (
    <div
      key={i}
      className={`w-52 sm:w-64 h-[280px] sm:h-[320px] lg:h-[360px] xl:h-[400px] rounded-t-full shadow-lg overflow-hidden border-4 ${
        isSecond ? 'bg-Apink border-white' : 'bg-white border-white'
      }`}
    >
      <div className="h-[60%]">
        <img
          src={`/thumb${i}.jpg`}
          alt={`thumb${i}`}
          className="w-full h-full object-cover rounded-t-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-4 flex-grow text-center font-korean">
        <h3 className="text-base sm:text-lg font-bold mb-2">{info.title}</h3>
        <p className="text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed">{info.text}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-Abeige pt-8 lg:pt-20">
      <title>어바웃유스 (about-youth) | 청년들을 위한 모든 콘텐츠가 있는 곳</title>
      <meta 
        name="description" 
        content="어바웃유스(about-youth)는 청년들의 성장과 다채로운 경험을 돕는 커뮤니티입니다. 소통, 교육, 성장을 위한 다양한 콘텐츠와 프로그램을 만나보세요." 
      />

      <section className="px-4 md:px-12 lg:px-20  w-full flex justify-center items-center py-12">
        <div
          className="w-full max-w-5xl bg-white rounded-[16px] h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh]"
          style={{ boxShadow: '6px 6px 0 0 black' }}
        >
          <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-4 gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="p-6 min-h-[300px] rounded-b-[16px]">
            <p
              className="text-gray-700 font-english italic mb-1 border-b-2 border-dashed border-gray-400 pb-2 mt-6"
            >
              What is on your mind
            </p>
            <h2
              className="font-english font-bold flex justify-center items-end gap-2 w-full h-full
              pt-6 lg:pt-0
              text-[16vw] sm:text-[14vw] md:text-[16vw] lg:text-[16vw] xl:text-[16vw]"
              style={{ marginTop: '0.2rem' }}
            >
              {text.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block opacity-0 animate-dropIn`}
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {char}
                </span>

              ))}
            </h2>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[60vh] lg:min-h-screen flex justify-center items-center px-10 md:px-12 lg:px-20 
        py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        <div className="z-10 text-center max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-english font-extrabold mb-6">
            ABOUT's goal
          </h1>
          <p className="text-sm sm:text-base text-gray-700 font-korean leading-relaxed">
            어바웃의 목표는 대한민국 청년들의 지적 수준을 높여<br />
            합리적이고 효율적인 생활을 할 수 있도록 돕는 것입니다.<br /><br />
            빠르게 변화하는 사회 속에서 함몰되지 않기 위해<br />
            스스로에 대한 노력의 시간을 확보해야합니다.<br /><br />
            어바웃의 모임 콘텐츠를 이용해 보다 재밌는 일상을 경험해보세요.<br />
            튜터가 기다리고 있겠습니다.
          </p>
          <Link to="/contact">
            <button className="mt-6 bg-white hover:bg-Aorange text-black hover:text-white font-semibold py-2 px-5 rounded-[16px] shadow-md transition duration-300" style={{ boxShadow: '6px 6px 0 0 black' }}>
              Contact Us {'->'}
            </button>
          </Link>
        </div>

        <img src="/pinkflower.png" alt="꽃 왼쪽" className="absolute top-5 left-4 w-24 sm:w-40 lg:w-64" />
        <img src="/orangeflower.png" alt="꽃 오른쪽" className="absolute top-30 right-10 w-16 sm:w-24 lg:w-28" />
        <img src="/blueflower.png" alt="꽃 하단" className="absolute z-10  bottom-0 left-3/5 transform -translate-x-1/2 translate-y-1/2 w-20 sm:w-28 lg:w-36" />
      </section>

      <section className="w-full min-h-[60vh] lg:min-h-screen bg-Apink relative overflow-hidden flex flex-col items-center justify-center px-4 py-12">
        <div className="absolute inset-0 z-0 flex">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-Apink' : 'bg-Abeige'}`}
            />
          ))}
        </div>

        <div className="hidden sm:flex lg:hidden flex-col gap-6 mb-12 z-10 w-full max-w-5xl mx-auto">
          <div className="flex justify-center">{renderCard(2)}</div>
          <div className="flex justify-center gap-6">
            {renderCard(1)}
            {renderCard(3)}
          </div>
        </div>

        <div className="flex sm:hidden flex-col items-center gap-6 mb-12 z-10 w-full max-w-5xl mx-auto">
          {renderCard(1)}
          {renderCard(2)}
          {renderCard(3)}
        </div>

        <div
          className="hidden lg:grid grid-cols-3 gap-6 mb-12 z-10 w-full max-w-5xl mx-auto"
          style={{ transform: 'translateX(calc((100% / 21) * 0.8))' }}
        >
          {renderCard(1)}
          {renderCard(2)}
          {renderCard(3)}
        </div>

        <div className="z-10 w-full max-w-5xl mx-auto flex justify-center">
          <Link to="/contents">
            <button
              className="bg-white hover:bg-Aorange hover:text-white text-black font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300"
              style={{ boxShadow: '6px 6px 0 0 black' }}
            >
              more
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}