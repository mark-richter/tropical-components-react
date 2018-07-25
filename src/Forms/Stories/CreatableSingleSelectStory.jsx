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

//import DynamicFormReadme from "../Docs/DynamicForm.md";

import CreatableSingleSelect from "../CreatableSingleSelect";

const options = [
  { value: "ocean", text: "Ocean" },
  { value: "blue", text: "Blue" },
  { value: "purple", text: "Purple" },
  { value: "red", text: "Red" },
  { value: "orange", text: "Orange" },
  { value: "yellow", text: "Yellow" },
  { value: "green", text: "Green" },
  { value: "forest", text: "Forest" },
  { value: "slate", text: "Slate" },
  { value: "silver", text: "Silver" }
];

storiesOf("Forms", module)
  //.addDecorator(withReadme(DynamicFormReadme))
  .addDecorator(withKnobs)
  .add("creatable single select", () => (
    <div className="col-md-6">
      <CreatableSingleSelect options={options} />
    </div>
  ));
