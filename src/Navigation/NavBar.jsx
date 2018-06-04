import React, { Component } from "react";

function NavBar({}) {
    return (
        <nav class="navbar navbar-default" role="navigation-demo">
            <div class="container">
                <div class="navbar-header">
                    <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#navigation-example-2"
                    >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar" />
                        <span class="icon-bar" />
                        <span class="icon-bar" />
                    </button>
                    <a class="navbar-brand" href="#pablo">
                        Navbar with profile
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="navigation-example-2">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#pablo">Discover</a>
                        </li>
                        <li>
                            <a href="#pablo">Wishlist</a>
                        </li>

                        <li>
                            <a
                                href="#pablo"
                                class="btn btn-rose btn-raised btn-round"
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
