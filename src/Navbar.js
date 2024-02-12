// Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ handleFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    handleFilter(category); // Llama a la función de manejo del filtro y pasa la categoría seleccionada
  };

  const handleClearFilter = () => {
    setIsDropdownOpen(false);
    handleFilter(null); // Llama a la función de manejo para limpiar el filtro
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="personal-blog" onClick={handleClearFilter}>
            Personal Blog
          </Link>
        </div>
        <div className="relative" ref={dropdownRef}>
          <Link
            to="#"
            className={`nav-link ${isDropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            Categories
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-menu absolute bg-gray-800 py-2">
              <button onClick={() => handleCategoryClick("Gym")} className="dropdown-item">Gym</button>
              <button onClick={() => handleCategoryClick("Coding")} className="dropdown-item">Coding</button>
              <button onClick={() => handleCategoryClick("Obsidian")} className="dropdown-item">Obsidian</button>
              {/* Add more categories as needed */}
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
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
