import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./_styles.scss";

export default function NavBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <nav className="navBar">
        <Link to="/">
          <button
            className={`navBar-button ${pathname === "/" ? "selected" : ""}`}
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className={`navBar-button ${
              pathname === "/about" ? "selected" : ""
            }`}
          >
            About
          </button>
        </Link>
        <Link to="/skills">
          <button
            className={`navBar-button ${
              pathname === "/skills" ? "selected" : ""
            }`}
          >
            Skills
          </button>
        </Link>
        <Link to="/projects">
          <button
            className={`navBar-button ${
              pathname === "/projects" ? "selected" : ""
            }`}
          >
            Projects
          </button>
        </Link>
      </nav>
    </>
  );
}
