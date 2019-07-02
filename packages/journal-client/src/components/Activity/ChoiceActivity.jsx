import React from 'react';

export default class ChoiceActivity extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeBound = this.handleChange.bind(this);
        this.input = React.createRef();
    }

    handleChange(event) {
        this.props.activity.setValue(this.input.current.value);
        this.props.submit(event);
    }

    render() {
        return (
            <fieldset>
                <label htmlFor={this.props.activity.getName()}>{ this.props.activity.getLabel() }</label>
                <select defaultValue={this.props.activity.getValue()} ref={this.input} onChange={this.handleChangeBound} name={this.props.activity.getName()} disabled={this.props.readonly}>
                    { this.props.activity.getChoices().map(choice => {
                        return <option key={choice} value={choice}>{ choice }</option>
                    }) }
                </select>
            </fieldset>
        );
    }
}
