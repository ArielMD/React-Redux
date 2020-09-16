import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/" className="navbar-brand text-dark">
        Mis juegos
      </Link>

      <Link to="/juegos/nuevo" className="btn btn-danger">
        Nuevo &#43;
      </Link>
    </nav>
  );
};

export default Navbar;
