export default function About() {
    return (    
        <>
        <section className="px-20 bg-Abeige w-full h-screen flex justify-center items-center">

            <div className="max-w-5xl mx-auto px-4 py-12">
                <section className="text-left mb-8">
                    <h1 className="inline-block text-xl md:text-2xl text-black mb-3 border-2 border-gray-800 rounded-full px-4 md:px-5 py-1">
                        About Us
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        어바웃에서는 대외 활동을 하고 있는 모든 청년들과 소통하고 공유하는 모임을 준비했습니다.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
                    <div className="bg-white shadow-md rounded-2xl p-5 md:p-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">우리의 비전</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            우리는 사람들에게 영감을 주는 콘텐츠를 통해 사회에 긍정적인 영향을 주고자 합니다.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl p-5 md:p-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-2">우리가 하는 일</h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            다양한 시각자료, 인터랙션, 체험형 콘텐츠 등을 통해 독창적인 경험을 제공합니다.
                        </p>
                    </div>
                </section>

                <section className="">
                    <h2 className="inline-block text-lg md:text-xl text-black mb-6 border-2 border-gray-800 rounded-full px-4 md:px-5 py-1">
                        History
                    </h2>

                    <div className="space-y-8">
                        {/* 2014.06 */}
                        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                            <div className="text-base md:text-lg font-bold text-blue-800 w-24 shrink-0">2014.06</div>
                            <div className="space-y-1 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>청춘을 말하다 in 성북학습지원센터</p>
                                <p>세상 하나뿐인 당신을 위한 소중한 선물 청춘을 위한 9가지 이야기</p>
                                <p>시작을 말하다 in 경희대학교 중앙도서관</p>
                                <p>청춘 하소연하세요 in 고려대학교</p>
                                <p>청춘 시간을 아껴라 in 경희대학교 오비스쿨</p>
                            </div>
                        </div>

                        {/* 2017.09 */}
                        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                            <div className="text-base md:text-lg font-bold text-blue-800 w-24 shrink-0">2017.09</div>
                            <div className="space-y-1 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>기상천외 깃발을 올리자 이상한 일이 일어났다 in 대학로</p>
                                <p>브레인스쿨 in 유니브엑스포2016</p>
                                <p>브레인스쿨 in 대학로문화축제</p>
                                <p>말 인생을 바꾸다 전시회</p>
                                <p>이십대는 처음이라 매력잔치강연</p>
                                <p>능력개발교육 강사 워크숍 개최</p>
                            </div>
                        </div>

                        {/* 2020.02 */}
                        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                            <div className="text-base md:text-lg font-bold text-blue-800 w-24 shrink-0">2020.02</div>
                            <div className="space-y-1 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>나만의 색을 찾는 기쁨 퍼스널컬러 강연</p>
                                <p>자문위원 비대면 합동 워크숍 개최</p>
                                <p>인생수업, 나만의 이야기를 들려주세요 강연</p>
                                <p>어바웃TMI 올바른 가치관 확립을 위한 프로젝트</p>
                            </div>
                        </div>

                        {/* 2023 */}
                        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                            <div className="text-base md:text-lg font-bold text-blue-800 w-24 shrink-0">2023</div>
                            <div className="space-y-1 text-sm md:text-base text-gray-700 leading-relaxed">
                                <p>인생수업, INSIDE ME 강연</p>
                                <p>자문위원 대면 합동 워크숍 개최</p>
                                <p>인생수업, 날로 먹는 인생 강연</p>
                                <p>불금'1'데이-클래스 프로젝트</p>
                                <p>초청 강사 워크숍 개최</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </>  
    )
}
