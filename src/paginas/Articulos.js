import React from "react";
import { Link } from "react-router-dom";
import Articulo1 from "./Articulo1";
import Articulo2 from "./Articulo2";
import Articulo3 from "./Articulo3";
import "../css paginas/Articulos.css";

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

function Articulos() {
  return (
    <div className="articulos-container">
      <ul className="articulos-list">
        <li>
          <Link to="/articulo1" className="articulo-link">
            <div className="articulo-box">
              <h3 className="articulo-title">
                {obtenerInformacionArticulo(Articulo1).titulo}
              </h3>
              <p className="articulo-content">
                {obtenerInformacionArticulo(Articulo1).primerParrafo}
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/articulo2" className="articulo-link">
            <div className="articulo-box">
              <h3 className="articulo-title">
                {obtenerInformacionArticulo(Articulo2).titulo}
              </h3>
              <p className="articulo-content">
                {obtenerInformacionArticulo(Articulo2).primerParrafo}
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/articulo3" className="articulo-link">
            <div className="articulo-box">
              <h3 className="articulo-title">
                {obtenerInformacionArticulo(Articulo3).titulo}
              </h3>
              <p className="articulo-content">
                {obtenerInformacionArticulo(Articulo3).primerParrafo}
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Articulos;
