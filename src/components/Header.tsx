import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-Apink/70 backdrop-blur-md py-4 px-6">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img
                        src="/aboutpink.jpg"
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
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
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
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        About
                    </Link>
                    <Link
                        to="/contents"
                        onClick={() => setMenuOpen(false)}
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contents
                    </Link>
                    <Link
                        to="/partners"
                        onClick={() => setMenuOpen(false)}
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        Partners
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-Adeepblue hover:text-Aviolet border border-transparent hover:border-Aviolet transition-all duration-1000 rounded px-2 py-1"
                    >
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
