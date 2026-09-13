import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <section id="page-home" className="page-content">
        {/* HERO */}
        <div className="relative overflow-hidden py-24 sm:py-32 border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800 mb-6">
              <i className="fa-solid fa-calendar-days" /> 15 y 16 de Noviembre,
              2026 • Santiago, Chile
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              El futuro del ecosistema frontend en un solo lugar.
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Dos días de conferencias magistrales, workshops avanzados y
              networking de alto nivel con líderes globales en React, Next.js,
              Server Actions y arquitectura web.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-lg border border-slate-700 transition">
                Ver Agenda Completa
              </button>
            </div>
          </div>
        </div>
        {/* SPEAKERS PREVIEW */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Featured Speakers</h2>
            <p className="text-slate-400 mt-2">
              Aprende directo de los creadores y mantenedores de librerías
              clave.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speaker Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
                alt="Speaker"
                className="w-24 h-24 rounded-full mx-auto object-cover ring-2 ring-cyan-400"
              />
              <h3 className="text-xl font-bold text-white text-center mt-4">
                Sarah Drasner
              </h3>
              <p className="text-sm text-cyan-400 text-center font-medium">
                VP of Engineering
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                Core React Team Contributor
              </p>
              <p className="text-slate-400 text-sm mt-4 text-center">
                Charla: "The Evolution of React Server Components in Production"
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                alt="Speaker"
                className="w-24 h-24 rounded-full mx-auto object-cover ring-2 ring-violet-400"
              />
              <h3 className="text-xl font-bold text-white text-center mt-4">
                Alex Guerrero
              </h3>
              <p className="text-sm text-violet-400 text-center font-medium">
                Principal Architect
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">Vercel</p>
              <p className="text-slate-400 text-sm mt-4 text-center">
                Charla: "Mastering Compiler Optimizations in React 19"
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                alt="Speaker"
                className="w-24 h-24 rounded-full mx-auto object-cover ring-2 ring-cyan-400"
              />
              <h3 className="text-xl font-bold text-white text-center mt-4">
                Elena Rostova
              </h3>
              <p className="text-sm text-cyan-400 text-center font-medium">
                Lead UX Engineer
              </p>
              <p className="text-xs text-slate-500 text-center mt-1">
                Design Systems Inc.
              </p>
              <p className="text-slate-400 text-sm mt-4 text-center">
                Charla: "Accessibility at Scale with Tailwind &amp; Headless UI"
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
