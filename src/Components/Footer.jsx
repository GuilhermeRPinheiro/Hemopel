import React from "react";
import { Link } from 'react-router-dom'
import logofooter from '../assets/logofooter.png';
import telfooter from '../assets/Vector.svg';
import instafooter from '../assets/mdi_instagram.svg';
import emailfooter from '../assets/Group.svg';

export function Footer() {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-20 pt-8 md:pt-[3rem] pb-8 md:pb-[3rem] gap-12 md:gap-32 lg:gap-48">
        <img
          src={logofooter}
          alt="Hemopel"
          className="w-[10rem] md:w-[14rem] lg:w-[16rem] h-auto"
        />

       
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-orange-800 text-xl md:text-3xl font-extrabold font-['Montserrat'] uppercase mb-2">
            mapa do site
          </h1>
          <div className="w-32 md:w-64 h-[1px] bg-black mb-4" />
          <ul className="space-y-2">
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat']">Informações</li>
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat']">Doações</li>
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat']">
            <Link to="/campanhas">Campanhas</Link>
              </li>
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat']">Agendamento</li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center md:items-start">
          
          <h1 className="text-orange-800 text-xl md:text-3xl font-extrabold font-['Montserrat'] uppercase mb-2">
            contato
          </h1>
          <div className="w-32 md:w-64 h-[1px] bg-black mb-4" />

          <ul className="space-y-3">
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-3">
              <img src={telfooter} alt="Telefone" className="w-5 md:w-6" />
              (51) 3288.9193
            </li>
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-3">
              <img src={instafooter} alt="Instagram" className="w-5 md:w-6" />
              hemocentroregionaldepelotas
            </li>
            <li className="text-[#D75044] text-sm md:text-xl font-semibold font-['Montserrat'] flex items-center gap-2 md:gap-3">
              <img src={emailfooter} alt="Email" className="w-5 md:w-6" />
              captacao-hemopel@saude.rs.gov.br
            </li>
          </ul>
        </div>
      </div>

      
      <div className="bg-[#A23020] h-4 md:h-5 w-full" />
    </>
  )
}
