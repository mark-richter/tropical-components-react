import React, { Component } from "react";
import PropTypes from "prop-types";

class Radio extends Component {
    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => {}
    };

    handleChange = evt => {
        this.props.onChange(this.props.value, this.props.name, evt);
    };

    render() {
        const { label, ...other } = this.props;
        return (
            <div>
                <div class="radio">
                    <label>
                        <input {...other} type="radio" />
                        <span class="circle" />
                        <span class="check" />
                        {label}
                    </label>
                </div>
            </div>
        );
    }
}

export default Radio;
