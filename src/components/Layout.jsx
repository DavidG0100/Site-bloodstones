import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white">
      <div className="relative z-10">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
