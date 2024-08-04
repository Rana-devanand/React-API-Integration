import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="flex justify-center gap-10 p-3 bg-blue-400">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "white" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "white" : "",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "white" : "",
            };
          }}
          to="/products"
        >
          products
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "white" : "",
            };
          }}
          to="/services"
        >
          services
        </NavLink>
      </nav>
      <hr />
    </React.Fragment>
  );
}

export default Nav;
