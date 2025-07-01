import { useEffect, useState } from 'react'
import gear from '../assets/gear.svg'
import perfilDefault from '../assets/profile.png'
import { useAuth } from '../Contexts/AuthContext'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function calcularIdade(dataNascimento) {
  if (!dataNascimento) return ''
  const nasc = new Date(dataNascimento)
  const hoje = new Date()
  let idade = hoje.getFullYear() - nasc.getFullYear()
  const m = hoje.getMonth() - nasc.getMonth()
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
    idade--
  }
  return idade
}

function Perfil() {
  const { user, isAdmin } = useAuth()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showCampanhas, setShowCampanhas] = useState(false)
  const [campanhas, setCampanhas] = useState([])
  const [loadingCampanhas, setLoadingCampanhas] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost:3000/users/${user.id}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (showCampanhas) {
      loadCampanhas()
    }
  }, [showCampanhas])

  async function loadCampanhas() {
    setLoadingCampanhas(true)
    const resp = await fetch("http://localhost:3000/campaigns")
    const data = await resp.json()
    setCampanhas(data)
    setLoadingCampanhas(false)
  }

  async function handleAddCampanha() {
    const { value: formValues } = await Swal.fire({
      title: "Nova campanha",
      html:
        '<input id="swal-nome" class="swal2-input" placeholder="Nome da campanha">' +
        '<input id="swal-inicio" type="date" class="swal2-input" placeholder="Data de início">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const nome = document.getElementById('swal-nome').value;
        const dataInicio = document.getElementById('swal-inicio').value;
        if (!nome || !dataInicio) {
          Swal.showValidationMessage('Preencha todos os campos');
          return;
        }
        return { nome, dataInicio };
      }
    });

    if (formValues) {
      const novaCampanha = {
        nome: formValues.nome,
        progresso: 0,
        dataInicio: formValues.dataInicio
      };
      await fetch("http://localhost:3000/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaCampanha)
      });
      Swal.fire("Campanha adicionada!", "", "success");
      loadCampanhas();
    }
  }

  async function handleEditProgresso(campanha) {
    const { value: progresso } = await Swal.fire({
      title: `Editar progresso: ${campanha.nome}`,
      input: "range",
      inputAttributes: { min: 0, max: 100, step: 1 },
      inputValue: campanha.progresso || 0,
      showCancelButton: true,
      inputLabel: "Progresso (%)"
    })
    if (progresso !== undefined) {
      await fetch(`http://localhost:3000/campaigns/${campanha.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progresso: Number(progresso) })
      })
      Swal.fire("Progresso atualizado!", "", "success")
      loadCampanhas()
    }
  }

  async function handleExcluir(campanha) {
    const confirm = await Swal.fire({
      title: `Excluir campanha: ${campanha.nome}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir",
      cancelButtonText: "Cancelar"
    })
    if (confirm.isConfirmed) {
      await fetch(`http://localhost:3000/campaigns/${campanha.id}`, {
        method: "DELETE"
      })
      Swal.fire("Campanha excluída!", "", "success")
      loadCampanhas()
    }
  }

  async function handleConcluir(campanha) {
    const confirm = await Swal.fire({
      title: `Concluir campanha: ${campanha.nome}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim, concluir",
      cancelButtonText: "Cancelar"
    })
    if (confirm.isConfirmed) {
      const dataFim = new Date().toISOString().split('T')[0]
      await fetch(`http://localhost:3000/campaigns/${campanha.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progresso: 100, dataFim })
      })
      Swal.fire("Campanha concluída!", "", "success")
      loadCampanhas()
    }
  }

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-[#91302A] font-bold">Carregando perfil...</div>
      </section>
    )
  }

  if (!userData) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-[#91302A] font-bold">Usuário não encontrado.</div>
      </section>
    )
  }

  const campanhasAtivas = campanhas.filter(c => Number(c.progresso || 0) < 100)
  const campanhasConcluidas = campanhas.filter(c => Number(c.progresso || 0) >= 100)

  return (
    <section className="bg-white min-h-screen py-6 px-4 md:px-[5rem] flex flex-col items-center md:items-start">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="bg-[#91302A] w-full md:w-[20rem] h-auto md:h-[43rem] rounded-3xl flex flex-col items-center py-6">
          <div className="bg-[#D75044] w-[90%] h-auto md:h-[16rem] rounded-[2rem] mt-4 flex flex-col items-center relative px-4 py-4">
            <img src={gear} alt="Engrenagem" className="w-6 md:w-[2.4rem] absolute top-4 right-4" />
            <img src={userData.profilePicture || perfilDefault} alt="Perfil" className="w-[8rem] md:w-[12rem] mt-6 rounded-full border-4 border-white" />
          </div>
          <div className="mt-4 text-center space-y-1">
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">{userData.name}</p>
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">
              {userData.birthDate ? `${calcularIdade(userData.birthDate)} anos` : ''}
            </p>
            <p className="text-white text-lg md:text-2xl font-bold font-[Montserrat]">{userData.bloodType}</p>
          </div>
          <div className="mt-4 w-full flex flex-col items-center gap-2 px-4">
            {['Historico', 'Comprovantes', 'Agendamento', 'Campanhas'].map((text, index) => (
              <button
                key={index}
                className="bg-[#C8392F] w-full md:w-[15rem] py-2 md:py-3 rounded-xl flex justify-center items-center cursor-pointer"
                onClick={text === "Campanhas" ? () => setShowCampanhas(!showCampanhas) : undefined}
              >
                <span className="text-white text-base md:text-2xl font-bold font-[Montserrat]">{text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#91302A] w-full h-[20rem] md:h-[43rem] rounded-3xl flex flex-col items-center relative">
          {showCampanhas && (
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex flex-col p-6 rounded-3xl z-10 overflow-auto">
              <h2 className="text-[#91302A] text-2xl font-extrabold mb-4 font-['Montserrat'] text-center">Gerenciar Campanhas</h2>
              {isAdmin() && (
                <button
                  className="bg-[#C8392F] hover:bg-[#c34033] px-6 py-2 rounded-xl font-bold shadow text-lg cursor-pointer mb-4 w-full"
                  onClick={handleAddCampanha}
                >
                  + Nova Campanha
                </button>
              )}
              {loadingCampanhas ? (
                <div className="text-center text-lg text-[#91302A]">Carregando campanhas...</div>
              ) : (
                <>
                  <h3 className="text-[#91302A] font-bold mt-2 mb-1 text-lg text-center">Ativas</h3>
                  {campanhasAtivas.length === 0 ? (
                    <div className="text-center text-lg text-[#91302A] mb-3">Nenhuma campanha ativa</div>
                  ) : (
                    campanhasAtivas.map((campanha, idx) => (
                      <div key={idx} className="bg-[#FFD8CC] rounded-lg shadow p-4 mb-4 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#91302A] text-lg font-bold">{campanha.nome}</span>
                          <span className="text-[#91302A] text-lg font-bold">{campanha.progresso || 0}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-3 mb-2">
                          <div className="bg-[#4FD31F] h-3 rounded-full" style={{ width: `${campanha.progresso || 0}%` }}></div>
                        </div>
                        {campanha.dataInicio && <p className="text-sm text-[#91302A]">Início: {campanha.dataInicio}</p>}
                        {isAdmin() && (
                          <div className="flex gap-2 mt-2">
                            <button className="bg-[#4FD31F] px-4 py-1 rounded font-bold text-white" onClick={() => handleEditProgresso(campanha)}>Editar Progresso</button>
                            <button className="bg-[#FFA500] px-4 py-1 rounded font-bold text-white" onClick={() => handleConcluir(campanha)}>Concluir</button>
                            <button className="bg-[#C8392F] px-4 py-1 rounded font-bold text-white" onClick={() => handleExcluir(campanha)}>Excluir</button>
                          </div>
                        )}
                      </div>
                    ))
                  )}

                  <h3 className="text-[#91302A] font-bold mt-4 mb-1 text-lg text-center">Concluídas</h3>
                  {campanhasConcluidas.length === 0 ? (
                    <div className="text-center text-lg text-[#91302A] mb-3">Nenhuma campanha concluída</div>
                  ) : (
                    campanhasConcluidas.map((campanha, idx) => (
                      <div key={idx} className="bg-[#FFD8CC] rounded-lg shadow p-4 mb-4 flex flex-col opacity-70">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#91302A] text-lg font-bold">{campanha.nome}</span>
                          <span className="text-[#91302A] text-lg font-bold">{campanha.progresso || 100}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-3 mb-2">
                          <div className="bg-[#4FD31F] h-3 rounded-full" style={{ width: `100%` }}></div>
                        </div>
                        {campanha.dataInicio && <p className="text-sm text-[#91302A]">Início: {campanha.dataInicio}</p>}
                        {campanha.dataFim && <p className="text-sm text-[#91302A]">Fim: {campanha.dataFim}</p>}
                      </div>
                    ))
                  )}
                </>
              )}
              <button className="bg-[#91302A] text-white rounded-xl px-6 py-2 font-bold mt-4 w-full" onClick={() => setShowCampanhas(false)}>Fechar</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Perfil
