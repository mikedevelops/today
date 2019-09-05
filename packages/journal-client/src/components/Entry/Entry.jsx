import React from 'react';
import TextArea from '../Form/Text';
import entryFactory from '../../factories/entryFactory';

export default class Entry extends React.Component {
    constructor(props) {
        super(props);

        this.ENTRY_CONTENT_ID = 'ENTRY_CONTENT_ID';

        this.form = React.createRef();
        this.submitBound = this.submit.bind(this);
    }

    submit(event = null) {
      if (event !== null) {
        event.preventDefault();
      }

      const data = new FormData(this.form.current);
      const entry = entryFactory(data.get(this.ENTRY_CONTENT_ID), new Date());

      this.props.submit(entry, this.props.token);
    }

    render() {
      const content = this.props.entry !== null ? this.props.entry.content : '';
      return (
        <div className="entry">
                <div className="entry-view">
                    <form ref={this.form}>
                        <TextArea
                            id={this.ENTRY_CONTENT_ID}
                            value={content}
                            onBlur={this.submitBound}
                            save={this.submitBound}
                        />
                    </form>
                </div>
            </div>
        )
    }
}
