import React from "react";
import "../css paginas/GlobalArticulos.css"; // Importa el archivo de estilos CSS global para ArticuloGlobal

function Articulo2() {
  const categoria = "Coding";

  return (
    <div className="articulo-global-container">
      <h1 className="articulo-global-title">How I coded this blog. </h1>
      <p>Ahora, cuando se necesite filtrar los artículos por su identificador "gym", debes usar este componente y pasar la información relevante. Dependiendo de cómo hayas implementado la funcionalidad de filtrado en tu aplicación, podrías hacerlo directamente en la lógica de renderizado del componente Articulos, o en algún otro componente que controle la visualización de los artículos filtrados.</p>
      <p>Este blog está hecho en React (Hablar de qué es React).</p>
      <p>Utilizar el comando:</p>
      <p>
        <code>npm create-react-app personal-blog</code>
      </p>
      <p>!How I coded this website.-20240204144400816.png|509</p>
      <p>
        Borrar lo que viene por defecto, darle un poco de forma a la página y
        poner un color de fondo : <br />
        !How I coded this website.-20240204150749437.png
        <br />
        <em>
          Le pedí a ChatGPT que me dé un color marrón claro el cual me gusta
          mucho. También le he pedido una paleta de colores con otros
          relacionados
        </em>
      </p>
      <p>
        Ahora vamos a añadir un navbar, en el pondremos el nombre de la página
        y un poco de contenido. En la izquierda Nombre página categoría Gym y
        a la derecha un About y Contact.
      </p>
      <p>Un método que me gusta es utilizar el comando:</p>
      <pre>
        <code>npm install react-router-dom</code>
      </pre>
      <p>
        Con este instalamos react-router. (Hablar de lo que es hace y cómo
        funciona).
      </p>
      <p>
        Una vez tengamos el navbar ya podemos empezar a estilar la sección
        donde tendremos los artículos del blog:
      </p>
      <p>!How I coded this blog.-20240211002638766.png</p>
      <p>
        En el proceso se me ocurrió en vez de hacer un dropdown menu de los
        artículos... Todo el homepage tenerlo con latests posts. Con título
        fecha y read time así como una foto (puede ser con IA o Unsplash o
        incluso hecha con css se me ocurre) que vaya con el tema. Y en vez de
        articles que se llame categories y tener por ejemplo Fitness Books
        Self Development Coding y que te lleve a una página donde vas a ver
        solo páginas con esos tags.
      </p>
      <p>Categoría: {categoria}</p>
    </div>
  );
}

export default Articulo2;
