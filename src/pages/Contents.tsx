export default function Contents() {
  return (
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
              [ CONTENTS ]
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
