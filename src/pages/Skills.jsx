import React, { useState } from 'react'
import Loader from '../components/Loader';

const Skills = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <>
      {loader ? (<Loader />) : (
        <div className='w-full pt-5  h-full md:h-screen'>
        <div className='mb-5 md:mb-10'>
          <h1 className="text-white text-center md:text-5xl font-bold mb-4"><span className="text-red-600">[</span> Mis Habilidades <span className="text-red-600">]</span></h1>
          <h2 className="text-white text-center md:text-xl font-bold mb-2">Mi preferencia está en el desarrollo Front End, por lo cual he dedicado mi tiempo al estudio de 
              múltiples herramientas para su construcción.
          </h2>
        </div>
        <div className='grid md:grid-cols-3'>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>HTML</h1>
            <i className="fab fa-html5 text-5xl"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>CSS</h1>
            <i className="fab fa-css3 text-5xl"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>JavaScript</h1>
            <i className="fab fa-js-square text-5xl grid justify-center"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>React js</h1>
            <i className="fab fa-react text-5xl"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>Next js</h1>
            <i className="fa fa-diamond text-5xl"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>GitHub</h1>
            <i className="fab fa-github text-5xl grid justify-center"></i>
          </div>
        </div>
        <h1 className="text-white text-center md:text-5xl font-bold my-4"><span className="text-red-600">[</span> Back End <span className="text-red-600">]</span></h1>
        <div className='grid md:grid-cols-3'>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>PHP</h1>
            <i className="fab fa-php text-5xl"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>MongoDB</h1>
            <i className="fas fa-database text-5xl  grid justify-center"></i>
          </div>
          <div className='grid justify-center text-white bg-slate-800 rounded-md py-4 mx-8 mb-2'>
            <h1 className='text-center'>MySQL</h1>
            <i className="fa fa-server text-5xl grid justify-center"></i>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Skills