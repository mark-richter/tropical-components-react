import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme, withDocs } from "storybook-readme";
import {
    withKnobs,
    text,
    boolean,
    number,
    object,
    select
} from "@storybook/addon-knobs";

import Loading from "../Loading.jsx";
import ButtonReadme from "../Docs/Button.md";

storiesOf("Loading", module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme(ButtonReadme))
    .add("loading", () => (
        <div className="container">
            <Loading />
            &nbsp;
            <Loading color="white" />
            &nbsp;
            <Loading color="primary" />
            &nbsp;
            <Loading color="info" />
            &nbsp;
            <Loading color="success" />
            <br />
            <Loading text="Loading..." />
            &nbsp; &nbsp; &nbsp;
            <Loading color="white" text="Loading..." />
            &nbsp; &nbsp; &nbsp;
            <Loading color="primary" text="Loading..." />
            &nbsp; &nbsp; &nbsp;
            <Loading color="info" text="Loading..." />
            &nbsp; &nbsp; &nbsp;
            <Loading color="success" text="Loading..." />
            <br />
            <br />
            <div className="row">
                <div className="text-center">
                    <p>Inside a text-center div</p>
                    <Loading text="Fetching Clients..." />
                </div>
            </div>
        </div>
    ));
