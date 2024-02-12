import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../css paginas/Contact.css"; // Importa los estilos CSS

function Contact() {
  return (
    <div className="contact-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Home
      </Link>
      
      <p className="contact-info">
        
        You can reach me through the following social media platforms or contact
        methods:
        <br />
        - Email: example@example.com
        <br />
        - Phone: +123456789
        <br />
        - Twitter: @exampleTwitter
        <br />
        - LinkedIn: linkedin.com/in/example
        <br />
        Feel free to connect and follow!
      </p>
    </div>
  );
}

export default Contact;
