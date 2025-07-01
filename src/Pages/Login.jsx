import { useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "", lembrar: false })
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const sucesso = await login(form.email, form.password)
    setLoading(false)
    if (sucesso) {
      navigate("/")
    } // AuthContext já mostra alertas de erro se login falhar
  }

  return (
    <section className="bg-[#C66A67] min-h-screen flex items-center justify-center px-4 text-black">
      <form
        className="bg-white rounded-xl shadow-md w-full max-w-md md:max-w-[600px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="bg-[#c63e34] text-white text-center py-4 rounded-t-xl">
          <h1 className="text-xl md:text-2xl font-bold">Entrar na sua conta</h1>
        </div>

        <div className="p-5 md:p-8 space-y-5">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
            value={form.email}
            onChange={handleChange}
            required
            autoFocus
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full p-3 rounded-md bg-[#FFD8CC]"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lembrar"
                checked={form.lembrar}
                onChange={handleChange}
              />
              <span>Lembrar de mim</span>
            </label>
            <span className="text-[#c63e34] opacity-70 cursor-not-allowed">
              Esqueceu a senha?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#c63e34] w-full text-white py-3 rounded-xl font-semibold ${loading ? "opacity-70 cursor-wait" : ""}`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-center text-sm mt-4">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#c63e34] font-medium hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default Login
