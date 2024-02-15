import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ handleFilter }) => {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryMenuOpen(false);
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (categoryMenuOpen || menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [categoryMenuOpen, menuOpen]);

  const handleCategoryClick = (category) => {
    handleFilter(category);
    setCategoryMenuOpen(false);
  };

  const handleClearFilter = () => {
    handleFilter(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="personal-blog" onClick={handleClearFilter}>
            My Blog
          </Link>
        </div>
        <div className="categories" ref={dropdownRef}>
          <button
            className="category-dropdown"
            onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
          >
            Categories
          </button>
          {categoryMenuOpen && (
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
        <div className="menu" ref={menuRef}>
          <button
            className="category-dropdown"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
          {menuOpen && (
            <div className="dropdown-menu show">
              <NavLink
                to="/about"
                className="dropdown-item"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="dropdown-item"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
