import Menu from "./Menu";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons";
function Header() {
    return(
        <>
       <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center gap-3 cursor-pointer">
        <FontAwesomeIcon className="fa-brands fa-react text-3xl text-cyan-400 animate-spin-slow" icon={faReact} />
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          ReactVerse<span className="text-xs ml-1 px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">2026</span>
        </span>
      </div>
      {/* menu */}
      <Menu/>
      <div>
        <NavLink to="/tickets" className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm shadow-lg shadow-cyan-500/20 transition duration-200">
          Comprar Tickets
        </NavLink>
      </div>
    </div>
  </div>
</header>

        </>
    )
    
}

export default Header