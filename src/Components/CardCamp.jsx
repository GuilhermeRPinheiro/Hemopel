
// Função para formatar data em DD/MM/AAAA
function formatarData(data) {
  if (!data) return "";
  const date = new Date(data);
  return date.toLocaleDateString("pt-BR");
}

function CardCamp({ nome, inicio, fim }) {
  return (
    <div className="bg-[#B7332C] text-white shadow-md rounded-md p-4 w-[15rem] md:w-[17rem] flex flex-col justify-between h-[14rem]">
      <div className="space-y-2 flex flex-col items-center text-center">
        <h3 className="text-xl md:text-2xl font-extrabold font-['Montserrat'] break-words">
          {nome}
        </h3>
        <p className="text-base md:text-lg font-extrabold font-['Montserrat']">
          Início: {formatarData(inicio)}
        </p>
        <p className="text-base md:text-lg font-extrabold font-['Montserrat']">
          Fim: {formatarData(fim)}
        </p>
      </div>
    </div>
  )
}

export default CardCamp;
