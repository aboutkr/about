import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-Adeepblue text-Abeige">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2">MySite</h2>
                    <p className="text-sm text-Abeige leading-relaxed">
                        청년을 위한 콘텐츠 플랫폼
                        <br />
                        다양한 활동과 영감을 공유합니다.
                    </p>
                </div>

                <div className="flex-1">
                    <h3 className="text-md font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-gray-800"
                            >
                                홈
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-gray-800"
                            >
                                소개
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-gray-800"
                            >
                                문의
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-md font-semibold mb-2">Contact</h3>
                    <p className="text-sm mb-1">이메일: aboutcompany@gmail.com</p>
                    <div className="flex items-center gap-2 text-sm">
                        <Instagram className="w-4 h-4 text-pink-600" />
                        <a
                            href="https://www.instagram.com/about_.youth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            @about_.youth
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500 px-4">
                © {new Date().getFullYear()} MySite. All rights reserved.
            </div>
        </footer>
    );
}
