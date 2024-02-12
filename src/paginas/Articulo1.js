import React from 'react';
import "../css paginas/GlobalArticulos.css"; // Importa los estilos CSS

const categoria = 'Gym'; // Definir la categoría como una constante

function Articulo1() {
  return (
    <div className="articulo-global-container">
        <h1 className="articulo-global-title">The Smartest Way to Build Muscle in 2024</h1>
      <p className="articulo-global-content">
Discover the pinnacle of muscle-building wisdom in "The Smartest Way to Build Muscle in 2024" video. With expert insights from renowned professionals like Dr. Mike Israetel and Dr. Brad Schoenfeld, this guide offers clear strategies for optimizing exercise selection, set volume, and training frequency. From rep ranges to advanced techniques, this video equips viewers with actionable knowledge to sculpt their physique with precision and effectiveness.</p>
      <h2 className="articulo-global-content-h1" id="how-many-exercises">How many exercises?</h2>
      <p className="articulo-global-content"><a href="https://urls.grow.me/7e59P90Xe">Dr. Mike Israetel</a>: Suggests that 2-4 exercises per muscle group is ideal.</p>
      {/* Resto del contenido... */}
      <p>Categoría: {categoria}</p> {/* Mostrar la categoría */}
    </div>
  );
}

export default Articulo1;
