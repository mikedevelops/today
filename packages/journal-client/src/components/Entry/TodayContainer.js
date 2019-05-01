import React from 'react';
import { connect } from 'react-redux';
import { saveEntry } from '../../actions/entryActions';
import { ComposeEntry } from './ComposeEntry';
import { Contents } from './Contents';
import entryFactory from '../../factories/entryFactory';

const mapStateToProps = ({ entry, date }) => {
    const today = date.today.unix();
    return {
        entry: entry.items[today],
        date: date.today,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (entry) => dispatch(saveEntry(entry)),
    };
};

class TodayWrapper extends React.Component {
    constructor (props) {
        super(props);

        this.todaysEntry = props.entry !== undefined ? props.entry : entryFactory(props.date);
        this.state = {
            content: this.todaysEntry.getContents()
        };
    }

    handleInput (content) {
        this.setState({ content });
    }

    render () {
        return (
            <div>
                <Contents content={this.state.content}/>
                <ComposeEntry entry={this.todaysEntry} submit={this.props.submit} handleInput={this.handleInput.bind(this)}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayWrapper);
