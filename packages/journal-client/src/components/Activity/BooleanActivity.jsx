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

    handleChange() {
            const value = !this.state.value;

            this.setState({ value });
            this.props.activity.setValue(value);
            this.props.submit();
    }

    render() {
        return (
            <fieldset>
                <label htmlFor={this.props.activity.getName()}>{ this.props.activity.getLabel() }</label>
                <input
                    ref={this.input}
                    id={this.props.activity.getName()}
                    onChange={this.handleChangeBound}
                    name={this.props.activity.getName()}
                    type="checkbox"
                    defaultChecked={this.state.value}/>
            </fieldset>
        );
    }
};
