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

import Radio from "../Radio.jsx";

let options = [
    {
        name: "radios",
        label: "Option 1",
        value: 1
    },
    {
        name: "radios",
        label: "Option 2",
        value: 2
    },
    {
        name: "radios",
        label: "Option 3",
        value: 3
    }
];

storiesOf("Forms", module)
    .addDecorator(withKnobs)
    .add("radios", () => (
        <div className="col-md-6">
            <h2>Radios</h2>
            {options.map((option, index) => {
                return (
                    <Radio
                        key={index}
                        name={text("name" + index, option.name)}
                        label={text("label" + index, option.label)}
                        value={text("value" + index, option.value)}
                        onChange={action("onChange")}
                    />
                );
            })}
        </div>
    ));

/*
class RadioStory extends Component {
    render() {
        return (
            <div>
                {options.map(option => {
                    return (
                        <Radio
                            name={option.name}
                            label={option.label}
                            value={option.value}
                        />
                    );
                })}
            </div>
        );
    }
}

export default RadioStory;
*/
