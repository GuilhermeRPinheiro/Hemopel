import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function Cadastro() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    whatsapp: "",
    email: "",
    password: "",
    gender: "",
    bloodType: "",
    termos: false,
    notificacoes: false
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      Swal.fire("Preencha todos os campos obrigatórios!", "", "warning")
      return
    }
    if (!form.termos) {
      Swal.fire("Você precisa aceitar os termos!", "", "warning")
      return
    }
    const resp = await fetch("http://localhost:3000/users?email=" + encodeURIComponent(form.email))
    const existe = await resp.json()
    if (existe.length > 0) {
      Swal.fire("E-mail já cadastrado!", "", "error")
      return
    }
    const novoUsuario = {
      name: form.name,
      birthDate: form.birthDate,
      whatsapp: form.whatsapp,
      email: form.email,
      password: form.password,
      gender: form.gender,
      bloodType: form.bloodType,
      role: "user",
      notificacoes: form.notificacoes
    }
    const cadastroResp = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario)
    })
    if (cadastroResp.ok) {
      await login(form.email, form.password)
      Swal.fire("Cadastro realizado com sucesso!", "", "success")
      navigate("/")
    } else {
      Swal.fire("Erro ao cadastrar!", "", "error")
    }
  }

  return (
    <section className="bg-[#C66A67] min-h-screen flex items-center justify-center px-4 text-black">
      <form className="bg-white rounded-xl shadow-md w-full max-w-md md:max-w-[1100px] mx-auto" onSubmit={handleSubmit}>
        <div className="bg-[#c63e34] text-white text-center py-4 rounded-t-xl">
          <h1 className="text-xl md:text-2xl font-bold">Torne-se um doador(a)</h1>
        </div>
        <div className="p-5 md:p-8 space-y-4 md:space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
            value={form.name}
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="birthDate"
              placeholder="Data de nascimento"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]"
              value={form.birthDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#FFD8CC]"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
            value={form.password}
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="gender"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="" disabled>Sexo:</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
            <select
              name="bloodType"
              className="w-full md:w-1/2 p-3 rounded-md bg-[#fcd2c8]"
              value={form.bloodType}
              onChange={handleChange}
            >
              <option value="" disabled>Tipo sanguíneo:</option>
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
              <input type="checkbox" name="termos" checked={form.termos} onChange={handleChange} />
              <span>Declaro que os dados são verdadeiros</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="notificacoes" checked={form.notificacoes} onChange={handleChange} />
              <span>Aceito receber notificações por e-mail</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#c63e34] w-full text-white py-3 rounded-xl font-semibold cursor-pointer"
          >
            Cadastrar-se
          </button>
        </div>
      </form>
    </section>
  )
}

export default Cadastro
