import { useState } from 'react';
import Layout from "../components/Layout";
import Button from "../components/Button";
import AttackCard from "../components/AttackCard";
import SignupModal from "../components/SignupModal";
import bgImage from "../assets/img/teste-imagem1.png";
import imageAtaque1 from "../assets/img/imageAtaque.png";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      {/* Seção com imagem de fundo - Mais alta com efeito esfumaçado */}
      <section
        className="relative pt-[8rem] pb-[16rem] px-4 text-white text-center min-h-screen flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro para dar contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Efeito esfumaçado nas bordas horizontais */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Conteúdo */}
        <div className="relative z-20 flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-shadow-lg">UM MMORPG ÉPICO</h1>
          
          <Button 
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg" 
            onClick={openModal}
          >
            CADASTRE-SE AGORA
          </Button>
        </div>
      </section>

      {/* Seção abaixo da imagem de fundo */}
      <section className="bg-black text-center px-4 pb-24 pt-16">
        <div className="flex justify-center mt-6 mb-10">
          <div className="w-full max-w-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/BYaJZYBVnkA"
              title="Bloodstone Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-white">
          CONHEÇA UM POUCO DO QUE VAI JOGAR
        </h2>

        {/* Cards com mais margem das bordas */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-20">
            <AttackCard
              imageSrc={imageAtaque1}
              title="TIPOS DE ATAQUE"
              description="Conheça os diferentes estilos de combate e estratégias para enfrentar seus inimigos em Bloodstone."
            />
            <AttackCard
              imageSrc={imageAtaque1}
              title="TIPOS DE ATAQUE"
              description="Cada classe tem habilidades únicas, explore combinações para dominar o campo de batalha."
            />
            <AttackCard
              imageSrc={imageAtaque1}
              title="TIPOS DE ATAQUE"
              description="Descubra os pontos fracos dos inimigos e use ataques certos para vencê-los com eficiência."
            />
          </div>
        </div>
      </section>

      {/* Modal de Cadastro */}
      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </Layout>
  );
}