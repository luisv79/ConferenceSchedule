import Header from "../components/Header"
import Footer from "../components/Footer"

function Conducta() {
    return (
      <>
        <Header />
        <section
          id="page-coc"
          className="max-w-4xl mx-auto px-4 py-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Código de Conducta
          </h2>
          <div className="prose prose-invert max-w-none bg-slate-900 border border-slate-800 p-8 rounded-2xl text-slate-300 space-y-4">
            <p>
              En **ReactVerse Conf**, nos dedicamos a ofrecer una experiencia de
              conferencia libre de acoso para todos, independientemente del
              género, orientación sexual, discapacidad, apariencia física,
              tamaño corporal, raza o religión.
            </p>
            <h3 className="text-xl font-bold text-white mt-4">
              Comportamientos Esperados
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sé inclusivo, respetuoso y colaborativo.</li>
              <li>Usa un lenguaje empático y profesional.</li>
              <li>Respeta los puntos de vista y experiencias de los demás.</li>
            </ul>
            <h3 className="text-xl font-bold text-white mt-4">
              Reporte de Incidentes
            </h3>
            <p>
              Si sufres o presencias algún tipo de acoso, ponte en contacto de
              inmediato con el personal del evento (identificados con camisetas
              rojas) o escribe a{" "}
              <a
                href="mailto:conduct@reactverse.dev"
                className="text-cyan-400 underline"
              >
                conduct@reactverse.dev
              </a>
              .
            </p>
          </div>
        </section>

        <Footer />
      </>
    );
    
}

export default Conducta