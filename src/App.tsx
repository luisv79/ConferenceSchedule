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
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/speakers" element={<Speakers />}/>
      <Route path="/ubicacion" element={<Ubicacion />}/>
      <Route path="/comida" element={<Comida />}/>
      <Route path="/conducta" element={<Conducta />}/>
      <Route path="/tickets" element={<Tickets />}/>
    </Routes>

    </>
  )
}

export default App
