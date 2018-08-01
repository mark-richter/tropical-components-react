import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Loading.scss";

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string,
        color: PropTypes.oneOf(["primary", "info", "success", "white"])
    };

    static defaultProps = {
        onClick: () => {},
        children: "Loading...",
        text: ""
    };

    classNames() {
        let names = ["lds-ring"];

        switch (this.props.color) {
            case "primary":
                names.push("ld-primary");
                break;
            case "info":
                names.push("ld-info");
                break;
            case "success":
                names.push("ld-success");
                break;
            case "white":
                names.push("ld-white");
                break;
            default:
                break;
        }

        return names.join(" ");
    }

    render() {
        const { text } = this.props;
        return (
            <div className={this.classNames()}>
                <div />
                <div />
                <div />
                <div />
                <span className="loading-text">{text}</span>
            </div>
        );
    }
}

export default Loading;
