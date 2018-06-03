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

import TextInput from "../TextInput.jsx";

storiesOf("Forms", module)
    .addDecorator(withKnobs)
    .add("text input", () => (
        <div className="col-md-6">
            <h2>Text Input</h2>
            <TextInput
                label={text("label", "Name")}
                placeholder={text("placeholder", "Please Enter Your Name")}
                onChange={action("onChange")}
            />
        </div>
    ));
