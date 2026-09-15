import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import Modal from "../components/Modal";

interface selectedTicket{
  name: string;
  price: string;
}

interface FormData{
  nombre: string;
  email: string;
  empresa: string;
}

const Tickets: React.FC = () => {

     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

     const [selectedTicket, setSelectedTicket] = useState<selectedTicket | null>(null);

     const [form, setForm] = useState<FormData>({
    nombre: '',
    email: '',
    empresa: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

     const openCheckout = (ticketName: string, ticketPrice: string): void => {
    setSelectedTicket({ name: ticketName, price: ticketPrice });
    setIsModalOpen(true);
  };

 const closeCheckout = (): void => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  const handleCheckoutSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('¡Gracias por registrarte! En un entorno real serías redirigido a la pasarela de pago (Webpay/Stripe).');
    closeCheckout();
    console.log('Datos enviados:', form);
  };


   
  return (
    <>
      <Header />
      <section
        id="tickets"
        className="py-20 border-t border-slate-800 bg-slate-950/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de Sección */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-3 py-1 rounded-full">
              Asistencia Presencial
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Asegura tu entrada a ReactVerse 2026
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Cupos limitados para garantizar una excelente experiencia de
              networking y aprendizaje directo con los speakers.
            </p>
          </div>
          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* TICKET 1: EARLY BIRD */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Community Pass
                  </h3>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                    Limitado
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Ideal para estudiantes o desarrolladores junior que están
                  iniciando en React.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $45.000
                  </span>
                  <span className="text-slate-500 text-sm"> CLP + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Acceso a todas las charlas generales (Track A)
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Coffee breaks incluidos (2 días)
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Swag bag básico de bienvenida
                  </li>
                  <li className="flex items-center gap-3 text-slate-500">
                    <i className="fa-solid fa-xmark text-slate-600 text-xs" />
                    Fiesta de Networking Oficial
                  </li>
                </ul>
              </div>
              <button onClick={() => openCheckout('Community Pass', '$45.000 CLP')} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl border border-slate-700 transition duration-200">
                Comprar Community
              </button>
            </div>
            {/* TICKET 2: GENERAL (DESTACADO) */}
            <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950/30 border-2 border-cyan-500/80 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10 scale-105">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Más Popular
              </span>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Pro Conference Pass
                  </h3>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 border border-cyan-800 px-2.5 py-1 rounded-md">
                    General
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  Pase completo para disfrutar de todos los contenidos del
                  evento.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $85.000
                  </span>
                  <span className="text-slate-400 text-sm"> CLP + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200 mb-8">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Acceso total a charlas (Tracks A y B)
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Almuerzo buffet y Coffee breaks
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Swag bag Oficial ReactVerse 2026
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-cyan-400 text-xs" />
                    Pase para la Fiesta de Networking
                  </li>
                </ul>
              </div>
              <button onClick={() => openCheckout('Pro Conference Pass', '$85.000 CLP')} className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition duration-200">
                Comprar Pase General
              </button>
            </div>
            {/* TICKET 3: VIP + WORKSHOPS */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-violet-500/50 transition">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    VIP + Workshop
                  </h3>
                  <span className="text-xs font-semibold text-violet-400 bg-violet-950 border border-violet-800 px-2.5 py-1 rounded-md">
                    Premium
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Para líderes técnicos y seniors que buscan hands-on con
                  expertos.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $150.000
                  </span>
                  <span className="text-slate-500 text-sm"> CLP + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-violet-400 text-xs" />
                    Todo lo incluido en el Pro Pass
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-violet-400 text-xs" />
                    Acceso a 1 Workshop práctico (Día previo)
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-violet-400 text-xs" />
                    Zona Lounge VIP y cena privada con Speakers
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-violet-400 text-xs" />
                    Certificado oficial firmado
                  </li>
                </ul>
              </div>
              <button onClick={() => openCheckout('VIP + Workshop Pass', '$150.000 CLP')} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl border border-slate-700 transition duration-200">
                Comprar VIP
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Completar Compra"
      >
       <p className="text-sm text-slate-400 mb-6">Estás adquiriendo: <span className="text-cyan-400 font-semibold">{selectedTicket?.name}</span> (<span className="text-white font-semibold">{selectedTicket?.price}</span>)</p>
    <form onSubmit={handleCheckoutSubmit}  className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Ej: Luis Morales" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1">Empresa / Organización (Opcional)</label>
        <input type="text" name="empresa" value={form.empresa} onChange={handleChange} placeholder="Ej: Tech Company" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500" />
      </div>
      <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
        <button type="button" className="px-4 py-2.5 rounded-lg border border-slate-800 text-sm text-slate-300 hover:bg-slate-800">
          Cancelar
        </button>
        <button type="submit" className="bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-violet-500">
          Pagar Entrada
        </button>
      </div>
    </form>
      </Modal>
     
       
      <Footer />
    </>
  );
}

export default Tickets;
