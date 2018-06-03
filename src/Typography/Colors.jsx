import React, { Component } from "react";

function Colors({ children }) {
    return (
        <div>
            <h1 className="text-muted">Muted - {children}</h1>
            <h1 className="text-primary">Primary - {children}</h1>
            <h1 className="text-info">Info - {children}</h1>
            <h1 className="text-success">Success - {children}</h1>
            <h1 className="text-warning">Warning - {children}</h1>
            <h1 className="text-danger">Danger - {children}</h1>
        </div>
    );
}

export default Colors;
