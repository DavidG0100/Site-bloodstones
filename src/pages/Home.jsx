import Layout from "../components/Layout";
import Button from "../components/Button";
import AttackCard from "../components/AttackCard";
import bgImage from "../assets/img/1_YvxAMX2WntRM3HNT2wufAA.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Seção com imagem de fundo (apenas o topo até antes do vídeo) */}
      <section
        className="pt-[10rem] pb-[10rem] px-4 text-white text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Button className="mb-4">CADASTRE-SE AGORA</Button>
        <h1 className="text-4xl font-bold mb-6">UM MMORPG ÉPICO</h1>

      </section>

      {/* Seção abaixo da imagem de fundo */}
<section className="text-center px-4 pb-24">
  <div className="flex justify-center mt-6 mb-6">
    <div className="w-full max-w-7xl aspect-video">
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

  <h2 className="text-2xl font-semibold mb-4">
    CONHEÇA UM POUCO DO QUE VAI JOGAR
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-12">
    <AttackCard
      imageSrc="/img/ataque1.png"
      title="TIPOS DE ATAQUE"
      description="Conheça os diferentes estilos de combate e estratégias para enfrentar seus inimigos em Bloodstone."
    />
    <AttackCard
      imageSrc="/img/ataque2.png"
      title="TIPOS DE ATAQUE"
      description="Cada classe tem habilidades únicas, explore combinações para dominar o campo de batalha."
    />
    <AttackCard
      imageSrc="/img/ataque3.png"
      title="TIPOS DE ATAQUE"
      description="Descubra os pontos fracos dos inimigos e use ataques certos para vencê-los com eficiência."
    />
  </div>
</section>

    </Layout>
  );
}
