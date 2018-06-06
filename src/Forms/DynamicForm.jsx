import React, { Component } from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput.jsx";
import TextArea from "./TextArea.jsx";
import Select from "./Select.jsx";
import Radio from "./Radio.jsx";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.object,
    onChange: PropTypes.func
  };

  handleChange(e, field) {
    this.setState({ [field]: e.target.value });
    console.log(this.state);
  }

  handleSelectChange(value, name, event) {
    this.setState({ [name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        {this.props.fields.map((field, index) => {
          if (field.component == "TextInput") {
            return (
              <div key={index} className={field.props.gridSize}>
                <TextInput
                  label={field.props.label}
                  placeholder={field.props.placeholder}
                  value={this.state[field.field]}
                  type={field.props.type}
                  onChange={e => this.handleChange(e, field.field)}
                />
              </div>
            );
          }
          if (field.component == "TextArea") {
            return (
              <div key={index} className={field.props.gridSize}>
                <TextArea
                  label={field.props.label}
                  placeholder={field.props.placeholder}
                  rows={field.props.rows}
                  value={this.state[field.field]}
                  onChange={e => this.handleChange(e, field.field)}
                />
              </div>
            );
          }
          if (field.component == "Select") {
            return (
              <div key={index} className={field.gridSize}>
                <Select
                  label={field.label}
                  value={this.state[field.field]}
                  onChange={this.handleSelectChange}
                  name={field.field}
                >
                  {field.props.map(prop => {
                    return (
                      <option key={prop.value} value={prop.value}>
                        {prop.label}
                      </option>
                    );
                  })}
                </Select>
              </div>
            );
          }
          if (field.component == "Radio") {
            return (
              <div key={index} className={field.props.gridSize}>
                <Radio
                  name={field.props.name}
                  label={field.props.label}
                  value={field.props.value}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default DynamicForm;
