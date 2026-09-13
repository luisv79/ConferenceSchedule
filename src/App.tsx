import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import Speakers from "./pages/Speakers"
import Ubicacion from "./pages/Ubicacion"
import Comida from "./pages/Comida"
import Conducta from "./pages/Conducta"
import Tickets from "./pages/Tickets"


function App() {
  

  return (
    <>
    <main className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 min-h-screen flex flex-col">

      <section className="flex-grow">

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/speakers" element={<Speakers />}/>
      <Route path="/ubicacion" element={<Ubicacion />}/>
      <Route path="/comida" element={<Comida />}/>
      <Route path="/conducta" element={<Conducta />}/>
      <Route path="/tickets" element={<Tickets />}/>
    </Routes>

      </section>

    </main>

    </>
  )
}

export default App
