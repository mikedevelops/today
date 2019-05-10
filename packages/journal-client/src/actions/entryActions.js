import axios from 'axios';

export const ENTRY_SAVE = 'ENTRY_SAVE';
export const ENTRY_EDIT = 'ENTRY_EDIT';
export const CLEAR_ENTRIES = 'CLEAR_ENTRIES';
export const ENTRIES_GET_ALL_START = 'ENTRIES_GET_ALL_START';
export const ENTRIES_GET_ALL_SUCCESS = 'ENTRIES_GET_ALL_SUCCESS';
export const ENTRIES_GET_ALL_ERROR = 'ENTRIES_GET_ALL_ERROR';

/**
 * Save entry
 * @param {Entry} entry
 * @returns {{type: string, entry: Entry}}
 */
export const saveEntry = entry => ({
    type: ENTRY_SAVE,
    entry,
});

/**
 * Edit entry
 * @returns {{type: string}}
 */
export const editEntry = () => ({
    type: ENTRY_EDIT,
});

/**
 * Get all entries
 * @return {{type: string}}
 */
export const getAllEntriesStart = () => ({
    type: ENTRIES_GET_ALL_START,
});

/**
 * Retrieved all entries
 * @param entries
 * @return {{entries: *, type: string}}
 */
export const getAllEntriesSuccess = entries => ({
    type: ENTRIES_GET_ALL_SUCCESS,
    entries,
});

/**
 * Error retrieving entries
 * @param error
 * @return {{type: string, error: *}}
 */
export const getAllEntriesError = error => ({
    type: ENTRIES_GET_ALL_ERROR,
    error,
});

/**
 * Get the current users entries
 * @return {Function}
 */
export const getEntries = token => dispatch => {
    dispatch(getAllEntriesStart);

    axios.get('http://localhost:8080/entries', {
        headers: { 'Authorization': `Bearer ${token}` },
        json: true,
    }).then(({ data }) => {
        dispatch(getAllEntriesSuccess(data));
    }).catch(error => {
        dispatch(getAllEntriesError(error));
    });
};

/**
 * Clear local entry state
 * @return {{type: *}}
 */
export const clearEntries = () => {
    return {
        type: CLEAR_ENTRIES,
    };
};
