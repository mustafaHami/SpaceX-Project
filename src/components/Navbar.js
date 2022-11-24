import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <ul className="flex flex-col lg:flex-row list-none">
        <li>
            <NavLink
            exact
            to="/"
            className="mr-3 py-2 flex items-center text-xs uppercase font-bold"
            activeStyle={{ color: "#FBBF24" }}
            >
            Home
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/launches"
            className="mr-3 py-2 flex items-center text-xs uppercase font-bold"
            activeStyle={{ color: "#FBBF24" }}
            >
            Launches
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/rockets"
            className="mr-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
            activeStyle={{ color: "#FBBF24" }}
            >
            Rockets
            </NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;