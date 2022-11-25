import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  return ( 
    <div className="container-fluid mb-4">
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                <li className="hoverable"><NavLink to="/launches">Launches</NavLink></li>
                <li className="hoverable"><NavLink to="/capsules">Capsules</NavLink></li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;