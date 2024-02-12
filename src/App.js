import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./paginas/About";
import Contact from "./paginas/Contact";
import Articulo1 from "./paginas/Articulo1";
import Articulo2 from "./paginas/Articulo2";
import Articulo3 from "./paginas/Articulo3";
import Articulos from "./paginas/Articulos";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilter = () => {
    setSelectedCategory(null); // Limpiar el filtro
  };

  return (
    <Router>
      <div>
        <Navbar handleFilter={handleFilter} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articulo1" element={<Articulo1 />} />
          <Route path="/articulo2" element={<Articulo2 />} />
          <Route path="/articulo3" element={<Articulo3 />} />
          <Route
            path="/"
            element={<Articulos selectedCategory={selectedCategory} handleClearFilter={handleClearFilter} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
