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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // EmailJS 서비스 ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // 템플릿 ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // 공개 API 키
      )
      .then(() => {
        setSent(true)
      })
      .catch((error) => {
        console.error('FAILED...', error)
      })
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="inline-block text-2xl  text-black mb-3 border-2 border-gray-800 rounded-full px-5 py-1">Contact Us</h1>

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
            className="border-2 border-gray-800 text-black px-4 py-2 rounded hover:bg-gray-300 "
          >
            보내기
          </button>
        </form>
      )}
    </div>
  )
}
