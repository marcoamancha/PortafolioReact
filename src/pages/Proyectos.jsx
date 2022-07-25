import React, { useState } from 'react'
import Loader from '../components/Loader';

const Proyectos = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <>
      {loader ? (<Loader />) : (
        <div className='w-full p-5 h-full'>
        <h1 className="text-white text-center md:text-5xl font-bold mb-4"><span className="text-red-600">[</span> Mis Proyectos <span className="text-red-600">]</span></h1>
        <div className='grid md:grid-cols-3 gap-8 mt-10 sm:mx-8'> 
  
          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/pyme.png" alt="pyme" />
            <h1 className='text-center text-white font-bold'>Ecommerce</h1>
            <p className='text-center text-slate-400'>Next js, Tailwind Css, MongoDB</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://pyme.vercel.app/" target="_blank" >Visitar</a>
            </div>
          </div>
  
          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/salud.png" alt="salud" />
            <h1 className='text-center text-white font-bold'>Salud</h1>
            <p className='text-center text-slate-400'>React js, Tailwind Css</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://salud.netlify.app/" target="_blank" >Visitar</a>
            </div>
          </div>

          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/productos.png" alt="productos" />
            <h1 className='text-center text-white font-bold'>Productos</h1>
            <p className='text-center text-slate-400'>React js, Styles Components, Firebase</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://productos-pw.netlify.app/" target="_blank" >Visitar</a>
            </div>
          </div>

          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/tareas.png" alt="tareas" />
            <h1 className='text-center text-white font-bold'>Tareas Crud</h1>
            <p className='text-center text-slate-400'>React js, Tailwind Css, LocalStorage</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://mis-tareas-react.netlify.app/" target="_blank" >Visitar</a>
            </div>
          </div>
  
          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/blackjack.png" alt="blackjack" />
            <h1 className='text-center text-white font-bold'>BlackJack</h1>
            <p className='text-center text-slate-400'>JavaScript, HTML, CSS</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://blacjack.netlify.app/" target="_blank" >Visitar</a>
            </div>
          </div>
  
          <div className='bg-slate-800 rounded-lg shadow-xl w-full'>
            <img className='block p-4 rounded-lg' src="/gastos.png" alt="gastos" />
            <h1 className='text-center text-white font-bold'>Gastos</h1>
            <p className='text-center text-slate-400'>React js, HTML, CSS</p>
            <div className='flex justify-center m-2'>
            <a className='text-center bg-red-500 text-white py-1 px-2 rounded-lg' href="https://calculador-gastos.netlify.app/" target="_blank" >Visitar</a>
            </div>
          </div>
        </div>
    </div>
      )}
    </>
  )
}

export default Proyectos