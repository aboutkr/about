import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
      )
      .then(() => {
        setSent(true)
      })
      .catch((error) => {
        console.error('FAILED...', error)
      })
  }

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
              [ CONTACT ]
            </h2>
    <div className="max-w-xl mx-auto py-8 px-4">
      <div className='pb-3 text-xl'> E-mail</div>
      {sent ? (
        <p className="text-green-600 text-center">메일이 성공적으로 전송되었습니다!</p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="이름"
            required
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            name="user_email"
            placeholder="이메일"
            required
            className="w-full border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="문의 내용"
            required
            rows={5}
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="bg-white border hover:bg-Aorange hover:text-white text-black font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300"
            style={{ boxShadow: '6px 6px 0 0 black' }}
          >
            보내기
          </button>
        </form>
      )}
    </div>

          </div>
        </div>
      </section>
    </>


  )
}
