import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/aboutlogo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-Abeige/70 backdrop-blur-md py-2 px-6 md:px-12 lg:px-20">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="사이트 로고" className="h-10 md:h-12 w-auto" />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {['about', 'contents', 'partners', 'contact'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="text-black hover:border-black transition-all duration-300 border border-transparent rounded px-3 py-1"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="flex flex-col mt-3 space-y-3 md:hidden">
          {['about', 'contents', 'partners', 'contact'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:border-black transition-all duration-300 border border-transparent rounded px-3 py-2"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
