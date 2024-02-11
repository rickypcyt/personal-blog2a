import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

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

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="personal-blog">
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
              <Link to="/gym1" className="dropdown-item">
                Gym
              </Link>
              <Link to="/gym2" className="dropdown-item">
                Coding
              </Link>
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
