import React from 'react';
import Entry from './Entry';
import debounce from 'lodash.debounce';

/**
 * @param {Entry} entry
 * @param {Moment.moment} date
 * @param {Function} submit
 * @constructor
 */
export class ComposeEntry extends React.Component {
    constructor (props) {
        super(props);

        this.form = React.createRef();
        this.content = React.createRef();
    }

    shouldComponentUpdate () {
        // TODO: this may need looking at, prevent updating here to update store (autosave)
        // without triggering a re-render of this component
        return false;
    }

    submitEntry (event = null) {
        const data = new FormData(this.form.current);

        if (event !== null) {
            event.preventDefault();
        }

        this.props.entry.setContents(data.get('entry'));
        this.props.submit(this.props.entry);
    }

    autosave () {
        this.submitEntry();
    }

    handleInput () {
        // Pushing this onto the next stack to get the value of the input
        // _after_ the keydown
        window.requestAnimationFrame(() => {
            this.props.handleInput(this.content.current.value)
        });
    }

    render () {
        const compose = () => (
            <div className="compose">
                <form
                    ref={this.form}
                    onSubmit={this.submitEntry.bind(this)}
                    onKeyDown={debounce(this.autosave.bind(this), 1000)}>
                    <textarea
                        className="compose__entry-input"
                        ref={this.content}
                        onBlur={this.submitEntry.bind(this)}
                        onKeyDown={this.handleInput.bind(this)}
                        name="entry"
                        defaultValue={this.props.entry.getContents()}/>
                </form>
            </div>
        );

        return <Entry entry={this.props.entry} View={compose}/>
    };
}
