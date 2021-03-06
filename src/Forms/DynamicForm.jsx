import React, { Component } from "react";
import PropTypes from "prop-types";
var Winterfell = require("winterfell");
import CreatableSingleSelect from "./CreatableSingleSelect.jsx";
import SingleSelect from "./SingleSelect.jsx";
import MultiSelect from "./MultiSelect.jsx";

//Winterfell.addInputType("creatableSingleSelect", CreatableSingleSelect);

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
        this.onRender = this.onRender.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        schema: PropTypes.object.isRequired,
        data: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    };

    static defaultProps = {
        data: {}
    };

    static addInputType(name, component) {
        Winterfell.addInputType(name, component);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ questionAnswers: nextProps });
    }

    onRender() {
        //console.log("Great news! Winterfell rendered successfully");
        //this.setState({ "[questionAnswers]": this.props.data });
    }

    onUpdate(questionAnswers) {
        // console.log(
        //     "Question Updated! The current set of answers is: ",
        //     this.state.data
        // );
        this.setState({ data: questionAnswers });
    }

    onSubmit(questionAnswers, target) {
        this.props.onSubmit(questionAnswers);
    }

    render() {
        return (
            <div className="row">
                <Winterfell
                    schema={this.props.schema}
                    disableSubmit={true}
                    onRender={this.onRender}
                    onUpdate={this.onUpdate}
                    onSubmit={this.onSubmit}
                    questionAnswers={this.state.data}
                />
            </div>
        );
    }
}

DynamicForm.addInputType("creatableSingleSelect", CreatableSingleSelect);
DynamicForm.addInputType("singleSelect", SingleSelect);
DynamicForm.addInputType("multiSelect", MultiSelect);

export default DynamicForm;
