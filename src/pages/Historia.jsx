import Layout from "../components/Layout";
import ascensaoImg from "../assets/img/image - ascensão.png";
import KurobaImg from "../assets/img/kuroba01.png";
import bgImage from "../assets/img/Foto-mapa1.png";
import ImagemSombra from "../assets/img/Image-sombras.png";

export default function Historia() {
  return (
    <Layout>
      <section
        className="relative pt-[2rem] pb-[12rem] px-4 text-white text-center h-screen flex flex-col justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "-170px",
          paddingTop: "240px",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

        <div className="relative z-10" style={{ marginTop: "-200px" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-lg transition-all duration-300">
            História
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto relative" style={{ marginTop: "-400px", zIndex: 10 }}>
        <main className="pt-16 pb-16 min-h-screen text-white px-4 sm:px-6 lg:px-8">
          
          <section className="mb-16">
            <h2 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-4 drop-shadow-lg">
              ASCENSÃO
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                  src={ascensaoImg}
                  alt="Ascensão"
                  className="w-full max-w-lg h-auto rounded-lg shadow mx-auto"
                />
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <p className="drop-shadow-md text-sm sm:text-base lg:text-lg leading-relaxed">
                  Há muitas primaveras, tantas que mal se pode recordar, existiu uma civilização rica em ouro e arte.
                  Nela, sustentava-se uma tradição de ponderação e sabedoria, mantida a gerações por Doze Anciões. A
                  civilização vivia em paz e harmonia com a terra e a magia, distante de guerras e perigos, até o dia em
                  que uma sombra caiu sobre o mundo… Dos cantos mais sombrios da terra emergiram criaturas nunca antes
                  vistas, e na mesma violência que surgiram, passaram a dominar as terras com sua selvageria. Os Doze
                  Anciões buscaram por respostas cada um em uma direção do continente, até que a resposta veio na forma de
                  um herói: Kuroba, o herói de Dasmanpur. Sob a tutela de cada ancião, Kuroba ganhou habilidades e poderes
                  que o tornaram imbatível, e sozinho era capaz de limpar reinos de todas as criaturas que ameaçavam seu
                  povo. No entanto, a cada leva que ele exterminava, duas novas surgiam. Determinado a tornar-se o
                  salvador que todos ansiavam, buscou por mais poder e conhecimento não importasse o custo.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-yellow-500 text-xl sm:text-2xl font-bold mb-4 drop-shadow-lg">
              A QUEDA
            </h2>
            
            {/* Layout responsivo - mantém ordem original */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              
              <div className="w-full lg:w-1/2">
                <img 
                  src={KurobaImg} 
                  alt="A Queda" 
                  className="w-full max-w-lg h-auto rounded-lg shadow mx-auto"
                />
              </div>
              
              <div className="w-full lg:w-1/2">
                <p className="drop-shadow-md text-sm sm:text-base lg:text-lg leading-relaxed">
                  A mesma ânsia pelo título de salvador que movia Kuroba o corrompeu, e a busca pelo poder logo se tornou
                  um vício, até que por fim tornou-se o herói o próprio antagonista. Vilas perdidas, cidades tombadas e
                  vidas tomadas, levando o povo a temer aquele que um dia ovacionaram. Os Doze então reuniram-se para
                  juntos impedirem o agora perigoso Kuroba, e travaram uma batalha por doze dias e doze noites, à medida
                  que cada um sucumbia na batalha sem sequer um vislumbre de vitória. Foi diante do pior dos cenários que
                  optaram por um último feitiço, aquele que selaria para sempre Kuroba, o mestre sangrento, no estado de
                  pedra. Nas décadas que se seguiram à batalha, as ruínas foram esquecidas, a estátua de Kuroba foi dada
                  por um mero adorno, e o destino dos Doze Anciões se perdeu na história. Não restaram testemunhas nem
                  lágrimas, somente lendas e canções sobre uma mitológica batalha. A sombra no entanto, ficou apenas
                  adormecida, e as criaturas perigosas apenas aguardavam para retornarem à superfície.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>


      <section
        className="relative py-16 sm:py-20 lg:py-24 px-4 text-white text-center flex flex-col justify-center"
        style={{
          backgroundImage: `url(${ImagemSombra})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
      </section>
    </Layout>
  );
}