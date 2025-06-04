import { useState } from 'react';
import Button from "../components/Button";
import Layout from "../components/Layout";
import SignupModal from "../components/SignupModal";
import { HiOutlineDocumentText, HiOutlinePuzzlePiece, HiOutlineCube } from "react-icons/hi2";

export default function QuemSomos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <main className="pt-1 pb-24 bg-black from-black via-gray-900 to-black min-h-screen text-white w-full">
        {/*Container*/}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          <div className="text-center mt-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-gradient-to-r from-red-800 to-red-600 py-3 sm:py-4 lg:py-6 px-6 sm:px-8 lg:px-12 rounded-lg mb-6 sm:mb-8 inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-0 tracking-wide">
                QUEM SOMOS ?
              </h1>
            </div>
          </div>

          <div className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 max-w-none">
              Somos um grupo apaixonado por tecnologia, formado na faculdade, com o objetivo de reviver e transformar um
              clássico que marcou gerações: Bloodstone - The Ancient Curse.
            </p>

            <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl max-w-none">
              Nosso projeto nasceu da vontade de resgatar esse jogo icônico, que foi abandonado pela Jagex e AFL em sua
              nova reta, trazendo novamente Bloodstone de volta para os aventureiros que tanto o amaram. Queremos
              oferecer uma experiência autêntica, mas com melhorias e novos que eram ausentes e necessárias para
              jogadores modernos.
            </p>
          </div>

          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-3 sm:mb-4 lg:mb-6">
              Por que Bloodstone ?
            </h2>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl max-w-none">
              Bloodstone foi muito mais que apenas um jogo - foi uma experiência que nos envolveu famílias inteiras e
              protagonizou memórias. Vimos seu o potencial para criar algo maior do que apenas regolhar os redes de
              lances e novos jogadores. Queremos honrar esse desafios em um RPG clássico de aventuras.
            </p>
          </div>

          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-3 sm:mb-4 lg:mb-6">
              Nossa Missão
            </h2>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl max-w-none">
              Queremos homenagear o jogo original e, ao mesmo tempo, inovar. Nosso objetivo é criar uma experiência
              imersiva, que cative tanto os veteranos quanto os novos aventureiros. Cada detalhe será cuidadosamente
              trabalhado para entregar algo que transcenda o original.
            </p>
          </div>

          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400 mb-6 sm:mb-8 lg:mb-12">
              O que estamos fazendo ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              {/* Card 1 */}
              <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                  <HiOutlineDocumentText className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400" />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                  MUDANÇAS NA HISTÓRIA
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                  Mantendo a essência que todos amam, mas com novas histórias e surpresas que vão surpreender até os
                  veteranos.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                  <HiOutlinePuzzlePiece className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400" />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                  NOVAS FUNCIONALIDADES
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                  Sistema de combate refinado, economia balanceada e recursos multiplayer completamente aprimorados.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-black/40 border border-yellow-600/30 rounded-lg p-4 sm:p-6 lg:p-8 text-center md:col-span-2 xl:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center border border-yellow-600/50">
                  <HiOutlineCube className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400" />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                  RECRIAÇÃO EM UNITY
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                  Construído completamente do zero na Unity, garantindo a máxima qualidade e performance moderna.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-none">
              Você também pode fazer parte dessa jornada épica!se registre e se junte à nossa causa.
            </p>
          </div>

          <div className="text-center">
            <Button onClick={openModal}>
              CADASTRE-SE AGORA
            </Button>
          </div>
        </div>

        <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </Layout>
  );
}
