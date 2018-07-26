import React, { Component } from "react";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/lib/Creatable";

class CreatableSingleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    static propTypes = {
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => {}
    };

    componentWillMount() {
        this.props.options.forEach(option => {
            if (option.text) {
                option.label = option.text;
                delete option.text;
            }
        });
    }

    handleChange(e) {
        if (e) {
            //console.log(e);
            this.setState(
                {
                    value: e.value
                },
                this.props.onChange.bind(null, e.value)
            );
        } else {
            this.setState(
                {
                    value: undefined
                },
                this.props.onChange.bind(null, undefined)
            );
        }
        //console.log("Changed");
    }

    handleInputChange = (inputValue, actionMeta) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    render() {
        return (
            <CreatableSelect
                isClearable
                onChange={this.handleChange.bind(this)}
                //onInputChange={this.handleInputChange}
                defaultValue={
                    this.props.options[
                        this.props.options.findIndex(
                            i => i.value === this.state.value
                        )
                    ]
                }
                options={this.props.options}
            />
        );
    }
}

export default CreatableSingleSelect;
