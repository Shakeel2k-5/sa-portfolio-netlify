import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./sources/S.A Logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Site Logo" />

      <div className="linksdiv">
        <NavLink to="/Portfolio-Website" className={({ isActive }) => (isActive ? "links active-link" : "links")} exact>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "links active-link" : "links")}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "links active-link" : "links")}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
