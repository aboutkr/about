//contents

import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from 'react-router-dom';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase ANON KEY:", supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);
interface ContentItem {
  id: string;
  title: string;
  date: string;
  description: string;
  poster_url: string;
  filename: string;
  photos: string[]; // photos 컬럼이 배열(string[])일 때
}

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
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selected, setSelected] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  
  const navigate = useNavigate();

  // DB에서 데이터 불러오기
  useEffect(() => {
    async function fetchContents() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("contents")
        .select("id, title, date, description, poster_url, photos, filename")
        .order("date", { ascending: true });

      if (error) {
        setError(error.message);
      } else if (data) {
        setContents(data);
      }
      setLoading(false);
    }

    fetchContents();
  }, []);

  // 폴더 리스트: 모든 콘텐츠의 title 중 중복 없이
  const folderList = Array.from(new Set(contents.map((c) => c.title)));

  // 선택된 폴더에 해당하는 콘텐츠 필터링
  // 여기서 'selected'는 title 기준 필터임
  const filteredContents =
    selected === "All"
      ? contents
      : contents.filter((c) => c.title === selected);

  // 실제 보여줄 단일 콘텐츠 (선택된 게 있으면 첫 번째 아이템)
  const currentContent = filteredContents[0];

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

        {/* 로딩/에러 */}
        {loading && <p className="p-4 text-center text-gray-600">로딩중...</p>}
        {error && <p className="p-4 text-center text-red-600">에러: {error}</p>}

        {/* 메인 콘텐츠 */}
        {!loading && !error && (
          <div className="flex flex-col md:flex-row gap-0 m-6 rounded-xl relative flex-grow overflow-visible">
            {/* 왼쪽 리스트 */}
            <div className="w-full md:w-1/4 bg-slate-100 rounded-l-xl p-4 shadow-inner overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">● List</h3>
                <span>
                  <button
                    onClick={() => navigate('/Admin/login')}
                    className="bg-gray-100 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-[12px] shadow-md transition duration-300 border"
                    style={{ boxShadow: '4px 4px 0 0 black' }}
                  >
                    +
                  </button>
                </span>
              </div>
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
              ) : currentContent ? (
                <div className="mt-4">
                  <div className="p-4 border border-gray-400 rounded-lg bg-gray-50 min-h-[150px]">
                    {selectedIndex === 1 && (
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-full md:w-1/2">
                          <img
                            src={currentContent.poster_url}
                            alt={`${selected} 포스터`}
                            className="w-full rounded shadow bg-white"
                          />
                        </div>
                        <div className="w-full md:w-1/2 space-y-3">
                          <h4 className="text-bold text-4xl">{selected}</h4>
                          <p className="text-xs text-gray-500">{currentContent.date}</p>
                          <p style={{ whiteSpace: "pre-line" }}>{currentContent.description}</p>
                        </div>
                      </div>
                    )}

                    {selectedIndex === 2 && currentContent.photos.length > 0 && (
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
                          {currentContent.photos.map((src, idx) => (
                            <div key={idx} className="px-2">
                              <img
                                src={src}
                                alt={`갤러리 이미지 ${idx + 1}`}
                                className="w-full h-[300px] object-cover object-center rounded-xl bg-white"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">선택한 콘텐츠가 없습니다.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

