import logo from '../assets/img/Bloodstones-Logo 1.png';

export default function Footer() {
  return (
    <footer className="w-full bg-black from-gray-900 via-black to-gray-900 border-t border-yellow-600/30 z-50">
      <div className="flex flex-col items-center justify-center px-8 py-6 space-y-3">
        <img 
          src={logo} 
          alt="Bloodstones Logo" 
          className="h-14 hidden md:block" 
        />
        <span className="text-gray-400 text-sm text-center">
          © 2025 Bloodstones. Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}
