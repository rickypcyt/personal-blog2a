import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../css paginas/GlobalArticulos.css"; // Importa el archivo de estilos CSS global para ArticuloGlobal

function Articulo2() {
  const categoria = "Coding";
  const titulo = "How I coded this blog";
  const descripcion =
    "Embark on a journey through the design and implementation phases, uncovering the intricacies of utilizing Reacts powerful features to craft an engaging and interactive blogging platform. Explore the rationale behind architectural decisions and the seamless integration of React components for enhanced user experience.";

  // Supongamos que aquí tienes lógica para obtener los enlaces de los artículos anteriores y siguientes
  const articuloAnterior = "/articulo1";
  const articuloSiguiente = "/articulo3";

  return (
    <div className="articulo-global-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Home
      </Link>
      <h1 className="articulo-global-title">{titulo}</h1>
      <p className="articulo-global-content">{descripcion}</p>
      <p>Este blog está hecho en React (Hablar de qué es React).</p>
      {/* Resto de tu contenido */}
      <p>Categoría: {categoria}</p>

      {/* Banner para navegar al artículo anterior y siguiente */}
      <div className="articulo-navigation">
        {articuloAnterior && (
          <Link to={articuloAnterior} className="back-link">
            <FiArrowLeft /> Anterior
          </Link>
        )}
        {articuloSiguiente && (
          <Link to={articuloSiguiente} className="back-link">
            Siguiente <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Articulo2;
