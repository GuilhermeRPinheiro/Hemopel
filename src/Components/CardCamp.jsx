import React from "react";

function CardCamp ({ nome, inicio, fim }){
    return(
        <>
        <div className="bg-[#B7332C] text-white shadow-md rounded-md p-4 w-[15rem] flex flex-col justify-center h-[13rem]">
            <div className="mt-[1rem]">
                <h3 className="w-96 h-16 justify-start text-white text-2xl font-extrabold font-['Montserrat']">{nome}</h3>
                <p className="w-72 h-16 justify-start text-white text-xl font-extrabold font-['Montserrat'] ml-[1.5rem]">Início: {inicio}</p>
                <p className="w-72 h-16 justify-start text-white text-xl font-extrabold font-['Montserrat'] ml-[1.5rem]">Fim: {fim}</p>
            </div>
    </div>
        </>
    )
}

export default CardCamp