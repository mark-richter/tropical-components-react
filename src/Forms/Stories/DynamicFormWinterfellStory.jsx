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

import DynamicFormWinterfell from "../DynamicFormWinterfell.jsx";

const data = {
  email: "test@gmail.com",
  password: "1234",
  existingUser: "yes"
};

const schema = {
  classes: {
    form: "tenant-properties-form",
    question: "form-group",
    input: "form-control",
    controlButton: "btn btn-primary pull-right",
    backButton: "btn btn-default pull-left",
    errorMessage: "alert alert-danger",
    buttonBar: "button-bar"
  },
  formPanels: [
    {
      index: 1,
      panelId: "tenant-properties-panel"
    }
  ],
  questionPanels: [
    {
      panelId: "tenant-properties-panel",
      panelHeader: "Tenant Properties",
      panelText: "Please enter tenant properties",
      action: {
        default: {
          action: "SUBMIT"
        }
      },
      button: {
        text: "Save"
      },
      questionSets: [
        {
          index: 1,
          questionSetId: "tenant-properties-set"
        }
      ]
    }
  ],
  questionSets: [
    {
      questionSetId: "tenant-properties-set",
      questions: [
        {
          questionId: "email",
          question: "Email Address",
          input: {
            type: "emailInput",
            placeholder: "Email Address"
            //default: data.email
          },
          validateOn: "blur",
          validations: [
            {
              type: "isEmail"
            }
          ]
        },
        {
          questionId: "password",
          question: "Password",
          input: {
            type: "passwordInput",
            placeholder: "Password"
          },
          validations: [
            {
              type: "isLength",
              params: [1]
            }
          ]
        },
        {
          questionId: "existingUser",
          question: "Are you an existing user?",
          text: "We'd just like to know so we can get you in the right place.",
          input: {
            type: "radioOptionsInput",
            //default: "yes",
            options: [
              {
                text: " Yes",
                value: "yes",
                conditionalQuestions: []
              },
              {
                text: " No",
                value: "no",
                conditionalQuestions: []
              }
            ]
          },
          validations: [
            {
              type: "isLength",
              params: [1]
            }
          ]
        },
        {
          questionId: "userType",
          question: "What type of user are you?",
          text: "We'd just like to know so we can get you in the right place.",
          input: {
            type: "selectInput",
            //default: "yes",
            options: [
              {
                text: "",
                value: "",
                conditionalQuestions: []
              },
              {
                text: "Client",
                value: "client",
                conditionalQuestions: []
              },
              {
                text: "Tenant",
                value: "tenant",
                conditionalQuestions: []
              }
            ]
          },
          validations: [
            {
              type: "isLength",
              params: [1]
            }
          ]
        }
      ]
    }
  ]
};

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .add("dynamic form winterfell", () => (
    <div className="col-md-6">
      <h2>Dynamic Form Winterfell</h2>
      <DynamicFormWinterfell schema={schema} data={data} />
    </div>
  ));
