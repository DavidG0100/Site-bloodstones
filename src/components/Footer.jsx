import logo from '../assets/img/Bloodstones-Logo 1.png'; // ajuste o caminho conforme necessário

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-yellow-600/30 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo e Copyright */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Bloodstones Logo" className="h-14" />
          <span className="text-gray-400 text-sm">
            © 2025 Bloodstones. Todos os direitos reservados
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-sm">
          <a 
            href="#" 
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 border-r border-gray-600 pr-6"
          >
            Termos de uso
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 border-r border-gray-600 pr-6"
          >
            Política de Privacidade
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}
