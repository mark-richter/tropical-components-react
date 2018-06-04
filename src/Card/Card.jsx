import React, { Component } from "react";

function Card({ image, children, footer }) {
    return (
        <div className="card card-blog">
            {image}
            <div className="card-content">{children}</div>
            {footer}
        </div>
    );
}

export default Card;

// https://demos.creative-tim.com/bs3/material-kit-pro/assets/img/examples/blog8.jpg
