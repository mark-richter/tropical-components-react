import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: ""
        };
    }

    static propTypes = {
        label: PropTypes.string.isRequired,
        children: PropTypes.node,
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
        const { label, children, onChange } = this.props;
        return (
            <div className={"form-group label-floating " + this.state.focus}>
                <label className="control-label">{label}</label>
                <select
                    className="form-control"
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    onChange={this.handleChange}
                >
                    {children}
                </select>
                <span className="material-input" />
            </div>
        );
    }
}

export default Select;
