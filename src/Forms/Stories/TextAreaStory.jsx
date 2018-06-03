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

import TextArea from "../TextArea.jsx";

storiesOf("Forms", module)
    .addDecorator(withKnobs)
    .add("text area", () => (
        <div className="col-md-6">
            <h2>Text Area</h2>
            <TextArea
                label={text("label", "Message")}
                placeholder={text("placeholder", "Please Enter A Message")}
                rows={text("rows", "5")}
                onChange={action("onChange")}
            />
        </div>
    ));
