import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "../css paginas/GlobalArticulos.css"; // Importa los estilos CSS

const Articulo3 = () => {
  const categoria = "Obsidian"; // Definir la categoría como una constante
  const titulo = "My Favorite Obsidian Plugins"; // Título del artículo
  const descripcion =
    "This article presents a list of my favorite Obsidian plugins and their functionalities. It covers plugins such as Auto Hide, Automatic Tags, Customizable Menu, Editing Toolbar, File Explorer++, and many more. Each plugin is described briefly to provide an overview of its purpose and usage."; // Descripción del artículo
  const articuloAnterior = "/articulo2";
  const articuloSiguiente = "/articulo1";
  return (
    <div className="articulo-global-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Home
      </Link>
      <h1 className="articulo-global-title">{titulo}</h1>
      <p className="articulo-global-content">{descripcion}</p>
      <h2 className="articulo-global-content-h1" id="auto-hide">
        Auto Hide
      </h2>
      <p>
        It serves very well if it bothers you to have to click or have to make
        each time a hotkey to expand or collapse the right or left pane. In my
        case it is very useful to me since you also have the option to show it
        by clicking the white area of the left side and not only on the button.
        Another way is to click on the file name. <br />
        <img src="!184786896-358e253a-d024-4d31-a33b-f200ce69e53a.gif" alt="" />
      </p>
      <h2 className="articulo-global-content-h1" id="automatic-tags">
        Automatic Tags
      </h2>
      <p>
        In my opinion it is one of the best obsidian plugins. Being a user of
        tags to relate notes and to see them in my graph view I find it very
        useful that based on your path the new notes you create automatically
        have the tags assigned to them which you configure in the plugin
        settings.
      </p>
      <p>In my vault I have it like this:</p>
      <pre>
        <code>
          ZZZ Journal/: Journal 0 Uni/GEOLOGIA/: Geologia 0 Uni/EMPRESA/:
          Empresa 0 Uni/ESTADISTICA/: Estadistica 0 Uni/FISICA 2/: Fisica2
          Data/: Data Notas/Ideas/: Ideas Notas/: Notas Notas/Personal Blog/:
          PersonalBlog
        </code>
      </pre>
      <h2 className="articulo-global-content-h1" id="customizable-menu">
        Customizable Menu
      </h2>
      <p>
        It is very useful in case you don't want to use hotkeys and instead use
        the right click. In my case I use it to insert templates and for a
        plugin called note refractor which helps me to make notes and
        zettelkasten. I also used it for highlighting text but then I changed it
        to a toolbar plugin which I will talk about next.
      </p>
      <h2 className="articulo-global-content-h1" id="editing-toolbar">
        Editing Toolbar
      </h2>
      <p>
        Very useful plugin, it gives a touch of microsoft word to obsidian and
        in case you don't want to use hotkeys for example if you don't feel like
        writing and just want to edit a note using only the mouse, it's very
        useful.
      </p>
      <h2 className="articulo-global-content-h1" id="file-explorer">
        File Explorer++
      </h2>
      <p>Allows to pin and hide folders.</p>
      <h2 className="articulo-global-content-h1" id="highlightr">
        Highlightr
      </h2>
      <p>
        Highlight texts and modify the type of highlighting. Very good for those
        of us who read a lot of info. It is activated with the right click so it
        is comfortable to use.
      </p>
      <h2 className="articulo-global-content-h1" id="home-tab">
        Home tab
      </h2>
      <p>
        If you don't like obsidian's default new tab I recommend you to use this
        plugin which has compatibility with Omnisearch and Surfing. It also
        shows recent files which can be very useful if you don't want to access
        the navigator.
      </p>
      <h2 className="articulo-global-content-h1" id="image-converter">
        Image Converter
      </h2>
      <p>
        I use it because it automatically renames the images I paste into my
        notes.
      </p>
      <h2 className="articulo-global-content-h1" id="multi-tag">
        Multi Tag
      </h2>
      <p>
        I also use it for tags in cases where there is a very large folder that
        has no tags, you can right click on the folder and put the tag you want.
        Then all the notes inside the folder will have the desired tag.
      </p>
      <h2 className="articulo-global-content-h1" id="note-refactor">
        Note Refactor
      </h2>
      <p>
        Very good for zettelkasten/notelinks. In my case I have configured the
        hotkey <code>Ctrl + Alt + /</code> this plugin serves to extract a text
        and create a new note (The title will be what you choose in the text of
        the note) in a path that you define. In my case I have a folder where
        all these notes are.
      </p>
      <h2 className="articulo-global-content-h1" id="omnisearch">
        Omnisearch
      </h2>
      <p>
        Game changer regarding searching for words within notes and even pdfs
        and images by OCR when combined with the Note Extractor plugin.
      </p>
      <h2 className="articulo-global-content-h1" id="pomodoro-timer">
        Pomodoro Timer
      </h2>
      <p>
        Adds a pomodoro timer to the status bar, you can also modify it in the
        right pane.
      </p>
      <h2 className="articulo-global-content-h1" id="reading-time">
        Reading Time
      </h2>
      <p>Displays note reading time in status bar.</p>
      <h2 className="articulo-global-content-h1" id="style-settings">
        Style Settings
      </h2>
      <p>
        Combined with compatible themes can be very helpful in terms of UI.{" "}
        <br />
        Using the theme catpuccin I get this options to modify:
        <br />
      </p>
      <h2 className="articulo-global-content-h1" id="surfing">
        Surfing
      </h2>
      <p>
        Allows Obsidian to access the web. Useful for when you want to open
        links inside obsidian instead of having to use a browser. Also allows
        you to search with google or the search engine you wish.
      </p>
      <h2 className="articulo-global-content-h1" id="tag-wrangler">
        Tag Wrangler
      </h2>
      <p>
        Allow multiple options for tags by right clicking them in the tag pane.
        I use it for renaming tags in case I need to.
      </p>
      <h2 className="articulo-global-content-h1" id="tasks">
        Tasks
      </h2>
      <p>
        More data when doing checklist for example showing the day the task was
        done.
      </p>
      <h2 className="articulo-global-content-h1" id="tree-focus">
        Tree Focus
      </h2>
      <p>
        Allows to Highlight and dim folders. I use it to make folders bigger.
      </p>
      <h2 className="articulo-global-content-h1" id="vault-statistics">
        Vault Statistics
      </h2>
      <p>
        Shows optional data in the status bar. I only show the global note
        number and the size of the vault.
      </p>
      <p>Categoría: {categoria}</p> {/* Mostrar la categoría */}
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
};

export default Articulo3;
