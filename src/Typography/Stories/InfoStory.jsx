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

storiesOf("Typography", module).add("info", () => (
    <div className="col-md-6">
        <h1>Typography</h1>
        <p>
            None of the following stories below are actual components. These
            styles should be offered to you through the importing of the
            tropical-components.scss into your sijl/app.
        </p>
        <p>
            All of these "Typography" stories are simply to offer some style
            docs
        </p>
    </div>
));
