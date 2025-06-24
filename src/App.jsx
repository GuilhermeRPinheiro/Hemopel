import React from "react";
import { Routes, Route } from 'react-router-dom'
import { MyNavbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import Cadastro from './Pages/Cadastro'

function App() {
  return (
    <>
      <MyNavbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
