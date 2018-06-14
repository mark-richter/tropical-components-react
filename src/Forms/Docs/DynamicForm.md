# Usage

```js
import { DynamicForm } from "tropical-components-react/dist/tropical-components-react";
```

```js
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
                    text:
                        "We'd just like to know so we can get you in the right place.",
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
                    }
                },
                {
                    questionId: "userType",
                    question: "What type of user are you?",
                    text:
                        "We'd just like to know so we can get you in the right place.",
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
                    }
                }
            ]
        }
    ]
}

// You can see that the data nodes match the schema.questionSets.questions[x].questionId. This is required for data mapping
var data = {
    email: "test@gmail.com",
    password: "12345"
}

function submit(data) {
    // Log the data submitted from the form
    console.log(data);
}

<DynamicForm schema={schema} data={data} onSubmit={submit}>
```

### Props

| Prop     | Type   | Required |
| -------- | ------ | -------- |
| schema   | object | true     |
| data     | object | false    |
| onSubmit | method | true     |
