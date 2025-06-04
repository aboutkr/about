import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import logo from '../assets/logowhite.png';

export default function Footer() {
  return (
    <footer className="w-full bg-Ablue text-Abeige">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* 브랜드 소개 */}
        <div className="md:flex-1">
        <Link to="/">
          <img src={logo} alt="사이트 로고" className="h-10 md:h-12 w-auto" />
        </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            청년을 위한 콘텐츠 플랫폼<br />
            다양한 활동과 영감을 공유합니다.
          </p>
        </div>

        {/* 빠른 링크 */}
        <nav className="md:flex-1">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
              >
                소개
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                문의
              </Link>
            </li>
          </ul>
        </nav>

        {/* 연락처 및 SNS */}
        <div className="md:flex-1">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-3">이메일: <a href="mailto:aboutcompany@gmail.com" className="underline hover:text-white">aboutcompany@gmail.com</a></p>
          <div className="flex items-center gap-3 text-sm">
            <Instagram className="w-5 h-5 text-pink-500" />
            <a
              href="https://www.instagram.com/about_.youth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition-colors duration-300"
            >
              @about_.youth
            </a>
          </div>
        </div>
      </div>

      {/* 저작권 표시 */}
      <div className="border-t border-gray-400 py-5 text-center text-xs text-gray-300 select-none">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}
