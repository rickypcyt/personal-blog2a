import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../css paginas/About.css";

function About() {
  return (
    <div className="about-container">
    <Link to="/" className="back-link">
        <FiArrowLeft /> Back
      </Link>
      <p className="about-content">
        I'm a 20-year-old student of engineering with a passion for coding since
        long ago. It's a hobby I enjoy revisiting from time to time.
      </p>
    </div>
  );
}

export default About;

