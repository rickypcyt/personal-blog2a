import React from "react";
import { Link } from "react-router-dom";
import "../css paginas/Articulos.css";
import Articulo1 from "./Articulo1";
import Articulo2 from "./Articulo2";
import Articulo3 from "./Articulo3";

function Articulos({ selectedCategory, handleClearFilter }) {
  const listaArticulos = [
    {
      componente: Articulo1,
      categoria: "Gym",
      titulo: "The Smartest Way to Build Muscle in 2024",
      descripcion:
        "Discover the pinnacle of muscle-building wisdom in The Smartest Way to Build Muscle in 2024 video. With expert insights from renowned professionals like Dr. Mike Israetel and Dr. Brad Schoenfeld, this guide offers clear strategies for optimizing exercise selection, set volume,and training frequency. From rep ranges to advanced techniques, this video equips viewers with actionable knowledge to sculpt their physiquewith precision and effectiveness.",
    },
    {
      componente: Articulo2,
      categoria: "Coding",
      titulo: "How I coded this blog",
      descripcion:
        "Embark on a journey through the design and implementation phases, uncovering the intricacies of utilizing React's powerful features to craft an engaging and interactive blogging platform. Explore the rationale behind architectural decisions and the seamless integration of React components for enhanced user experience.",
    },
    {
      componente: Articulo3,
      categoria: "Obsidian",
      titulo: "My Favorite Obsidian Plugins",
      descripcion:
        "This article presents a list of my favorite Obsidian plugins and their functionalities. It covers plugins such as Auto Hide, Automatic Tags, Customizable Menu, Editing Toolbar, File Explorer++, and many more. Each plugin is described briefly to provide an overview of its purpose and usage.",
    },
  ];

  const articulosFiltrados = selectedCategory
    ? listaArticulos.filter(
        (articulo) => articulo.categoria === selectedCategory
      )
    : listaArticulos;

  const clearFilter = () => {
    handleClearFilter(); // Llama a la función de manejo para limpiar el filtro
  };

  return (
    <div className="articulos-container">
      <ul className="articulos-list">
        {articulosFiltrados.map((articulo, index) => (
          <li key={index}>
            <Link to={`/articulo${index + 1}`} className="articulo-link">
              <div className="articulo-box">
                <h3 className="articulo-title">{articulo.titulo}</h3>
                <p className="articulo-content">{articulo.descripcion}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {selectedCategory && <button onClick={clearFilter}>Clear Filter</button>}
    </div>
  );
}

export default Articulos;
