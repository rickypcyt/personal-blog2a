import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ handleFilter }) => {
  const handleCategoryClick = (category) => {
    // Apply filter in the homepage ("/")
    handleFilter(category);
  };

  const handleClearFilter = () => {
    handleFilter(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Link to the homepage */}
          <Link to="/" className="personal-blog" onClick={handleClearFilter}>
            Personal Blog
          </Link>
        </div>
        <div className="categories-bar">
          {/* Each category button redirects to the homepage and applies the filter */}
          <button onClick={() => handleCategoryClick("Gym")} className="category">
            Gym
          </button>
          <button onClick={() => handleCategoryClick("Coding")} className="category">
            Coding
          </button>
          <button onClick={() => handleCategoryClick("Obsidian")} className="category">
            Obsidian
          </button>
          {/* Add more categories as needed */}
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
