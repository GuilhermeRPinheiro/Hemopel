import React, { useEffect, useState } from "react"
import coracao_branco from '../assets/coracaoBranco.png'
import CardCamp from '../Components/CardCamp'

function Campanhas() {
  const [campanhas, setCampanhas] = useState([])
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const resp = await fetch("http://localhost:3000/campaigns")
      const data = await resp.json()
      setCampanhas(data.filter(c => Number(c.progresso || c.progress) < 100))
      setCards(data.filter(c => Number(c.progresso || c.progress) >= 100))
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section className="bg-white min-h-screen">
      <div className="bg-white h-3" />

      {/* CAMPANHAS ATIVAS */}
      <div className="bg-[#91302A] mt-8 w-full max-w-[100rem] mx-auto rounded-[2.5rem] px-4 py-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <img src={coracao_branco} alt="" className="w-12 h-10" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Campanhas Ativas
          </h1>
        </div>

        <div className="space-y-4 mt-6">
          {loading ? (
            <div className="text-white text-center text-lg">Carregando campanhas...</div>
          ) : campanhas.length === 0 ? (
            <div className="text-white text-center text-lg">Nenhuma campanha ativa</div>
          ) : (
            campanhas.map((campanha, idx) => (
              <div key={idx} className="mx-2 sm:mx-8">
                <div className="flex justify-between text-sm m-2">
                  <span className="text-white text-base sm:text-lg font-medium font-['Montserrat']">
                    {campanha.nome}
                  </span>
                  <span className="text-white text-base sm:text-lg font-medium font-['Montserrat']">
                    {campanha.progresso || campanha.progress}%
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-3 m-2">
                  <div
                    className="bg-[#4FD31F] h-3 rounded-full"
                    style={{ width: `${campanha.progresso || campanha.progress}%` }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center mt-10 gap-6">
          <button className="bg-[#C8392F] hover:bg-[#c34033] px-10 py-3 rounded-2xl font-bold shadow-md text-xl sm:text-3xl cursor-pointer w-full sm:w-auto">
            Compartilhar
          </button>
          <button className="bg-[#C8392F] hover:bg-[#c34033] px-10 py-3 rounded-2xl font-bold shadow-md text-xl sm:text-3xl cursor-pointer w-full sm:w-auto">
            Seja um Doador
          </button>
        </div>
      </div>

      {/* CAMPANHAS CONCLUÍDAS */}
      <div className="bg-[#91302A] mt-8 w-full max-w-[100rem] mx-auto rounded-[2.5rem] px-4 py-8 mb-20">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <img src={coracao_branco} alt="" className="w-12 h-10" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Campanhas Concluídas
          </h1>
        </div>

        <div className="mt-10 px-2 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {cards.map((card, index) => (
              <CardCamp
                key={index}
                nome={card.nome}
                inicio={card.inicio}
                fim={card.fim}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white h-24" />
    </section>
  )
}

export default Campanhas
