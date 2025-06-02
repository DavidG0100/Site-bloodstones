import { Link } from "react-router-dom";
import logo from '../assets/img/Bloodstones-Logo 1.png';

export default function Header() {
  return (
    <header className="w-full h-36 bg-black z-50 flex flex-col items-center py-4 shadow-lg">
      <img src={logo} alt="Bloodstone Logo" className="h-14 mb-2" />
      <nav className="flex gap-8">
        <Link to="/" className="text-white hover:text-yellow-500 font-bold">INÍCIO</Link>
        <Link to="/historia" className="text-white hover:text-yellow-500 font-bold">HISTÓRIA</Link>
        <Link to="/quemsomos" className="text-white hover:text-yellow-500 font-bold">SOBRE NÓS</Link>
      </nav>
    </header>
  );
}
