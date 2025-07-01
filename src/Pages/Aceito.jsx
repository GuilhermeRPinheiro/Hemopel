import iconeCoracao from '../assets/coracaobranco.png';


function Recusado() {
  return (
    <section className="bg-[#C66A67] min-h-screen flex flex-col justify-center items-center px-4 py-8 md:h-[60rem] md:px-0">
      <div className="bg-white w-full max-w-sm md:max-w-[70rem] md:h-[30rem] rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col md:items-center">
        
        <div className="bg-[#C8392F] w-full rounded-tl-3xl py-4 md:h-auto md:justify-center md:items-center flex">
          <h1 className="text-white text-2xl md:text-6xl font-extrabold font-[Montserrat] text-center w-full">
            Agendamento
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 px-6 md:mt-10">
          <label className="text-red-500 text-2xl font-extrabold font-['Montserrat'] whitespace-nowrap">
            Data:
          </label>
          <input
            type="date"
            className="w-full md:w-1/2 p-3 rounded-md bg-[#D75044] text-white"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 px-6">
          <label className="text-red-500 text-2xl font-extrabold font-['Montserrat'] whitespace-nowrap">
            Horário:
          </label>
          <input
            type="time"
            className="w-full md:w-1/2 p-3 rounded-md bg-[#D75044] text-white"
          />
        </div>

        <button className="bg-[#C8392F] w-[85%] py-3 md:py-5 md:w-[25rem] rounded-xl flex justify-center items-center gap-2 cursor-pointer mt-20 mb-10 md:mt-24 mx-auto">
          <img src={iconeCoracao} className="w-5 h-5 md:w-8 md:h-8" alt="Coração" />
          <span className="text-white text-xl md:text-4xl font-bold font-[Montserrat]">
            Agendar
          </span>
        </button>
      </div>

      <button className="bg-[#C8392F] w-[85%] py-3 md:py-5 md:w-[25rem] rounded-xl flex justify-center items-center gap-2 cursor-pointer mt-5 mx-auto md:ml-273">
        <img src={iconeCoracao} className="w-5 h-5 md:w-10 md:h-8" alt="Coração" />
        <span className="text-white md:text-xl font-bold font-[Montserrat]">
          Comprovante de agendamento
        </span>
      </button>
    </section>
  );
}

export default Recusado;
