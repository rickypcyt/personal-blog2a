import React from 'react';
import '../css paginas/GlobalArticulos.css'; // Importa los estilos CSS

const Articulo3 = () => {
  const categoria = 'Obsidian'; // Definir la categoría como una constante

  // Verificar si el artículo pertenece a la categoría seleccionada

  return (
    <div className="articulo-global-container">
      <h1 className="articulo-global-title">My Favorite Obsidian Plugins</h1>
      <p className="articulo-global-content">
        This article presents a list of my favorite Obsidian plugins and their functionalities. It covers plugins such as Auto Hide, Automatic Tags, Customizable Menu, Editing Toolbar, File Explorer++, and many more. Each plugin is described briefly to provide an overview of its purpose and usage.
      </p>
      {/* Contenido del artículo... */}
      <p>Categoría: {categoria}</p> {/* Mostrar la categoría */}
    </div>
  );
}

export default Articulo3;
