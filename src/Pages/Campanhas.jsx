import React from "react";
import coracao_branco from '../assets/coracaobranco.png';
import CardCamp from '../Components/CardCamp';

const campanhas = [
  { nome: 'Fulano da Silva', progresso: 86 },
  { nome: 'Ciclano Junior', progresso: 50 },
  { nome: 'Beltrano Santos', progresso: 30 },
  { nome: 'Fulano da Silva', progresso: 65 },
  { nome: 'Ciclano Junior', progresso: 15 },
  { nome: 'Beltrano Santos', progresso: 90 },
];

const cards = [
  { nome: 'Fulano da Silva', inicio: '01/06/25', fim: '30/06/25' },
  { nome: 'Ciclano Junior', inicio: '10/06/25', fim: '25/06/25' },
  { nome: 'Beltrano Santos', inicio: '05/06/25', fim: '20/06/25' },
  { nome: 'Ana Paula', inicio: '02/06/25', fim: '28/06/25' },
  { nome: 'Lucas Lima', inicio: '15/06/25', fim: '30/06/25' },
  { nome: 'Maria Souza', inicio: '01/06/25', fim: '15/06/25' },
  { nome: 'João Pedro', inicio: '03/06/25', fim: '29/06/25' },
  { nome: 'Fernanda Dias', inicio: '07/06/25', fim: '22/06/25' },
];

function Campanhas() {
  return (
    <section className="bg-white min-h-screen">
      <div className="bg-white h-3" />

      
      <div className="bg-[#91302A] mt-8 w-full max-w-[100rem] mx-auto rounded-[2.5rem] px-4 py-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <img src={coracao_branco} alt="" className="w-12 h-10" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Campanhas Ativas
          </h1>
        </div>

        <div className="space-y-4 mt-6">
          {campanhas.map((campanha, idx) => (
            <div key={idx} className="mx-2 sm:mx-8">
              <div className="flex justify-between text-sm m-2">
                <span className="text-white text-base sm:text-lg font-medium font-['Montserrat']">{campanha.nome}</span>
                <span className="text-white text-base sm:text-lg font-medium font-['Montserrat']">{campanha.progresso}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 m-2">
                <div
                  className="bg-[#4FD31F] h-3 rounded-full"
                  style={{ width: `${campanha.progresso}%` }}
                ></div>
              </div>
            </div>
          ))}
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

      
      <div className="bg-[#91302A] mt-8 w-full max-w-[100rem] mx-auto rounded-[2.5rem] px-4 py-8 mb-20">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <img src={coracao_branco} alt="" className="w-12 h-10" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat']">
            Campanhas Concluídas
          </h1>
        </div>

        <div className="mt-10 px-2 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:ml-[4.5rem] ml-[3rem]">
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
