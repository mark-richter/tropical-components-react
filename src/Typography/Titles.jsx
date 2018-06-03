import React, { Component } from "react";

function Titles({ children }) {
    return (
        <div>
            <h1 className="title">H1 - {children}</h1>
            <h2 className="title">H2 - {children}</h2>
            <h3 className="title">H3 - {children}</h3>
            <h4 className="title">H4 - {children}</h4>
            <h5 className="title">H5 - {children}</h5>
            <h6 className="title">H6 - {children}</h6>
        </div>
    );
}

export default Titles;
