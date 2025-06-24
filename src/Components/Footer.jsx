import React from "react";
import logofooter from '../assets/logofooter.png';
import telfooter from '../assets/Vector.svg';
import instafooter from '../assets/mdi_instagram.svg';
import emailfooter from '../assets/Group.svg';

export function Footer() {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-20 pt-8 md:pt-[3rem] pb-8 md:pb-[3rem] gap-10 md:gap-[16rem]">
        
        <img
          src={logofooter}
          alt=""
          className="w-[12rem] md:w-[18.4375rem] h-auto md:h-[10.55rem]"
        />

       
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-orange-800 text-2xl md:text-4xl font-extrabold font-['Montserrat'] uppercase mb-2">
            mapa do site
          </h1>
          <div className="w-[150px] md:w-[300px] h-[1px] bg-black mb-4" />
          <ul className="space-y-2">
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat']">Informações</li>
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat']">Doações</li>
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat']">Campanhas</li>
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat']">Agendamento</li>
          </ul>
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-orange-800 text-2xl md:text-4xl font-extrabold font-['Montserrat'] uppercase mb-2">
            contato
          </h1>
          <div className="w-[150px] md:w-[300px] h-[1px] bg-black mb-4" />
          <ul className="space-y-3">
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-4">
              <img src={telfooter} alt="" className="w-[1.2rem] md:w-[1.5rem]" />
              (51) 3288.9193
            </li>
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-4">
              <img src={instafooter} alt="" className="w-[1.2rem] md:w-[1.5rem]" />
              hemocentroregionaldepelotas
            </li>
            <li className="text-[#D75044] text-base md:text-2xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-4">
              <img src={emailfooter} alt="" className="w-[1.2rem] md:w-[1.5rem]" />
              captacao-hemopel@saude.rs.gov.br
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#A23020] h-[1rem]" />
    </>
  );
}
