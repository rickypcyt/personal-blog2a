import React from "react";
import "../css paginas/GlobalArticulos.css"; // Importa el archivo de estilos CSS global para ArticuloGlobal

function Articulo3() {
  return (
    <div className="articulo-global-container">
      <h1 className="articulo-global-title">My Favorite Obsidian Plugins</h1>
      <p className="articulo-global-content">
        From essential utilities to powerful integrations, I'll delve into the
        functionalities and benefits of each plugin, offering practical tips on
        how they can amplify your Obsidian experience. Whether you're a seasoned
        user or new to the platform, this overview will showcase the versatility
        and efficiency that these plugins bring to your note-taking workflow.
      </p>
      <h2>Auto Hide</h2>
      <p>
        It serves very well if it bothers you to have to click or have to make
        each time a hotkey to expand or collapse the right or left pane. In my
        case it is very useful to me since you also have the option to show it
        by clicking the white area of the left side and not only on the button.
        Another way is to click on the file name.
      </p>
      <img
        src="184786896-358e253a-d024-4d31-a33b-f200ce69e53a.gif"
        alt="Auto Hide GIF"
      />
      <h2>Automatic Tags</h2>
      <p>
        In my opinion it is one of the best obsidian plugins. Being a user of
        tags to relate notes and to see them in my graph view I find it very
        useful that based on your path the new notes you create automatically
        have the tags assigned to them which you configure in the plugin
        settings.
      </p>
      <pre>
        ZZZ Journal/: Journal 0 Uni/GEOLOGIA/: Geologia 0 Uni/EMPRESA/: Empresa
        0 Uni/ESTADISTICA/: Estadistica 0 Uni/FISICA 2/: Fisica2 Data/: Data
        Notas/Ideas/: Ideas Notas/: Notas Notas/Personal Blog/: PersonalBlog
      </pre>
      <h2>Customizable Menu</h2>
      <p>
        It is very useful in case you don't want to use hotkeys and instead use
        the right click. In my case I use it to insert templates and for a
        plugin called note refractor which helps me to make notes and
        zettelkasten. I also used it for highlighting text but then I changed it
        to a toolbar plugin which I will talk about next.
      </p>
      <h2>Editing Toolbar</h2>
      <p>
        Very useful plugin, it gives a touch of microsoft word to obsidian and
        in case you don't want to use hotkeys for example if you don't feel like
        writing and just want to edit a note using only the mouse, it's very
        useful.
      </p>
      <img
        src="My Favorite Obsidian Plugins-20240207120336832.png"
        alt="Editing Toolbar"
      />
      <h2>File Explorer++</h2>
      <p>Allows to pin and hide folders.</p>
      ![File Explorer ++](C:\Users\Ricky\Coding 2024\personal-blog2a\src\imgs\My
      Favorite Obsidian Plugins-20240208120914930.png)
      {/* Repeat the same pattern for other sections */}
    </div>
  );
}

export default Articulo3;
