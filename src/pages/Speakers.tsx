import Header from "../components/Header"
import Footer from "../components/Footer"

function Speakers() {
    return (
      <>
        <Header />
        <section id="page-schedule" className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Cronograma de Charlas
          </h2>
          <p className="text-slate-400 mb-8">
            Horarios oficiales para la jornada principal (Día 1).
          </p>
          <div className="space-y-4">
            {/* Schedule Item 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-mono font-bold text-lg w-20">
                  09:00 AM
                </span>
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Keynote
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Apertura: El Estado de React en 2026
                  </h3>
                  <p className="text-sm text-slate-400">Por Sarah Drasner</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                Main Hall
              </span>
            </div>
            {/* Schedule Item 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-mono font-bold text-lg w-20">
                  10:30 AM
                </span>
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-800">
                    Tech Deep-Dive
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Mastering Compiler Optimizations
                  </h3>
                  <p className="text-sm text-slate-400">Por Alex Guerrero</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                Track A
              </span>
            </div>
            {/* Schedule Item Break */}
            <div className="bg-slate-950 border border-dashed border-slate-800 rounded-xl p-4 text-center">
              <span className="text-slate-500 text-sm font-medium">
                <i className="fa-solid fa-mug-hot mr-2" /> 12:00 PM - Coffee
                Break &amp; Networking
              </span>
            </div>
            {/* Schedule Item 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-mono font-bold text-lg w-20">
                  01:30 PM
                </span>
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    UI / UX
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Accessibility at Scale with Tailwind
                  </h3>
                  <p className="text-sm text-slate-400">Por Elena Rostova</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                Track B
              </span>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
    
}

export default Speakers