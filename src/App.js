import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./paginas/About";
import Contact from "./paginas/Contact";
import Gym1 from "./paginas/Gym1";
import Gym2 from "./paginas/Gym2";
import Articulo1 from "./paginas/Articulo1"; // Importa el componente del artículo 1
import Articulo2 from "./paginas/Articulo2"; // Importa el componente del artículo 2
import Articulo3 from "./paginas/Articulo3"; // Importa el componente del artículo 3
import Articulos from "./paginas/Articulos"; // Importa el componente de los artículos

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gym1" element={<Gym1 />} />
          <Route path="/gym2" element={<Gym2 />} />
          <Route path="/articulo1" element={<Articulo1 />} />{" "}
          {/* Ruta para el artículo 1 */}
          <Route path="/articulo2" element={<Articulo2 />} />{" "}
          {/* Ruta para el artículo 2 */}
          <Route path="/articulo3" element={<Articulo3 />} />{" "}
          {/* Ruta para el artículo 3 */}
          <Route path="/" element={<Articulos />} />
          {/* Ruta para la página de artículos */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
