import React, { useState } from 'react'
import Loader from '../components/Loader';

const About = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1000);

  return (
    <>
      {loader ? (<Loader />) : (
        <div className="grid content-center justify-center px-4 w-full h-screen">
          <h1 className="text-white text-center sm:text-left md:text-5xl font-bold mb-2"><span className="text-red-600">[</span> Sobre Mi <span className="text-red-600">]</span></h1>       
          <p className='text-white mt-4 text-xl'>Ingeniero en Sistemas, apasionado por el</p>
          <p className='text-white text-xl'>Desarrollo Web. Me considero una persona</p>
          <p className='text-white text-xl'>organizada y con gran motivación por dar</p>
          <p className='text-white text-xl'>solución a problemas.</p>
          <p className='text-white mt-4 text-xl'>Aficionado a la práctica del deporte y</p>
          <p className='text-white text-xl mb-4'>actividades al aire libre.</p>    
          <a href="/Hoja de vida Marco Amancha.pdf" target="_blank"  className="mt-4 bg-slate-800 text-white font-bold rounded-sm p-2 sm:w-1/2 text-center shadow-sm m-2 sm:m-0">Descargar CV</a>
      </div>
      )}
    </>
  )
}

export default About
