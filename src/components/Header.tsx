import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/aboutlogo.png'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-Abeige/70 backdrop-blur-md py-2 px-20">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="사이트 로고"
                        className="h-auto w-20"
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
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
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
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        onClick={() => setMenuOpen(false)}
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        onClick={() => setMenuOpen(false)}
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-[#000] hover:text-[#000] border border-transparent hover:border-[#000] transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
