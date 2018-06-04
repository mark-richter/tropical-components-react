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

import DynamicForm from "../DynamicForm.jsx";

const data = {
    JobName: "Emma Outbound 2",
    JobDescription: "Hello, World!",
    JobType: "2"
};

const fields = [
    {
        field: "JobName",
        component: "TextInput",
        props: {
            label: "Name",
            placeholder: "Enter a name",
            gridSize: "col-md-12",
            type: "text"
        }
    },
    {
        field: "JobDescription",
        component: "TextArea",
        props: {
            label: "Job Description",
            placeholder: "Enter a description",
            gridSize: "col-md-6",
            rows: "5"
        }
    },
    {
        field: "JobType",
        component: "Select",
        label: "Job Type",
        gridSize: "col-md-6",
        props: [
            {
                label: "",
                value: null
            },
            {
                label: "option 1",
                value: "1"
            },
            {
                label: "option 2",
                value: "2"
            }
        ]
    }
];

function handleChange(dynamicFields) {
    console.log(dynamicFields);
}

storiesOf("Forms", module)
    .addDecorator(withKnobs)
    .add("dynamic form", () => (
        <div className="col-md-6">
            <h2>Dynamic Form</h2>
            <DynamicForm fields={fields} data={data} onChange={handleChange} />
        </div>
    ));
