import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: ""
    };
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {},
    type: "text"
  };

  handleChange = evt => {
    this.props.onChange(this.props.value, this.props.name, evt);
  };

  onFocus() {
    this.setState({ focus: "is-focused" });
  }

  onBlur() {
    this.setState({ focus: "" });
  }

  render() {
    const { label, ...other } = this.props;
    return (
      <div className={"form-group label-floating " + this.state.focus}>
        <label className="control-label">{label}</label>
        <input
          className="form-control"
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          {...other}
        />
        <span className="material-input" />
      </div>
    );
  }
}

export default TextInput;
