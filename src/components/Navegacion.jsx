import { NavLink } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="bg-stone-900 w-40 text-white flex flex-col">
      <div className="bg-stone-800 py-5">
        <h1 className="text-center font-bold text-xl sm:text-4xl font-MyFont">
          M
        </h1>
        <h2 className="text-center font-bold pt-2">Marco Amancha</h2>
        <h3 className="text-center pt-4 text-sm">Desarrollador Web</h3>
      </div>
      <div className="py-8">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer hidden sm:block">
            Inicio
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer sm:hidden">
            <i className="fa fa-home"></i>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/about"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer hidden sm:block">
            Sobre mi
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/about"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer sm:hidden">
            <i className="fa fa-address-card"></i>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/skills"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer hidden sm:block">
            Habilidades
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/skills"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer sm:hidden">
            <i className="fa fa-award"></i>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/proyectos"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer hidden sm:block">
            Proyectos
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to="/proyectos"
        >
          <li className="list-none text-center py-2 font-semibold border-b-4 border-red-500 cursor-pointer sm:hidden">
            <i className="fa fa-project-diagram"></i>
          </li>
        </NavLink>
      </div>
      <div className="pt-10 grid justify-items-center">
        <a href="https://wa.me/593983841134" target="_blank" className="pb-2">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marcoamancha/"
          target="_blank"
          className="pb-2"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/marcoamancha"
          target="_blank"
          className="pb-2"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Navegacion;
