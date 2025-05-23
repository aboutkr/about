import { Link } from 'react-router-dom';
import logo from '../assets/aboutBlack.png';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <Link to="/">
                <img src={logo} alt="사이트 로고" className="h-10 w-auto" />
            </Link>
            <nav className="space-x-4">
                <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
                <Link to="/contents" className="text-gray-600 hover:text-black">Contents</Link>
                <Link to="/partners" className="text-gray-600 hover:text-black">Partners</Link>
                <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
            </nav>
        </header>
    )
}