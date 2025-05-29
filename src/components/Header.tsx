import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // 아이콘 라이브러리 사용 (lucide-react 추천)
import logo from '../assets/aboutBlack.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="사이트 로고"
                        className="h-10 w-auto"
                    />
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <nav className="hidden md:flex space-x-4">
                    <Link
                        to="/about"
                        className="text-gray-600 hover:text-black"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        className="text-gray-600 hover:text-black"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        className="text-gray-600 hover:text-black"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-600 hover:text-black"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {menuOpen && (
                <nav className="flex flex-col mt-4 space-y-2 md:hidden">
                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-600 hover:text-black"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-600 hover:text-black"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-600 hover:text-black"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-600 hover:text-black"
                    >
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
