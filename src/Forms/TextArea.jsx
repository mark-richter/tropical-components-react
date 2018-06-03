import React, { Component } from "react";
import PropTypes from "prop-types";

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: ""
        };
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        rows: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => {}
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
            <div class={"form-group label-floating " + this.state.focus}>
                <label class="control-label">{label}</label>
                <textarea
                    class="form-control"
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    {...other}
                />
                <span class="material-input" />
            </div>
        );
    }
}

export default TextArea;
