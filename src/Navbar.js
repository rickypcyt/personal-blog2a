import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ handleFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Si se hace clic fuera del menú desplegable, ciérralo
        setMenuOpen(false);
      }
    };

    // Agregar el evento de clic fuera del menú cuando el menú está abierto
    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Limpiar el event listener cuando el componente se desmonta o cuando el menú se cierra
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleCategoryClick = (category) => {
    // Aplicar filtro en la página de inicio ("/")
    handleFilter(category);
    // Cerrar el menú desplegable después de manejar la categoría clicada
    setMenuOpen(false);
  };

  const handleClearFilter = () => {
    handleFilter(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Enlace a la página de inicio */}
          <Link to="/" className="personal-blog" onClick={handleClearFilter}>
            Personal Blog
          </Link>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            className="category-dropdown"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Categories
          </button>
          {menuOpen && (
            <div className="dropdown-menu show">
              <button
                onClick={() => handleCategoryClick("Gym")}
                className="dropdown-item"
              >
                Gym
              </button>
              <button
                onClick={() => handleCategoryClick("Coding")}
                className="dropdown-item"
              >
                Coding
              </button>
              <button
                onClick={() => handleCategoryClick("Obsidian")}
                className="dropdown-item"
              >
                Obsidian
              </button>
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <div>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
