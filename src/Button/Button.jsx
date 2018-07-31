import React, { Component } from "react";
import PropTypes from "prop-types";
import Ink from "react-ink";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.any,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "rose"
        ]),
        shape: PropTypes.oneOf(["round", "mini", "simple"]),
        size: PropTypes.oneOf(["xs", "sm", "lg"])
    };

    static defaultProps = {
        onClick: () => {},
        children: "BTN",
        color: undefined,
        shape: undefined,
        size: undefined
    };

    classNames() {
        let names = ["btn"];

        switch (this.props.color) {
            case "primary":
                names.push("btn-primary");
                break;
            case "info":
                names.push("btn-info");
                break;
            case "success":
                names.push("btn-success");
                break;
            case "warning":
                names.push("btn-warning");
                break;
            case "danger":
                names.push("btn-danger");
                break;
            case "rose":
                names.push("btn-rose");
                break;
            default:
                break;
        }

        switch (this.props.shape) {
            case "round":
                names.push("btn-round");
                break;
            case "mini":
                names.push("btn-fab btn-fab-mini btn-round");
                break;
            case "simple":
                names.push("btn-simple");
                break;
            default:
                break;
        }

        switch (this.props.size) {
            case "xs":
                names.push("btn-xs");
                break;
            case "sm":
                names.push("btn-sm");
                break;
            case "lg":
                names.push("btn-lg");
                break;
            default:
                break;
        }

        return names.join(" ");
    }

    render() {
        const { children, onClick } = this.props;
        return (
            <div
                className={this.classNames()}
                onClick={onClick}
                style={{ position: "relative" }}
            >
                {children}
                <Ink />
            </div>
        );
    }
}

export default Button;
