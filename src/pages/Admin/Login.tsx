import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FIXED_EMAIL = import.meta.env.VITE_LOGIN_EMAIL;
const FIXED_PASSWORD = import.meta.env.VITE_LOGIN_PASSWORD;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //vercel add Environment Variables
    if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
      localStorage.setItem('logged_in', 'true');
      console.log('로그인 성공! 대시보드로 이동합니다.');
      navigate('/Admin/dashboard');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <section className="pt-20 px-4 sm:px-10 md:px-16 lg:px-20 bg-Abeige w-full flex justify-center items-start py-10">
      <div
        className="w-4/5 max-w-md bg-white rounded-[16px] relative flex flex-col"
        style={{ boxShadow: '6px 6px 0 0 black' }}
      >
        <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3 shrink-0">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        </div>

        <div className="p-6">
          <h2 className="text-[#000] font-english text-3xl font-extrabold italic mb-4 border-b-2 border-dashed border-gray-400 pb-2 pl-5">
            [ LOGIN ]
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="이메일"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
              className="w-full border rounded p-2"
            />

            {/* 버튼 그룹 */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-white border hover:bg-Aorange hover:text-white text-black font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300"
                style={{ boxShadow: '6px 6px 0 0 black' }}
              >
                로그인
              </button>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-gray-200 border hover:bg-gray-300 text-black font-semibold py-2 px-6 rounded-[16px] shadow-md transition duration-300"
                style={{ boxShadow: '6px 6px 0 0 black' }}
              >
                메인으로
              </button>
            </div>
          </form>

          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}
        </div>
      </div>
    </section>
  );
}
