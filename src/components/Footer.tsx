import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 text-gray-600">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-lg font-semibold mb-2">MySite</h2>
                    <p className="text-sm text-gray-500">
                        청년을 위한 콘텐츠 플랫폼
                        <br />
                        다양한 활동과 영감을 공유합니다.
                    </p>
                </div>

                <div>
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

                {/* 소셜 or 연락처 */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Contact</h3>
                    <p className="text-sm">이메일: aboutcompany@gmail.com</p>
                    <div className="flex items-center gap-2 mt-1 text-sm">
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

            <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} MySite. All rights reserved.
            </div>
        </footer>
    );
}
