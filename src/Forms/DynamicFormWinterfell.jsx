import React, { Component } from "react";
import PropTypes from "prop-types";
var Winterfell = require("winterfell");

class DynamicFormWinterfell extends Component {
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
    schema: PropTypes.object,
    data: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ questionAnswers: nextProps });
  }

  onRender() {
    console.log("Great news! Winterfell rendered successfully");
    //this.setState({ "[questionAnswers]": this.props.data });
  }

  onUpdate(questionAnswers) {
    console.log(
      "Question Updated! The current set of answers is: ",
      this.state.data
    );
    this.setState({ data: questionAnswers });
  }

  onSubmit(questionAnswers, target) {
    console.log("Form submitted!", questionAnswers);
    console.log("-----");
    console.log(
      "For this example, we disabled normal form submission functionality. "
    );
    console.log("-----");
    alert("Submitted. Check the console to see the answers!");
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

export default DynamicFormWinterfell;
