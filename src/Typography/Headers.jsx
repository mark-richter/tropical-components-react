import React, { Component } from "react";

function Headers({ children }) {
    return (
        <div>
            <h1>H1 - {children}</h1>
            <h2>H2 - {children}</h2>
            <h3>H3 - {children}</h3>
            <h4>H4 - {children}</h4>
            <h5>H5 - {children}</h5>
            <h6>H6 - {children}</h6>
        </div>
    );
}

export default Headers;

// https://demos.creative-tim.com/bs3/material-kit-pro/assets/img/examples/blog8.jpg
