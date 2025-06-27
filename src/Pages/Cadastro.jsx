import React from "react";

function Cadastro() {
  return (
    <section className="bg-[#C66A67] min-h-screen flex items-center justify-center px-4 text-black">
      <form className="bg-white rounded-xl shadow-md w-full max-w-md md:max-w-[1100px] mx-auto">
        <div className="bg-[#c63e34] text-white text-center py-4 rounded-t-xl">
          <h1 className="text-xl md:text-2xl font-bold">Torne-se um doador(a)</h1>
        </div>

        <div className="p-5 md:p-8 space-y-4 md:space-y-5">
          <input
            type="text"
            placeholder="Nome Completo"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              placeholder="Data de nascimento"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]"
            />
            <input
              type="text"
              placeholder="Documento (CPF)"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#FFD8CC]"
            />
          </div>

          <input
            type="text"
            placeholder="WhatsApp"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <select className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]">
              <option disabled selected>
                Sexo:
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>

            <select className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]">
              <option disabled selected>
                Tipo sanguíneo:
              </option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div className="space-y-2 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Declaro que os dados são verdadeiros</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Aceito receber notificações por e-mail</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#c63e34] w-full text-white py-3 rounded-xl font-semibold"
          >
            Cadastrar-se
          </button>
        </div>
      </form>
    </section>
  )
}

export default Cadastro;
