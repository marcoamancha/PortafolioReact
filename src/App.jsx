import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navegacion from "./components/Navegacion"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Proyectos from "./pages/Proyectos"
import Skills from "./pages/Skills"


function App() {
  return (
    <div className="bg-cover bg-center bg-[url('/fondo.jpg')] bg-slate-700 flex">      
      {/* Rutas de mi aplicacion */}
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
