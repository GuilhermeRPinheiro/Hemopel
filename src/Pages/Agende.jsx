import iconeCoracao from '../assets/coracaoBranco.png';
import { Link } from 'react-router-dom'

function Agende() {
  return (
    <section className="bg-[#C66A67] min-h-screen flex flex-col justify-center items-center px-4 py-8 md:h-[60rem] md:px-0">
      <div className="bg-white w-full max-w-sm md:max-w-[70rem] md:h-[30rem] rounded-tl-3xl rounded-br-3xl shadow-lg flex flex-col md:items-center">
        

        <div className="bg-[#C8392F] w-full rounded-tl-3xl py-4 md:h-[6rem] md:justify-center md:items-center flex">
          <h1 className="text-white text-2xl md:text-6xl font-extrabold font-[Montserrat] text-center w-full">
            Agende sua doação
          </h1>
        </div>

        
        <div className="flex flex-col justify-center items-center py-8 gap-6 px-4 md:gap-8 md:mt-[2rem]">
          
          <button className="bg-[#C8392F] w-[85%] py-3 md:py-5 md:w-[25rem] rounded-xl flex justify-center items-center gap-2 cursor-pointer">
            <img src={iconeCoracao} className="w-5 h-5 md:w-8 md:h-8" alt="Coração" />
            <span className="text-white text-xl md:text-4xl font-bold font-[Montserrat]">Faça Login</span>
          </button>

          
          <h2 className="text-black text-lg md:text-5xl font-bold font-[Montserrat]">ou</h2>

         
          <button className="bg-[#C8392F] w-[85%] py-3 md:py-5 md:w-[25rem] rounded-xl flex justify-center items-center gap-2 cursor-pointer">
            <img src={iconeCoracao} className="w-5 h-5 md:w-8 md:h-8" alt="Coração" />
            <span className="text-white text-xl md:text-4xl font-bold font-[Montserrat]">
              <Link to="/cadastro">Crie sua conta</Link>
              </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Agende
