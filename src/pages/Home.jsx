import { useState } from "react";
import Typical from "react-typical";
import Loader from "../components/Loader";

const Home = () => {
  
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="grid content-start sm:content-center justify-center w-full h-screen">
          <h1 className="text-white md:text-5xl font-bold mb-2">
            <Typical
              steps={["Hola,", 3000, "Saludos,", 3000]}
              wrapper="p"
              loop={Infinity}
            />
          </h1>
          <h1 className="text-white md:text-5xl font-bold mb-2">
            Soy Marco Amancha,
          </h1>
          <h1 className="text-white md:text-5xl font-bold mb-2">
            Desarrollador Web
          </h1>
          <h2 className="text-slate-300">Desaroolador Fron End</h2>
          <a
            href="https://wa.me/593983841134"
            target="_blank"
            className="mt-4 bg-slate-800 text-white font-bold rounded-sm p-2 sm:w-1/2 text-center shadow-sm"
          >
            Contáctame
          </a>
        </div>
      )}
    </>
  );
};

export default Home;
