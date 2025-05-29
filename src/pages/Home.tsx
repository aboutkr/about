export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="lg:min-h-screen text-white flex flex-col items-center justify-center relative">
                <div className="lg:h-screen h-72 w-full relative">
                    <img
                        className="w-full absolute bottom-24 object-cover"
                        src="./name.png"
                        alt="aboutName"
                    />
                </div>
            </section>

            <section className="min-h-screen bg-light text-gray-900 flex flex-col items-center justify-center relative px-4 py-16 overflow-hidden">
                <h1 className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-bold opacity-10 text-gray-800 pointer-events-none select-none z-0">
                    FILLVOID
                </h1>

                <div className="w-full max-w-6xl z-10 flex flex-col gap-10">
                    {/* 첫 번째 줄 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-md h-48 md:h-40 flex flex-col justify-between w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-2">FILLVOID</h3>
                            <p className="text-sm text-gray-700 leading-snug">
                                어바웃에서는 대외 활동을 하고 있는 모든 청년들과 소통하고 공유하는 모임을 준비했습니다.
                                <br />
                                어바웃에서는 '질문'에서 부터 시작했습니다.
                                <br />
                                나에게 꼭 필요한 질문을 통해 튜터와 함께 하는 모임 콘텐츠를 제공하여 교육 문화를
                                선도하고자 합니다.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md h-48 md:h-40 overflow-hidden w-full md:w-1/2">
                            <img
                                src="/main1.jpg"
                                alt="placeholder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* 제목 */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center text-gray-800">Inspiration</h1>

                    {/* 두 번째 줄 */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-white rounded-xl shadow-md h-48 md:h-40 overflow-hidden w-full md:w-1/2">
                            <img
                                src="/main2.jpg"
                                alt="placeholder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md h-48 md:h-40 flex flex-col justify-between w-full md:w-1/2">
                            <h3 className="text-xl font-bold mb-2">FILLVOID</h3>
                            <p className="text-sm text-gray-700 leading-snug">
                                나에게 꼭 필요한 질문을 통해 튜터와 함께 하는 모임 콘텐츠를 제공하여 교육 문화를
                                선도하고자 합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer 텍스트 */}
                <div className="mt-12 text-center text-sm text-gray-600 z-10 max-w-md px-2">
                    <p>
                        At the end of the ordinary day,
                        <br />
                        when you fully focus on the sensuous moment
                        <br />
                        to find your inner self that is blurring in countless relationships,
                        <br />
                        life becomes clear again.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-neutral-100 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-8">About Us</h2>
                    <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                        어바웃에서는 대외 활동을 하고 있는 모든 청년들과 소통하고 공유하는 모임을 준비했습니다.
                        <br />
                        어바웃에서는 '질문'에서 부터 시작했습니다.
                        <br />
                        나에게 꼭 필요한 질문을 통해 튜터와 함께 하는 모임 콘텐츠를 제공하여 교육 문화를 선도하고자
                        합니다.
                        <br />
                        <br />
                        문제를 해결하고 대처하는 능력을 위해 어바웃에서는 일방적 소통이 아닌, 상호작용을 위해
                        발전하겠습니다.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-neutral-50 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-8">A B O U T 의 목표</h2>
                    <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                        어바웃의 목표는 청년들의 지적 수준을 높여 합리적이고 효율적인 생활을 할 수 있도록 돕는 것입니다.
                        <br />
                        <br />
                        빠르게 변화하는 사회 속에서 함몰되지 않기 위해 스스로에 대한 노력의 시간을 확보해야 합니다.
                        <br />
                        <br />
                        어바웃의 모임 콘텐츠를 이용해 보다 재밌는 일상을 경험해보세요.
                        <br />
                        튜터가 기다리고 있겠습니다.
                    </p>
                </div>
            </section>
        </>
    );
}
