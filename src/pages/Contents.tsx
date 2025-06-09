import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const contentData: {
  [key: string]: {
    poster: string;
    date: string;
    description: string;
    photos: string[];
  };
} = {
  "내용 1": {
    poster: "recoder/recoder.jpg",
    date: "2025년 6월 10일",
    description: `전직 작가님과 현직 쇼호스트가 말아주는 브랜딩 강연\n\n브랜딩을 하기 위해서는 나를 알리는게 중요하다.\n나를 알리는 두가지방법 글과 말.\n\n두가지를 한번에 배워갈 수 있는 특별 강연.`,
    photos: [
      "recoder/recoder-1.jpg",
      "recoder/recoder-2.jpg",
      "recoder/recoder-3.jpg",
      "recoder/recoder-4.jpg",
      "recoder/recoder-5.jpg",
      "recoder/recoder-6.jpg",
      "recoder/recoder-7.jpg",
      "recoder/recoder-8.jpg",
    ],
  },
  "내용 2": {
    poster: "/poster2.jpg",
    date: "2025년 6월 12일",
    description: "내용 2의 설명입니다.",
    photos: ["/img2-1.jpg", "/img2-2.jpg"],
  },
  "내용 3": {
    poster: "/poster3.jpg",
    date: "2025년 6월 14일",
    description: "내용 3에 대한 요약 내용입니다.",
    photos: ["/img3-1.jpg"],
  },
  "내용 4": {
    poster: "/poster4.jpg",
    date: "2025년 6월 18일",
    description: "내용 4 소개입니다.",
    photos: ["/img4-1.jpg", "/img4-2.jpg"],
  },
  "내용 5": {
    poster: "/poster5.jpg",
    date: "2025년 6월 21일",
    description: "내용 5 설명입니다.",
    photos: ["/img5-1.jpg"],
  },
  "내용 6": {
    poster: "/poster6.jpg",
    date: "2025년 6월 23일",
    description: "내용 6 개요입니다.",
    photos: ["/img6-1.jpg", "/img6-2.jpg", "/img6-3.jpg"],
  },
  "내용 7": {
    poster: "/poster7.jpg",
    date: "2025년 6월 25일",
    description: "내용 7의 간단 설명입니다.",
    photos: ["/img7-1.jpg"],
  },
};

const folderList = Object.keys(contentData);

interface TabProps {
  active?: boolean;
  onClick: () => void;
  label: string;
}

function Tab({ active = false, onClick, label }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`relative group h-12 overflow-visible ${active ? "z-10" : "z-0"}`}
    >
      <div
        className={`
          flex items-center h-full pl-6 pr-6 font-semibold 
          ${active ? "bg-Abeige text-black" : "bg-slate-200 group-hover:bg-gray-300"}
          rounded-tr-md rounded-br-md
        `}
      >
        <span>{label}</span>
      </div>

      <div
        className={`
          absolute left-[-16px] top-[-0px] w-8 
          ${active ? "bg-Abeige" : "bg-slate-200 group-hover:bg-gray-300"}
          -skew-x-[30deg] rounded-tl-md rounded-bl-md
        `}
        style={{ height: "100%" }}
      />
    </button>
  );
}

export default function Contents() {
  const [selected, setSelected] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  return (
    <section className="pt-20 px-4 sm:px-10 md:px-16 lg:px-20 bg-Abeige w-full flex justify-center items-start py-10">
      <div
        className="w-full max-w-6xl min-h-[80vh] bg-white rounded-[16px] relative flex flex-col pb-[10px]"
        style={{ boxShadow: "6px 6px 0 0 black" }}
      >
        {/* 상단 바 */}
        <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3 shrink-0">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        </div>

        {/* 타이틀 */}
        <div className="p-6 flex-shrink-0" style={{ minHeight: "80px" }}>
          <h2 className="text-[#000] font-english text-3xl font-extrabold italic mb-4 border-b-2 border-dashed border-gray-400 pb-2 pl-5">
            [ CONTENTS ]
          </h2>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex flex-col md:flex-row gap-0 m-6 rounded-xl relative flex-grow overflow-visible">
          {/* 왼쪽 리스트 */}
          <div className="w-full md:w-1/4 bg-slate-100 rounded-l-xl p-4 shadow-inner overflow-auto">
            <h3 className="text-lg font-bold mb-4">목록</h3>
            <ul className="space-y-2 text-sm">
              <li
                className={`cursor-pointer text-base ${selected === "All" ? "font-bold text-Ablue" : ""}`}
                onClick={() => setSelected("All")}
              >
                📁 All
              </li>
              {folderList.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-base ${selected === item ? "font-bold text-Ablue" : ""}`}
                  onClick={() => {
                    setSelected(item);
                    setSelectedIndex(1);
                  }}
                >
                  📁 {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 본문 콘텐츠 */}
          <div className="w-full md:w-3/4 p-4 border bg-Abeige border-gray-300 rounded-r-xl relative z-10 overflow-visible">
            {selected !== "All" && (
              <div className="absolute -top-11 right-4 flex gap-2 z-0">
                {[1, 2].map((i) => (
                  <Tab
                    key={i}
                    label={i === 1 ? "Program" : "Gallery"}
                    active={selectedIndex === i}
                    onClick={() => setSelectedIndex(i)}
                  />
                ))}
              </div>
            )}

            {selected === "All" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {folderList.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setSelected(item);
                      setSelectedIndex(1);
                    }}
                  >
                    <img
                      src="/folder1.png"
                      alt="folder"
                      className="w-20 h-20 object-contain"
                    />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <div className="p-4 border border-gray-400 rounded-lg bg-gray-50 min-h-[150px]">
                  {selectedIndex === 1 && (
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <img
                          src={contentData[selected]?.poster}
                          alt={`${selected} 포스터`}
                          className="w-full rounded shadow bg-white"
                        />
                      </div>

                      <div className="w-full md:w-1/2 space-y-3">
                        <h4 className="text-bold text-4xl">RECODER</h4>
                        <p className="text-xs text-gray-500">{contentData[selected]?.date}</p>
                        <p>{contentData[selected]?.description}</p>
                      </div>
                    </div>
                  )}

                  {selectedIndex === 2 && contentData[selected]?.photos.length > 0 && (
                    <div className="w-full max-w-3xl mx-auto px-4 py-4">
                      <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        arrows={true}
                        responsive={[
                          {
                            breakpoint: 1024,
                            settings: {
                              slidesToShow: 2,
                            },
                          },
                          {
                            breakpoint: 640,
                            settings: {
                              slidesToShow: 1,
                            },
                          },
                        ]}
                      >
                        {contentData[selected].photos.map((src, idx) => (
                          <div key={idx} className="px-2">
                            <img
                              src={src}
                              alt={`갤러리 이미지 ${idx + 1}`}
                              className="w-full max-h-[400px] object-contain rounded-xl bg-white"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
