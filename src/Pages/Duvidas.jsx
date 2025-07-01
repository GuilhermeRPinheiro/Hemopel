import ImgDuvidas from '../assets/duvidasimg.png';

function Duvidas() {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-10 px-4 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-start w-full max-w-[1200px] gap-10 md:gap-24">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:gap-5 md:w-1/2 gap-4 md:mr-20">
          <h1 className="text-orange-800 text-[28px] md:text-[50px] font-extrabold font-['Montserrat']">
            Tire suas dúvidas sobre as doações
          </h1>
          <p className="text-red-600 text-base md:text-[25px] font-medium font-['Montserrat']">
            Informações claras para você salvar vidas com segurança
          </p>
        </div>

        <div className="flex justify-center md:w-1/2">
          <img
            src={ImgDuvidas}
            alt="Imagem dúvidas"
            className="w-full max-w-[766px] max-h-[749px] object-contain"
          />
        </div>
      </div>

      <h1 className="mt-6 text-[#D75044] text-[30px] md:text-[70px] font-extrabold font-['Montserrat']">
        Dúvidas Frequentes
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="mt-6 w-96 md:w-250 bg-[#D75044] rounded-[40px] text-white font-['Montserrat'] overflow-hidden">
          <div className="bg-[#91302A] rounded-t-[40px] md:text-[25px] py-2 text-center text-[12px] font-bold">
            Quem pode doar?
          </div>
          <div className="p-4 text-[10px] md:text-[20px] font-medium text-center">
            Pessoas saudáveis entre 16 e 69 anos, com mais de 50 kg. Menores de 18 anos precisam de autorização dos responsáveis.
          </div>
        </div>

        <div className="mt-5 w-96 md:w-250 bg-[#D75044] rounded-[40px] text-white font-['Montserrat'] overflow-hidden">
          <div className="bg-[#91302A] rounded-t-[40px] md:text-[25px] py-2 text-center text-[12px] font-bold">
            Com que frequência posso doar sangue?
          </div>
          <div className="p-4 text-[10px] md:text-[20px] font-medium text-center">
            Homens: a cada 2 meses (até 4 doações por ano).<br />
            Mulheres: a cada 3 meses (até 3 doações por ano).
          </div>
        </div>

        <div className="mt-5 w-96 md:w-250 bg-[#D75044] rounded-[40px] text-white font-['Montserrat'] overflow-hidden">
          <div className="bg-[#91302A] rounded-t-[40px] md:text-[25px] py-2 text-center text-[12px] font-bold">
            É seguro doar sangue?
          </div>
          <div className="p-4 text-[10px] md:text-[20px] font-medium text-center">
            Sim, doar sangue é seguro: todo o material é descartável, o procedimento é feito por profissionais e o corpo repõe rapidamente o volume doado.
          </div>
        </div>

        <div className="mt-5 mb-5 w-96 md:w-250 bg-[#D75044] rounded-[40px] text-white font-['Montserrat'] overflow-hidden">
          <div className="bg-[#91302A] rounded-t-[40px] md:text-[25px] py-2 text-center text-[12px] font-bold">
            Quantos ml de sangue são retirados em uma doação?
          </div>
          <div className="p-4 text-[10px] md:text-[20px] font-medium text-center">
            Cerca de 450 ml, o que o corpo repõe em poucos dias.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Duvidas;
