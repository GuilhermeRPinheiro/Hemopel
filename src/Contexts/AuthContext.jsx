import { createContext, useState, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'

// Cria o contexto de autenticação que será compartilhado na aplicação
export const AuthContext = createContext()

// Componente Provedor de Autenticação
// Ele gerencia o estado de autenticação e expõe funções relacionadas
export const AuthProvider = ({ children }) => {
  // Estados para armazenar informações do usuário, status de autenticação e carregamento inicial
  const [user, setUser] = useState(null) // Objeto do usuário logado ou null
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Booleano indicando se o usuário está logado
  const [loading, setLoading] = useState(true) // Indica se a verificação inicial de autenticação está em andamento

  // Hook useEffect: Carrega o usuário do localStorage ao iniciar a aplicação
  // Permite que o usuário permaneça logado entre sessões
  useEffect(() => {
    const loadUserFromLocalStorage = async () => {
      try {
        const storedUser = localStorage.getItem('user') // Tenta obter os dados do usuário do localStorage
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser) // Converte a string JSON de volta para um objeto
          setUser(parsedUser) // Define o usuário no estado
          setIsAuthenticated(true) // Marca como autenticado
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do localStorage:", error) // Loga erros na leitura do localStorage
        localStorage.removeItem('user') // Remove dados corrompidos
      } finally {
        setLoading(false) // Finaliza o estado de carregamento inicial
      }
    }
    loadUserFromLocalStorage() // Chama a função de carregamento
  }, []) // Array de dependências vazio garante que roda apenas uma vez na montagem do componente

  // Função `login`: Tenta autenticar um usuário com email e senha
  // Interage com a API e atualiza o estado de autenticação
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/users') // Busca todos os usuários da API
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.') // Lança erro se a requisição falhar
      }
      const users = await response.json() // Converte a resposta para JSON
      // Encontra um usuário que corresponda ao email e senha fornecidos
      const foundUser = users.find(u => u.email === email && u.password === password)

      if (foundUser) {
        setUser(foundUser) // Define o usuário encontrado no estado
        setIsAuthenticated(true) // Marca como autenticado
        localStorage.setItem('user', JSON.stringify(foundUser)) // Salva o usuário no localStorage para persistência
        // Exibe um alerta de boas-vindas usando SweetAlert2
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: `Bem-vindo, ${foundUser.name}!`,
          showConfirmButton: false,
          timer: 1500
        })
        return true // Retorna true para indicar login bem-sucedido
      } else {
        // Exibe um alerta de erro se as credenciais forem inválidas
        Swal.fire({
          icon: 'error',
          title: 'Erro de Login',
          text: 'Email ou senha inválidos!'
        })
        return false // Retorna false para indicar login falhou
      }
    } catch (error) {
      console.error("Erro no login:", error) // Loga erros de conexão ou API
      // Exibe um alerta de erro de conexão
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Não foi possível conectar ao servidor de autenticação.'
      })
      return false // Retorna false em caso de erro
    }
  }

  // Função `logout`: Desconecta o usuário
  const logout = () => {
    setUser(null) // Limpa o usuário do estado
    setIsAuthenticated(false) // Marca como não autenticado
    localStorage.removeItem('user') // Remove os dados do usuário do localStorage
    // Exibe um alerta de desconexão
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: 'Você foi desconectado.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // Função `isAdmin`: Verifica se o usuário logado tem permissão de administrador
  const isAdmin = () => {
    return user && user.role === 'admin' // Retorna true se o usuário existe e sua role é 'admin'
  }

  // Função `updateUser`: Atualiza os dados do usuário no contexto e no localStorage
  // Usado após edições de perfil
  const updateUser = (updatedUserData) => {
    setUser(prevUser => {
      const newUserState = { ...prevUser, ...updatedUserData } // Mescla dados antigos com os novos
      localStorage.setItem('user', JSON.stringify(newUserState)) // Atualiza o localStorage
      return newUserState // Retorna o novo estado do usuário
    })
  }

  // Renderização condicional: Exibe um div vazio enquanto o carregamento inicial está ativo
  if (loading) {
    return <div></div>
  }

  // Provedor do Contexto: Expõe os valores e funções para os componentes filhos
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, isAdmin, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado `useAuth`: Simplifica o consumo do AuthContext em componentes
export const useAuth = () => {
  return useContext(AuthContext) // Permite que componentes acessem os valores providos
}