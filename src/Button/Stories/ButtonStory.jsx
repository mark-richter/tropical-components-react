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

import Button from "../Button.jsx";
import ButtonReadme from "../Docs/Button.md";

storiesOf("Buttons", module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme(ButtonReadme))
    .add("button", () => (
        <div className="container">
            <Button
                onClick={action("Button Clicked!")}
                children={text("children", "Button")}
                size={select(
                    "size",
                    { undefined: "", xs: "xs", sm: "sm", lg: "lg" },
                    ""
                )}
                color={select(
                    "color",
                    {
                        undefined: "",
                        primary: "primary",
                        info: "info",
                        success: "success",
                        warning: "warning",
                        danger: "danger",
                        rose: "rose"
                    },
                    ""
                )}
                shape={select(
                    "shape",
                    {
                        undefined: "",
                        round: "round",
                        mini: "mini",
                        simple: "simple"
                    },
                    ""
                )}
            />
        </div>
    ));
