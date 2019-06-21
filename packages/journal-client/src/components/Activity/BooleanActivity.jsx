import React from 'react';

export default class BooleanActivity extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeBound = this.handleChange.bind(this);
        this.input = React.createRef();
        this.state = {
            value: props.activity.getValue(),
        };
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.setState({ value: nextProps.activity.getValue() });
    }

    handleChange(event) {
        // Prevent an input state change in readonly mode
        if (this.props.readonly) {
            event.preventDefault();
            return;
        }

        const value = !this.state.value;

        this.setState({ value });
        this.props.activity.setValue(value);
        this.props.submit(event);
    }

    render() {
        return (
            <fieldset>
                <label htmlFor={this.props.activity.getName()}>{ this.props.activity.getLabel() }</label>
                <input
                    readOnly={this.props.readonly}
                    ref={this.input}
                    id={this.props.activity.getName()}
                    onChange={this.handleChangeBound}
                    name={this.props.activity.getName()}
                    type="checkbox"
                    checked={this.state.value}/>
            </fieldset>
        );
    }
};
