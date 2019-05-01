import React from 'react';
import entryFactory from '../../factories/entryFactory';
import Entry from './Entry';
import debounce from 'lodash.debounce';

/**
 * @param {Entry} entry
 * @param {Moment.moment} date
 * @param {Function} submit
 * @constructor
 */
export class Today extends React.Component {
    constructor (props) {
        super(props);

        this.todaysEntry = props.entry === undefined ?
            entryFactory(props.date) :
            props.entry;
        this.form = React.createRef();
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

        this.todaysEntry.setContents(data.get('entry'));
        this.props.submit(this.todaysEntry);
    }

    handleKeyDown () {
        this.submitEntry();
    }

    render () {
        const compose = () => (
            <form ref={this.form} onSubmit={this.submitEntry.bind(this)}>
                <textarea
                    onBlur={this.submitEntry.bind(this)}
                    onKeyDown={debounce(this.handleKeyDown.bind(this), 1000)}
                    name="entry"
                    defaultValue={this.todaysEntry.getContents()}/>
            </form>
        );

        return <Entry entry={this.todaysEntry} View={compose}/>
    };
}
