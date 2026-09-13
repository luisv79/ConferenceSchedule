import { NavLink } from "react-router-dom"

function Menu(){
return(
    <>
    <nav className="hidden md:flex space-x-1 text-sm font-medium">
        <button  className="nav-btn px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition" id="nav-home"><NavLink to="/">Inicio</NavLink></button>
        <button  className="nav-btn px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition" id="nav-schedule"><NavLink to="/speakers"> Agenda &amp; Speakers</NavLink></button>
        <button  className="nav-btn px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition" id="nav-location"><NavLink to="/ubicacion">Ubicación &amp; Hoteles</NavLink></button>
        <button  className="nav-btn px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition" id="nav-food"><NavLink to="/comida">Comida</NavLink></button>
        <button  className="nav-btn px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition" id="nav-coc"><NavLink to="/conducta">Código de Conducta</NavLink></button>
      </nav>
    
    </>
)
} 

export default Menu
    
