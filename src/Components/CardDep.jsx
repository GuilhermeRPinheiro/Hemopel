import React from "react";
import perfil from "../assets/profile.png"


function CardDep({ nome, texto }) {
  return (
    <div className="bg-[#C8392F] text-white rounded-[50px] w-56 h-56 p-4 flex flex-col justify-center items-center font-['Montserrat'] text-center">
      <img src={perfil} alt="" className="size-30"/>
      <h3 className="text-lg font-bold mb-2">{nome}</h3>
      <p className="text-sm">{texto}</p>
    </div>
  );
}

export default CardDep;
