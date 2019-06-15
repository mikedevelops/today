import React from 'react';

/**
 * @param {string} value
 * @param {boolean} readonly
 * @param {function} submit
 */
export default class TextArea extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
        this.state = {
            value: props.value,
        };
    }

    componentWillReceiveProps (nextProps, nextContext) {
        this.setState(state => ({
            value: nextProps.value,
        }));
    }

    handleChange() {
        this.setState(state => ({
            value: this.input.current.value,
        }));
    }

    render() {
        return (
            <textarea
                ref={this.input}
                name="entry_content"
                value={this.state.value}
                className="entry-text-input"
                readOnly={this.props.readonly}
                onBlur={this.props.save}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}
