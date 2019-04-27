import moment from 'moment';

const defaultState = {
    today: moment().startOf('days'),
};

export default (state = defaultState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};
