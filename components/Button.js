import React from 'react';
import './Button.scss';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <button className={`btn ${ this.props.color } ${ this.props.shape } ${ this.props.style }`}>{this.props.children}</button>
            </div>
        )
    };
}

export default Button;