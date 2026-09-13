import Header from "../components/Header";
import Footer from "../components/Footer";

function Ubicacion() {
  return (
    <>
      <Header />
      <section
        id="page-location"
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Ubicación y Alojamiento
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Venue Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <i className="fa-solid fa-location-dot text-3xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white">
              Centro de Convenciones Metropolitano
            </h3>
            <p className="text-slate-400 mt-2">
              Av. Vitacura 2670, Santiago, Las Condes, Chile.
            </p>
            <div className="mt-6 h-64 bg-slate-800 rounded-xl overflow-hidden relative flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">
                <i className="fa-solid fa-map-pin text-red-500 mr-2" />{" "}
                Interactive Map Loaded via CMS
              </span>
            </div>
          </div>
          {/* Hotels */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <i className="fa-solid fa-hotel text-3xl text-violet-400 mb-4" />
            <h3 className="text-2xl font-bold text-white">
              Hoteles Recomendados
            </h3>
            <p className="text-slate-400 mt-1 text-sm">
              Menciona el código{" "}
              <span className="text-cyan-400 font-mono font-bold">
                REACTCONF26
              </span>{" "}
              para un 20% de descuento.
            </p>
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white">Hotel Icon Santiago</h4>
                <p className="text-xs text-slate-400">
                  A 5 minutos caminando del venue. Incluye desayuno y WiFi de
                  alta velocidad.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white">W Santiago Hotel</h4>
                <p className="text-xs text-slate-400">
                  Opción Premium a 2 estaciones de metro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Ubicacion;
