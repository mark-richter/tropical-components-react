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

import WelcomeReadme from "../Docs/Welcome.md";

storiesOf("Home", module)
    .addDecorator(withReadme(WelcomeReadme))
    .add("welcome", () => (
        <div>
            <p style={{ textAlign: "center" }}>
                <img
                    src="https://static.ssbintel.com/assets/portals/flinttropics/logo/flinttropics-logo.png"
                    width="150"
                />
            </p>
            <h1 style={{ textAlign: "center" }}>SSB - Tropical Components</h1>
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}>Lets Get Tropical!</h3>
        </div>
    ));
