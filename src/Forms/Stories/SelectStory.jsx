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

import Select from "../Select.jsx";

var selectOptions = [
    {
        key: "0",
        value: "",
        label: ""
    },
    {
        key: "1",
        value: "Test",
        label: "Label 1"
    },
    {
        key: "2",
        value: "Test",
        label: "Label 2"
    },
    {
        key: "3",
        value: "Test",
        label: "Label 3"
    }
];

storiesOf("Forms", module)
    .addDecorator(withKnobs)
    .add("select", () => (
        <div className="col-md-6">
            <Select
                label={text("label", "Select One")}
                onChange={action("onChange")}
            >
                {selectOptions.map(option => {
                    return (
                        <option key={option.key} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </Select>
        </div>
    ));
