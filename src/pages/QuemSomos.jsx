import Button from "../components/Button";
import Layout from "../components/Layout";

export default function QuemSomos() {
  return (
    <Layout>
    <main className="pt-1 pb-24 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-800 to-red-600 py-4 px-8 rounded-lg mb-8 inline-block">
            <h1 className="text-5xl font-bold text-white mb-0 tracking-wide">QUEM SOMOS ?</h1>
          </div>
        </div>

        {/* Intro Text */}
        <div className="mb-12">
          <p className="text-gray-200 leading-relaxed text-lg mb-8">
            Somos um grupo apaixonado por tecnologia, formado na faculdade, com o objetivo de 
            reviver e transformar um clássico que marcou gerações: Bloodstone - The Ancient 
            Curse.
          </p>
          
          <p className="text-gray-200 leading-relaxed text-lg">
            Nosso projeto nasceu da vontade de resgatar esse jogo icônico, que foi abandonado pela 
            Jagex e AFL em sua nova reta, trazendo novamente Bloodstone de volta para os aventureiros 
            que tanto o amaram. Queremos oferecer uma experiência autêntica, mas com melhorias e 
            novos que eram ausentes e necessárias para jogadores modernos.
          </p>
        </div>

        {/* Por que Bloodstone? */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Por que Bloodstone ?</h2>
          <p className="text-gray-200 leading-relaxed">
            Bloodstone foi muito mais que apenas um jogo - foi uma experiência que nos envolveu 
            famílias inteiras e protagonizou memórias. Vimos seu o potencial para criar algo maior 
            do que apenas regolhar os redes de lances e novos jogadores. Queremos honrar esse 
            desafios em um RPG clássico de aventuras.
          </p>
        </div>

        {/* Nossa Missão */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Nossa Missão</h2>
          <p className="text-gray-200 leading-relaxed">
            Queremos homenagear o jogo original e, ao mesmo tempo, inovar. Nosso objetivo é 
            criar uma experiência imersiva, que cative tanto os veteranos quanto os novos 
            aventureiros. Cada detalhe será cuidadosamente trabalhado para entregar 
            algo que transcenda o original.
          </p>
        </div>

        {/* O que estamos fazendo? */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">O que estamos fazendo ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-400 mb-3 text-lg">MUDANÇAS NA HISTÓRIA</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Mantendo a essência que todos amam, mas com novas histórias e surpresas que vão surpreender até os veteranos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-400 mb-3 text-lg">NOVAS FUNCIONALIDADES</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Sistema de combate refinado, economia balanceada e recursos multiplayer completamente aprimorados.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-400 mb-3 text-lg">RECRIAÇÃO EM UNITY</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Construído completamente do zero na Unity, garantindo a máxima qualidade e performance moderna.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Você também pode fazer parte dessa jornada épica! Fantasia recriando Bloodstone e 
            sendo parte compatível com a comunidade que tanto ama este jogo, se registre e se 
            junte à nossa causa.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button>CADASTRE-SE AGORA</Button>
        </div>
      </div>
    </main>
    </Layout>
  );
}