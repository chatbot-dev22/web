import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/assets/styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="Miimansa" height="40" />
        </Link>
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
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "What we do", path: "/what-we-do" },
              { name: "About", path: "/about" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" },
              { name: "More", path: "/more" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;