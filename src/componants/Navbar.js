import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand text-light"><b>ASK</b></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link text-light" to="/education">
              Education
            </Link>
            <Link className="nav-item nav-link text-light" to="/skills">
              Skills
            </Link>
            <Link className="nav-item nav-link text-light" to="/projects">
              Projects
            </Link>
            <Link className="nav-item nav-link text-light" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
