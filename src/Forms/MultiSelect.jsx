import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

class MultiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value ? this.props.value : []
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
            var temp = [];
            e.forEach(value => {
                temp.push(value.value);
            });
            this.setState(
                {
                    value: temp
                },
                this.props.onChange.bind(null, temp)
            );
        } else {
            this.setState(
                {
                    value: []
                },
                this.props.onChange.bind(null, [])
            );
        }
        //console.log("Changed");
    }

    handleDefault() {
        var temp = [];
        if (this.state.value.length) {
            this.state.value.forEach(oneValue => {
                var index = this.props.options.findIndex(option => {
                    return option.value === oneValue;
                });
                if (index != -1) temp.push(index);
            });
        }
        if (temp.length) {
            var defaultValues = [];
            temp.forEach(index => {
                defaultValues.push(this.props.options[index]);
            });
        } else {
            var defaultValues = [];
        }
        return defaultValues;
    }

    handleInputChange = (inputValue, actionMeta) => {
        console.group("Input Changed");
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    render() {
        return (
            <Select
                isClearable
                isMulti
                onChange={this.handleChange.bind(this)}
                //onInputChange={this.handleInputChange}
                defaultValue={this.handleDefault()}
                options={this.props.options}
            />
        );
    }
}

export default MultiSelect;
