import React from "react";
import { Link } from "react-router-dom";
import "../css paginas/Articulos.css";
import Articulo1 from "./Articulo1";
import Articulo2 from "./Articulo2";
import Articulo3 from "./Articulo3";

function obtenerPrimerParrafo(descripcion) {
  if (typeof descripcion === "string") {
    const parrafos = descripcion.split("\n");
    return parrafos[0];
  } else {
    return ""; // o algún valor predeterminado
  }
}

function obtenerInformacionArticulo(ComponenteArticulo) {
  const titulo = ComponenteArticulo().props.children[0].props.children;
  const descripcion = ComponenteArticulo().props.children[1].props.children;
  const primerParrafo = obtenerPrimerParrafo(descripcion);
  return { titulo, primerParrafo };
}

function Articulos({ selectedCategory, handleClearFilter }) {
  const listaArticulos = [
    { componente: Articulo1, categoria: "Gym" },
    { componente: Articulo2, categoria: "Coding" },
    { componente: Articulo3, categoria: "Obsidian" },
  ];

  const articulosFiltrados = selectedCategory
    ? listaArticulos.filter((articulo) => articulo.categoria === selectedCategory)
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
                <h3 className="articulo-title">
                  {obtenerInformacionArticulo(articulo.componente).titulo}
                </h3>
                <p className="articulo-content">
                  {obtenerInformacionArticulo(articulo.componente).primerParrafo}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={clearFilter}>Clear Filter</button> {/* Botón para limpiar el filtro */}
    </div>
  );
}

export default Articulos;
