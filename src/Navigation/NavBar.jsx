import React, { Component } from "react";

function NavBar({}) {
  return (
    <nav className="navbar navbar-default" role="navigation-demo">
      <div className="container">
        <div claclassNamess="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navigation-example-2"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#pablo">
            Navbar with profile
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navigation-example-2">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#pablo">Discover</a>
            </li>
            <li>
              <a href="#pablo">Wishlist</a>
            </li>

            <li>
              <a
                href="#pablo"
                className="btn btn-rose btn-raised btn-round"
                data-toggle="dropdown"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
