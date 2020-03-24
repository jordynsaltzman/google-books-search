import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

const Navbar = () => {
  return (
    <nav className="navDiv">
      <div className="row navRow">
        <div className="col-md-12">
          <div className="navItem logo">
            <i className="fab fa-google"></i>oogle Books
          </div>
        </div>
        <div className="col-md-12">
          <h6 className="slogan">Search for and Save Books of Interest.</h6>
          <hr />
        </div>

        <div className="col-md-12">
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navItem basic"
            to="/search"
          >
            Find Books
          </NavLink>

          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navItem basic"
            to="/saved"
          >
            Reading List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Lato', sans-serif;
