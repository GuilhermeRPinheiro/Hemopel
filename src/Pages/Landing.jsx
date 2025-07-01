import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import imagemPrincipal from '../assets/368cc560a47ec94ad21baa5e4ecdcb5c50bd1018.png'
import logo from '../assets/logo.svg'
import imagemBaixo from '../assets/6e37a0aab8a9daed540dbebda76f4ec846123469.png'
import seta from '../assets/seta.svg'
import CardCamp from '../Components/CardCamp'
import CardDep from '../Components/CardDep'

function Landing() {
  const navigate = useNavigate()
  const [campanhasAtivas, setCampanhasAtivas] = useState([])
  const [campanhasConcluidas, setCampanhasConcluidas] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://localhost:3000/campaigns")
      const data = await resp.json()
      // Ativas: progresso < 100
      setCampanhasAtivas(data.filter(c => Number(c.progresso || c.progress) < 100))
      // Concluídas: progresso >= 100
      setCampanhasConcluidas(data.filter(c => Number(c.progresso || c.progress) >= 100))
    }
    fetchData()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <section className="bg-white flex flex-col md:flex-row items-center justify-between py-10 px-6 mx-auto gap-16 w-full">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={imagemPrincipal}
            alt="Imagem principal"
            className="w-full max-w-[766px] md:max-w-[530px] max-h-[749px] object-contain md:ml-50"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:ml-30 md:items-start text-center md:text-left">
          <h1 className="text-[#91302A] text-[24px] w-60 md:h-30 md:leading-[1.1] md:w-130 md:text-[50px] font-extrabold font-['Montserrat']">
            Torne-se agora um doador de sangue
          </h1>
          <h2 className="text-[#91302A] text-[15px] w-80 md:w-140 md:text-[24px] font-extrabold font-['Montserrat'] mt-4">
            Cadastre-se para se tornar um doador, agendar doações e salvar vidas!
          </h2>
          <button
            onClick={() => navigate('/cadastro')}
            className="bg-[#C8392F] rounded-[0.9375rem] w-[17.5rem] h-[4rem] text-white text-[2rem] font-extrabold font-['Montserrat'] mt-6 cursor-pointer"
          >
            Cadastrar-se
          </button>
        </div>
      </section>

      <section
        className="relative w-full flex flex-col py-10 items-center gap-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imagemBaixo})` }}
      >
        <div className="flex items-center justify-center gap-3">
          <img src={logo} alt="Logo" className="w-[3rem] h-[3rem]" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Campanhas
          </h1>
        </div>

        <div className="w-full max-w-[1200px] px-4 flex flex-col md:flex-row gap-10 justify-between">
          {/* Barras - Ativas */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col justify-center rounded-[2.8125rem] bg-[rgba(145,48,42,0.45)] py-8 font-['Montserrat'] md:px-2 px-6 max-w-[400px] mx-auto md:mx-0">
            <h2 className="text-white text-xl md:text-2xl font-extrabold mb-4 md:mb-6 text-center">
              Ativas
            </h2>
            {campanhasAtivas.length === 0 ? (
              <div className="text-white text-center text-lg">Nenhuma campanha ativa</div>
            ) : (
              campanhasAtivas.map((campanha, idx) => (
                <div key={idx} className="mt-4 mx-2 md:mx-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white text-base md:text-lg font-medium font-['Montserrat']">
                      {campanha.nome}
                    </span>
                    <span className="text-white text-base md:text-lg font-medium font-['Montserrat']">
                      {campanha.progresso || campanha.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3">
                    <div
                      className="bg-[#4FD31F] h-3 rounded-full"
                      style={{ width: `${campanha.progresso || campanha.progress}%` }}
                    />
                  </div>
                </div>
              ))
            )}
            <div className="flex flex-col md:flex-row justify-around items-center mb-10 gap-6">
              <button
                onClick={() => navigate('/campanhas')}
                className="bg-[#C8392F] hover:bg-[#c34033] px-10 py-3 rounded-2xl font-bold shadow-md text-xl md:text-3xl cursor-pointer w-full md:w-auto"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Cards - Concluídas */}
          <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col">
            <div className="flex items-center md:justify-start justify-center gap-3 mb-6 md:mb-10 md:ml-55">
              <h1 className="text-white text-2xl md:text-2xl font-extrabold font-['Montserrat']">
                Concluídas
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              {campanhasConcluidas.length === 0 ? (
                <div className="text-white text-center text-lg col-span-2">Nenhuma campanha concluída</div>
              ) : (
                campanhasConcluidas.map((card, index) => (
                  <div key={index} className="flex justify-center px-2">
                    <CardCamp nome={card.nome} inicio={card.inicio} fim={card.fim} />
                  </div>
                ))
              )}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center mb-10 gap-6 mt-10 w-full px-4">
              <button
                onClick={() => navigate('/campanhas')}
                className="bg-[#C8392F] hover:bg-[#c34033] px-20 py-3 rounded-2xl font-bold shadow-md text-xl md:text-3xl cursor-pointer w-full md:w-auto mx-auto"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#91302A] py-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <img src={logo} alt="" className="w-[3rem] h-[3rem]" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Depoimentos
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center md:gap-30 gap-6 px-4 md:py-10 md:mb-15">
          <img
            src={seta}
            alt=""
            className="hidden md:block max-w-full object-contain"
          />
          <CardDep texto="A doação salvou a vida do meu irmão!" nome="João Silva" />
          <CardDep texto="Doei pela primeira vez, foi emocionante!" nome="Maria Santos" />
          <CardDep texto="Doar sangue é um ato de amor." nome="Carlos Lima" />
          <img
            src={seta}
            alt=""
            className="hidden md:block max-w-full object-contain scale-x-[-1]"
          />
        </div>
      </section>
    </div>
  )
}

export default Landing
