import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Loader from '../components/Loader';

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="grid content-center justify-center px-4 w-full h-screen">
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-white md:text-5xl font-bold mb-2">
            <Typewriter
              words={['Hola,', 'Saludos,']}
              loop={0} // Infinite loop
              cursor
              cursorStyle='_'
              typeSpeed={10}
              deleteSpeed={100}
              delaySpeed={3000}
            />
          </h1>
          <h1 className="text-white md:text-5xl font-bold mb-2">
            Soy Marco Amancha,
          </h1>
          <h1 className="text-white md:text-5xl font-bold mb-2">
            Desarrollador de software
          </h1>
          <h2 className="my-4 text-slate-200">Ingeniero en sistemas</h2>
          <a
            href="https://wa.me/593983841134"
            target="_blank"
            className="mt-4 bg-slate-800 text-white font-bold rounded-sm p-2 sm:w-1/2 text-center shadow-sm"
          >
            Contáctame
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
