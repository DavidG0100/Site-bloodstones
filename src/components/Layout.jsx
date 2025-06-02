import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white">
      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal com padding para não ser sobreposto */}
      <main className="pt-[0rem] pb-[0rem] min-h-screen">
        {children}
      </main>

      {/* Rodapé fixo */}
      <Footer />
    </div>
  );
}
