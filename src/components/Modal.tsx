import React from 'react';
import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    if(!isOpen) return null;
    return(
        <>
        <div id="checkout-modal" className="fixed inset-0 z-50 hidden flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
  <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
      <i className="fa-solid fa-xmark text-xl" />
    </button>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    {children}
  </div>
</div>



        </>
    )
    
}

export default Modal