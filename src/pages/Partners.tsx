export default function Partners() {
  return(
    <>
      <section className="pt-20 px-4 sm:px-10 md:px-16 lg:px-20 bg-Abeige w-full flex justify-center items-start py-10">
        <div
          className="w-4/5 bg-white rounded-[16px] relative flex flex-col"
          style={{
            boxShadow: '6px 6px 0 0 black',
          }}
        >
          <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3 shrink-0">
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          </div>

          <div className="p-6">
            <h2
              className="text-[#000] font-english text-3xl font-extrabold italic mb-4 border-b-2 border-dashed border-gray-400 pb-2 pl-5"
            >
              [ PARTNERS ]
            </h2>

<div className="flex flex-col md:flex-row gap-6 py-20 px-5">
  <div className="flex-1 bg-white rounded-[16px] p-6 shadow-md flex flex-col items-center gap-6">
    <div className="flex flex-col items-center w-full gap-2">
      <img
        src="/reframe.png"
        alt="Partner 1 Logo"
        className="w-24 h-24 object-contain"
      />
      <h3 className="font-bold text-xl truncate w-full text-center">⌜ReframePoint⌟</h3>
      <p className="text-gray-700 text-center text-ellipsis overflow-hidden line-clamp-2">
        리프레임은 청년 세대를 위한 심리 및 커리어 관련 프로그램을 개발·운영하는 단체입니다.
      </p>
    </div>
    <a
      href="https://reframepoint.co.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fff] hover:bg-Aorange hover:text-[#fff] text-[#000] border font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300 inline-block text-center"
      style={{
        boxShadow: '6px 6px 0 0 black',
      }}
    >
      방문하기
    </a>
  </div>

  <div className="flex-1 bg-white rounded-[16px] p-6 shadow-md flex flex-col items-center gap-6">
    <div className="flex flex-col items-center w-full gap-2">
      <img
        src="/iam.png"
        alt="Partner 2 Logo"
        className="w-24 h-24 object-contain"
      />
      <h3 className="font-bold text-xl truncate w-full text-center">⌜I AM⌟</h3>
      <p className="text-gray-700 text-center text-ellipsis overflow-hidden line-clamp-2">
        아이엠은 지혜를 기를 수 있는 프로그램을 통해 청년들의 연대를 꿈꾸는 비영리 단체입니다.
      </p>
    </div>
    <a
      href="https://www.whoiam.or.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fff] hover:bg-Aorange hover:text-[#fff] text-[#000] border font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300 inline-block text-center"
      style={{
        boxShadow: '6px 6px 0 0 black',
      }}
    >
      방문하기
    </a>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  )
}
