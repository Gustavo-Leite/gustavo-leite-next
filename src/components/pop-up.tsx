import React from 'react';

export const Popup: React.FC = () => {
  return (
    <div className="fixed px-4 sm:px-0 top-0 sm:right-0 bottom-0 sm:left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-100 p-8 rounded-lg z-10">
        <h2 className="text-2xl font-bold mb-4 ">Portfolio Novo Disponível!</h2>
        <span>Um novo aplicativo está disponível. Clique <a href="https://gustavo-martins-dev.vercel.app/" className='text-blue-700 underline'>aqui</a> para acessá-lo.</span>
      </div>
    </div>
  );
};
