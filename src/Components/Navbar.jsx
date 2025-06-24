
import logocabecalho from '../assets/logocabecalho.svg'
import logocabecalhopng from '../assets/logocabecalho.png'

export function MyNavbar() {
  return (
    <nav className="bg-[#91302A] text-white p-4 flex items-center">

      <img src={logocabecalhopng} alt="" className="md:w-[14.4375rem] md:h-[5.55rem] md:ml-7 md:mr-[6.25rem] w-[10rem] h-[4rem] mr-[9.5rem]"/>

      <button className="w-96 h-14 bg-[#C8392F] rounded-[30px] items-center cursor-pointer mr-[6.25rem] md:block hidden">
        <span className="w-80 h-14 justify-start text-4xl font-bold font-['Montserrat']">Agendar Doação</span>
        </button>

        <ul className="md:flex gap-7 mr-[6.25rem] hidden ">
          <li className="w-44 h-7 justify-start text-white text-2xl font-medium font-['Montserrat'] cursor-pointer"><link rel="stylesheet" href="" />Informações</li>
          <li className="w-44 h-7 justify-start text-white text-2xl font-medium font-['Montserrat'] cursor-pointer"><link rel="stylesheet" href="" />Doações</li>
          <li className="w-44 h-7 justify-start text-white text-2xl font-medium font-['Montserrat'] cursor-pointer"><link rel="stylesheet" href=""/>Campanhas</li>
        </ul>

              <button className="w-80 h-14 bg-[#C8392F] rounded-[30px] items-center cursor-pointer mr-[6.25rem] md:block hidden">
        <span className="w-80 h-14 justify-start text-4xl font-bold font-['Montserrat']">Login</span>
        </button>

        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">

    </div>
    </nav>
  );
}
