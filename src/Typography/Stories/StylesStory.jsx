import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme, withDocs } from "storybook-readme";
import {
    withKnobs,
    text,
    boolean,
    number,
    object
} from "@storybook/addon-knobs";

storiesOf("Typography", module)
    .addDecorator(withKnobs)
    .add("styles", () => (
        <div>
            <div className="col-md-8">
                <h1>Headers</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "25%" }}>h1</p>
                    </div>
                    <div className="col-md-9">
                        <h1>{text("header", "Hello, World!")}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "25%" }}>h2</p>
                    </div>
                    <div className="col-md-9">
                        <h2>{text("header", "Hello, World!")}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "20%" }}>h3</p>
                    </div>
                    <div className="col-md-9">
                        <h3>{text("header", "Hello, World!")}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "10%" }}>h4</p>
                    </div>
                    <div className="col-md-9">
                        <h4>{text("header", "Hello, World!")}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "10%" }}>h5</p>
                    </div>
                    <div className="col-md-9">
                        <h5>{text("header", "Hello, World!")}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "5%" }}>h6</p>
                    </div>
                    <div className="col-md-9">
                        <h6>{text("header", "Hello, World!")}</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <h1>Titles</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "25%" }}>h1</p>
                    </div>
                    <div className="col-md-9">
                        <h1 className="title">
                            {text("title", "Hello, World!")}
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "25%" }}>h2</p>
                    </div>
                    <div className="col-md-9">
                        <h2 className="title">
                            {text("title", "Hello, World!")}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "20%" }}>h3</p>
                    </div>
                    <div className="col-md-9">
                        <h3 className="title">
                            {text("title", "Hello, World!")}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "10%" }}>h4</p>
                    </div>
                    <div className="col-md-9">
                        <h4 className="title">
                            {text("title", "Hello, World!")}
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "10%" }}>h5</p>
                    </div>
                    <div className="col-md-9">
                        <h5 className="title">
                            {text("title", "Hello, World!")}
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p style={{ marginTop: "5%" }}>h6</p>
                    </div>
                    <div className="col-md-9">
                        <h6 className="title">
                            {text("title", "Hello, World!")}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    ));
