export default function About() {
  return (
    <>
      <section className="pt-20 px-20 bg-Abeige w-full flex justify-center items-start py-10">
        <div
          className="w-4/5 bg-white rounded-[16px] relative flex flex-col"
          style={{
            boxShadow: '6px 6px 0 0 black',
          }}
        >
          {/* 맥북 상단 바 */}
          <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3 shrink-0">
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          </div>

          <div className="p-6">
            <h2
              className="text-[#000] font-english text-3xl font-extrabold italic mb-4 border-b-2 border-dashed border-gray-400 pb-2 pl-5"
            >
              [ ABOUT ]
            </h2>

            <section className="w-full bg-Bbeige px-6 md:px-20 py-16 flex justify-center items-start">
              <div className="w-full max-w-5xl space-y-16">
                {/* About Us 헤더 */}
              <section className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 bg-Bpink text-black font-bold text-lg md:text-2xl gap-2">
                  <img
                    src="/pinkflower.png"
                    alt="About Us Icon"
                    className="w-8 h-8"
                  />
                  About Us
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  어바웃에서는 대외 활동을 하고 있는 모든 청년들과 소통하고 공유하는 모임을 준비했습니다.
                </p>
              </section>

                {/* 카드 섹션 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 transition hover:shadow-xl">
                    <h2 className="text-xl md:text-xl font-bold text-black mb-2">
                      ⌜ Our Vision ⌟
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      우리는 사람들에게 영감을 주는 콘텐츠를 통해 사회에 긍정적인 영향을 주고자 합니다.
                    </p>
                  </div>
                  <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 transition hover:shadow-xl">
                    <h2 className="text-xl md:text-xl font-bold text-black mb-2">
                      ⌜ What We Do ⌟
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      다양한 시각자료, 인터랙션, 체험형 콘텐츠 등을 통해 독창적인 경험을 제공합니다.
                    </p>
                  </div>
                </section>

                {/* History 섹션 */}
                <section className="space-y-8">
                  <div className="inline-flex items-center px-3 py-1 bg-Bpink text-black font-bold text-lg md:text-2xl gap-2">
                  <img
                    src="/orangeflower.png"
                    alt="About Us Icon"
                    className="w-8 h-8"
                  />
                    History
                  </div>

                  {/* 연도별 타임라인 */}
                  <div className="space-y-10">
                    {[
                      {
                        year: '2014.06',
                        events: [
                          '청춘을 말하다 in 성북학습지원센터',
                          '세상 하나뿐인 당신을 위한 소중한 선물 청춘을 위한 9가지 이야기',
                          '시작을 말하다 in 경희대학교 중앙도서관',
                          '청춘 하소연하세요 in 고려대학교',
                          '청춘 시간을 아껴라 in 경희대학교 오비스쿨',
                        ],
                      },
                      {
                        year: '2017.09',
                        events: [
                          '기상천외 깃발을 올리자 이상한 일이 일어났다 in 대학로',
                          '브레인스쿨 in 유니브엑스포2016',
                          '브레인스쿨 in 대학로문화축제',
                          '말 인생을 바꾸다 전시회',
                          '이십대는 처음이라 매력잔치강연',
                          '능력개발교육 강사 워크숍 개최',
                        ],
                      },
                      {
                        year: '2020.02',
                        events: [
                          '나만의 색을 찾는 기쁨 퍼스널컬러 강연',
                          '자문위원 비대면 합동 워크숍 개최',
                          '인생수업, 나만의 이야기를 들려주세요 강연',
                          '어바웃TMI 올바른 가치관 확립을 위한 프로젝트',
                        ],
                      },
                      {
                        year: '2023',
                        events: [
                          '인생수업, INSIDE ME 강연',
                          '자문위원 대면 합동 워크숍 개최',
                          '인생수업, 날로 먹는 인생 강연',
                          "불금'1'데이-클래스 프로젝트",
                          '초청 강사 워크숍 개최',
                        ],
                      },
                    ].map(({ year, events }) => (
                      <div key={year} className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="text-base md:text-lg font-bold text-blue-800 w-24 shrink-0">{year}</div>
                        <ul className="space-y-1 text-sm md:text-base text-gray-700 leading-relaxed list-disc list-inside">
                          {events.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
