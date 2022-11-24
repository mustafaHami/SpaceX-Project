import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex flex-col lg:flex-row list-none">
        <li>
            <NavLink
            to="/"
            >
            Home
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/launches"
            >
            Launches
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/capsules"
            >
            Capsules
            </NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;