import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-brand">
        <a href="/">Samuel Villafana</a>
      </h1>
      <div className="header-links">
        <Link className="header-link" to="/about">
          About Me
        </Link>
        <Link className="header-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="header-link" to="/contact">
          Contact
        </Link>
        <Link className="header-link" to="/resume">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
