import React from 'react';
import gear from '../assets/gear.svg';
import perfil from '../assets/profile.png';

function Perfil() {
  return (
    <section className="bg-white min-h-screen py-6 px-4 md:px-[5rem] flex flex-col items-center md:items-start">
      <div className="flex flex-col md:flex-row gap-6 w-full">

      
        <div className="bg-[#91302A] w-full md:w-[20rem] h-auto md:h-[43rem] rounded-3xl flex flex-col items-center py-6">

         
          <div className="bg-[#D75044] w-[90%] md:w-[90%] h-auto md:h-[16rem] rounded-[2rem] mt-4 md:mt-[2rem] flex flex-col items-center relative px-4 py-4">
            <img src={gear} alt="Engrenagem" className="w-6 md:w-[2.4rem] absolute top-4 right-4" />
            <img src={perfil} alt="Perfil" className="w-[8rem] md:w-[12rem] mt-6" />
          </div>

          
          <div className="mt-4 text-center space-y-1">
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">Guilherme Pinheiro</p>
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">19 anos</p>
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">A+</p>
          </div>

        
          <div className="mt-4 w-full flex flex-col items-center gap-2 px-4">
            {['Historico', 'Comprovantes', 'Agendamento', 'Campanhas'].map((text, index) => (
              <button
                key={index}
                className="bg-[#C8392F] w-full md:w-[15rem] py-2 md:py-3 rounded-xl flex justify-center items-center cursor-pointer"
              >
                <span className="text-white text-base md:text-2xl font-bold font-[Montserrat]">{text}</span>
              </button>
            ))}
          </div>
        </div>

        
        <div className="bg-[#91302A] w-full h-[20rem] md:h-[43rem] rounded-3xl flex flex-col items-center">
          
        </div>
      </div>
    </section>
  )
}

export default Perfil
