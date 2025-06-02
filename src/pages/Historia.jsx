import Layout from "../components/Layout";
import ascensaoImg from "../assets/img/image - ascensão.png";
import quedaImg from "../assets/img/Image-mago.png";

export default function Historia() {
  return (
    <Layout>
      <main className="pt-5 pb-24 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white px-8">
        <h1 className="text-7xl font-bold mb-8">História</h1>

        <section className="mb-8">
          <h2 className="text-yellow-500 text-2xl font-bold mb-2">ASCENSÃO</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="md:w-1/2">
              Há muitas primaveras, tantas que mal se pode recordar, existiu uma civilização rica em ouro e arte. Nela, sustentava-se uma tradição de ponderação e sabedoria, mantida a gerações por Doze Anciões. A civilização vivia em paz e harmonia com a terra e a magia, distante de guerras e perigos, até o dia em que uma sombra caiu sobre o mundo… Dos cantos mais sombrios da terra emergiram criaturas nunca antes vistas, e na mesma violência que surgiram, passaram a dominar as terras com sua selvageria. Os Doze Anciões buscaram por respostas cada um em uma direção do continente, até que a resposta veio na forma de um herói: Kuroba, o herói de Dasmanpur. Sob a tutela de cada ancião, Kuroba ganhou habilidades e poderes que o tornaram imbatível, e sozinho era capaz de limpar reinos de todas as criaturas que ameaçavam seu povo. No entanto, a cada leva que ele exterminava, duas novas surgiam. Determinado a tornar-se o salvador que todos ansiavam, buscou por mais poder e conhecimento não importasse o custo.
            </p>

            <img
              src={ascensaoImg}
              alt="Ascensão"
              className="max-w-lg w-full h-auto rounded-lg shadow mx-auto md:ml-100"/>

          </div>
        </section>

        <section>
          <h2 className="text-yellow-500 text-2xl font-bold mb-2">A QUEDA</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={quedaImg}
              alt="A Queda"
              className="md:w-1/2 max-w-lg w-full h-auto rounded-lg shadow"
            />
            <p className="md:w-1/2">
              A mesma ânsia pelo título de salvador que movia Kuroba o corrompeu, e a busca pelo poder logo se tornou um vício, até que por fim tornou-se o herói o próprio antagonista. Vilas perdidas, cidades tombadas e vidas tomadas, levando o povo a temer aquele que um dia ovacionaram. Os Doze então reuniram-se para juntos impedirem o agora perigoso Kuroba, e travaram uma batalha por doze dias e doze noites, à medida que cada um sucumbia na batalha sem sequer um vislumbre de vitória. Foi diante do pior dos cenários que optaram por um último feitiço, aquele que selaria para sempre Kuroba, o mestre sangrento, no estado de pedra. Nas décadas que se seguiram à batalha, as ruínas foram esquecidas, a estátua de Kuroba foi dada por um mero adorno, e o destino dos Doze Anciões se perdeu na história. Não restaram testemunhas nem lágrimas, somente lendas e canções sobre uma mitológica batalha. A sombra no entanto, ficou apenas adormecida, e as criaturas perigosas apenas aguardavam para retornarem à superfície.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
