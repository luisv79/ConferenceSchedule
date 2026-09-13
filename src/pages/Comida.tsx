import Header from "../components/Header";
import Footer from "../components/Footer";

function Comida() {
  return (
    <>
      <Header />
      <section id="page-food" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-2">
          Comida y Opciones de Alimentación
        </h2>
        <p className="text-slate-400 mb-8">
          Opciones dentro de la conferencia y recomendaciones cercanas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <i className="fa-solid fa-utensils text-2xl text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-white">Catering Incluido</h3>
            <p className="text-slate-400 text-sm mt-2">
              Coffee breaks am/pm, almuerzo buffet con alternativas Veganas,
              Vegetarianas y Gluten-Free.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <i className="fa-solid fa-burger text-2xl text-violet-400 mb-3" />
            <h3 className="text-xl font-bold text-white">Food Trucks Zone</h3>
            <p className="text-slate-400 text-sm mt-2">
              Ubicados en el patio exterior del evento con opciones de comida
              rápida gourmet.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <i className="fa-solid fa-store text-2xl text-emerald-400 mb-3" />
            <h3 className="text-xl font-bold text-white">
              Restaurantes Cercanos
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              A menos de 300 metros encontrarás bistrós, cafeterías de
              especialidad y mercados.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Comida;
