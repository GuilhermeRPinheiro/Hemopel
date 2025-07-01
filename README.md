
# 🚀 HEMOPEL - Sistema de Auxílio à Doação de Sangue

O projeto **HEMOPEL** é uma aplicação desenvolvida com **React.js**, **TailwindCSS** e **Flowbite**, focada na responsividade para dispositivos móveis e desktop, com o objetivo de auxiliar a população de Pelotas nos processos relacionados à doação de sangue. Este projeto acadêmico integra as disciplinas de Desenvolvimento Web para Dispositivos Móveis, Engenharia de Software e Programação Web com React, abordando práticas modernas de desenvolvimento como componentização, React Hooks, gerenciamento de rotas com React Router DOM e consumo de APIs REST utilizando JSON Server.

## 📌 Descrição

O sistema HEMOPEL busca facilitar e automatizar etapas essenciais da doação de sangue, proporcionando ao usuário uma experiência intuitiva e eficiente. As funcionalidades incluem:

- **Cadastro de usuários** para novos doadores.
- **Agendamento online** com sistema de pré-triagem (em desenvolvimento).
- **Acompanhamento em tempo real** das campanhas ativas e concluídas.
- **Comprovantes digitais** para agendamento e doação (em desenvolvimento).
- **Histórico de doações** (em desenvolvimento).
- **Informações educativas** sobre o processo de doação.

Além disso, o projeto foi estruturado com práticas profissionais de engenharia de software, incluindo entrevistas com profissionais de hemocentros, pesquisas quantitativas via formulários para validar a viabilidade da aplicação, levantamento e análise de dados com filtros específicos, utilização do **Trello** para organização das tarefas e uma esteira de desenvolvimento robusta com branches protegidas no GitHub para melhorar a esteira de desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- React.js
- React Hooks
- React Router DOM
- TailwindCSS
- Flowbite
- JSON Server (Fake API REST)
- JavaScript (ES6+)
- HTML5
- Git & GitHub
- Trello (gestão do projeto)

## 📁 Estrutura do Projeto

```
HEMOPEL/
├── public/
│   └── index.html                  # Arquivo HTML principal
├── src/
│   ├── assets/                     # Imagens e recursos visuais
│   ├── Components/                 # Componentes reutilizáveis
│   │   ├── CardCamp.jsx
│   │   ├── CardDep.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── Contexts/                   # Context API
│   │   └── AuthContext.jsx
│   ├── Pages/                      # Páginas principais (rotas)
│   │   ├── Aceito.jsx
│   │   ├── Agendamento.jsx
│   │   ├── Agende.jsx
│   │   ├── Cadastro.jsx
│   │   ├── Campanhas.jsx
│   │   ├── Duvidas.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Perfil.jsx
│   │   └── Recusado.jsx
│   ├── App.jsx                     # Componente principal com rotas
│   ├── index.css                   # Estilização global
│   └── main.jsx                    # Ponto de entrada da aplicação
├── db.json                         # Arquivo JSON Server
├── package.json                    # Dependências e scripts do projeto
├── tailwind.config.js              # Configuração do TailwindCSS
├── vite.config.js                  # Configuração do Vite
├── .gitignore
└── README.md                       # Documentação do projeto
```

## 🛠️ Como Rodar o Projeto:

**1. Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/HEMOPEL.git
cd HEMOPEL
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Inicie o servidor JSON (Fake API):**

```bash
npm run server
```

**4. Execute a aplicação React localmente:**

```bash
npm run dev
```

## 🌐 Funcionalidades

- Cadastro e autenticação de usuários.
- Agendamento com pré-triagem automática.
- Campanhas ativas e concluídas com atualização em tempo real.
- Layout responsivo com TailwindCSS e Flowbite.
- Estrutura modular e componentizada.
- Uso de LocalStorage para armazenamento offline de dados de campanhas.

## 📋 Processos de Desenvolvimento

- Entrevistas com profissionais de saúde para levantamento de requisitos.
- Pesquisas com usuários para validar viabilidade e usabilidade.
- Utilização do Trello para gerenciamento e organização de entregas.
- Uso de branches protegidas e GitHub Actions para garantir qualidade e integridade do código.

## 💻 Link para o Projeto (Repositório)

https://github.com/MarlonRamos07/Hemopel

## 🎨 Layout (Figma)

https://www.figma.com/design/e1S9ALTUtNgBwEhrrrb5cm/HEMOPEL?node-id=60-13&t=QS8fYVMBFD2j3N6a-1

## 👨‍🎓 Autores

Projeto desenvolvido por:

- Christian Roger Vilela Pieper
- Marlon Ramos da Costa
- Guilherme Ribeiro Pinheiro
- João Vitor Goes Nunes Moraes

**Portfólio:** https://portfolio-marlon-umber.vercel.app

📅 **Data de criação:** Junho, 2025
