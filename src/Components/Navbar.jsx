import { useState } from 'react'
import logocabecalhopng from '../assets/logocabecalho.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

export function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/")
  }

  return (
    <nav className="bg-[#91302A] text-white px-4 py-3 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 cursor-pointer">
        <img
          src={logocabecalhopng}
          alt="Logo"
          className="w-40 h-16 md:w-[12.4375rem] md:h-[5rem] md:ml-[2rem]"
        />
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center px-3 py-2 border rounded text-white border-white"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-7 mt-4 md:mt-0 md:ml-10">

          {isAuthenticated && (
            <button className="bg-[#C8392F] rounded-full px-12 py-2 font-bold text-lg hidden md:block mr-[2rem] cursor-pointer">
              <Link to="/agende">Agendar Doação</Link>
            </button>
          )}

          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-xl font-medium text-white items-start md:items-center mr-[3rem]">
            <li className="cursor-pointer ">
              <Link to="/">Informações</Link>
            </li>
            <li className="cursor-pointer ">
              <Link to="/">Doações</Link>
            </li>
            <li className="cursor-pointer ">
              <Link to="/campanhas">Campanhas</Link>
            </li>
          </ul>

          {!isAuthenticated ? (
            <button
              className="bg-[#C8392F] rounded-full px-10 py-2 font-bold text-lg mt-3 md:mt-0 hidden md:block mr-[4rem] cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-3 hidden md:flex mr-[4rem]">
              <span className="font-semibold">{user && user.name}</span>
              <button
                className="bg-[#C8392F] rounded-full px-8 py-2 font-bold text-lg cursor-pointer"
                onClick={() => navigate('/perfil')}
              >
                Meu Perfil
              </button>
              <button
                className="bg-[#C8392F] rounded-full px-8 py-2 font-bold text-lg cursor-pointer"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          )}

          <div className="flex flex-col gap-2 mt-4 md:hidden">
            {isAuthenticated && (
              <>
                <button
                  className="bg-[#C8392F] rounded-full px-4 py-2 font-bold text-base cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false)
                    navigate("/agende")
                  }}
                >
                  Agendar Doação
                </button>
                <span className="font-semibold px-4">{user && user.name}</span>
                <button
                  className="bg-[#C8392F] rounded-full px-4 py-2 font-bold text-base cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false)
                    navigate("/perfil")
                  }}
                >
                  Meu Perfil
                </button>
                <button
                  className="bg-[#C8392F] rounded-full px-4 py-2 font-bold text-base cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false)
                    handleLogout()
                  }}
                >
                  Sair
                </button>
              </>
            )}
            {!isAuthenticated && (
              <>
                <button
                  className="bg-[#C8392F] rounded-full px-4 py-2 font-bold text-base cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false)
                    navigate("/agende")
                  }}
                >
                  Agendar Doação
                </button>
                <button
                  className="bg-[#C8392F] rounded-full px-4 py-2 font-bold text-base cursor-pointer"
                  onClick={() => {
                    setMenuOpen(false)
                    navigate("/login")
                  }}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
