import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/Bloodstones-Logo 1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Função para checar se a rota está ativa
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-black z-50 shadow-lg">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-col items-center py-7">
        <img src={logo} alt="Bloodstone Logo" className="h-25 mb-3" />
        <nav className="flex gap-10">
          <Link
            to="/"
            className={`text-white hover:text-yellow-500 font-bold text-lg transition-colors duration-200 pb-2 border-b-4 ${
              isActive("/") ? "border-yellow-500" : "border-transparent"
            }`}
          >
            INÍCIO
          </Link>
          <Link
            to="/historia"
            className={`text-white hover:text-yellow-500 font-bold text-lg transition-colors duration-200 pb-2 border-b-4 ${
              isActive("/historia") ? "border-yellow-500" : "border-transparent"
            }`}
          >
            HISTÓRIA
          </Link>
          <Link
            to="/quemsomos"
            className={`text-white hover:text-yellow-500 font-bold text-lg transition-colors duration-200 pb-2 border-b-4 ${
              isActive("/quemsomos") ? "border-yellow-500" : "border-transparent"
            }`}
          >
            SOBRE NÓS
          </Link>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        {/* Logo Mobile */}
        <img src={logo} alt="Bloodstone Logo" className="h-12" />

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gradient-to-b from-black to-gray-900 border-t border-yellow-600/30 transition-all duration-300 ease-in-out overflow-hidden relative z-50 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={`text-white hover:text-yellow-500 hover:bg-gray-800/50 font-bold text-lg py-4 px-6 transition-all duration-200 border-b border-gray-700/50 ${
              isActive("/")
                ? "border-l-4 border-yellow-500 bg-gray-800/30"
                : ""
            }`}
          >
            ⚔️ INÍCIO
          </Link>
          <Link
            to="/historia"
            onClick={closeMenu}
            className={`text-white hover:text-yellow-500 hover:bg-gray-800/50 font-bold text-lg py-4 px-6 transition-all duration-200 border-b border-gray-700/50 ${
              isActive("/historia")
                ? "border-l-4 border-yellow-500 bg-gray-800/30"
                : ""
            }`}
          >
            📜 HISTÓRIA
          </Link>
          <Link
            to="/quemsomos"
            onClick={closeMenu}
            className={`text-white hover:text-yellow-500 hover:bg-gray-800/50 font-bold text-lg py-4 px-6 transition-all duration-200 ${
              isActive("/quemsomos")
                ? "border-l-4 border-yellow-500 bg-gray-800/30"
                : ""
            }`}
          >
            🛡️ SOBRE NÓS
          </Link>
        </nav>
      </div>

      {/* Overlay para fechar menu quando clicar fora */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
}
