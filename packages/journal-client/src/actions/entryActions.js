import axios from 'axios';
import moment from 'moment';
import entryFactory from '../factories/entryFactory';
import entryTransformer from '../transformers/entryTransformer';

export const ENTRY_SAVE = 'ENTRY_SAVE';
export const ENTRY_SAVE_START = 'ENTRY_SAVE_START';
export const ENTRY_SAVE_SUCCESS = 'ENTRY_SAVE_SUCCESS';
export const ENTRY_SAVE_ERROR = 'ENTRY_SAVE_ERROR';
export const ENTRY_EDIT = 'ENTRY_EDIT';
export const CLEAR_ENTRIES = 'CLEAR_ENTRIES';
export const ENTRIES_GET_ALL_START = 'ENTRIES_GET_ALL_START';
export const ENTRIES_GET_ALL_SUCCESS = 'ENTRIES_GET_ALL_SUCCESS';
export const ENTRIES_GET_ALL_ERROR = 'ENTRIES_GET_ALL_ERROR';
export const ENTRY_TOGGLE_READONLY = 'ENTRY_TOGGLE_READONLY';
export const ENTRY_READONLY_RESET = 'ENTRY_READONLY_RESET';

/**
 * Start saving entry
 * @return {{type: string}}
 */
export const saveEntryStart = () => ({
  type: ENTRY_SAVE_START,
});

/**
 * Entry saved successfully
 * @param {Entry} entry
 * @return {{entry: *, type: string}}
 */
export const saveEntrySuccess = entry => ({
  type: ENTRY_SAVE_SUCCESS,
  entry,
});

/**
 * Error saving Entry
 * @param {string} error
 * @return {{type: string, error: *}}
 */
export const saveEntryError = error => ({
  type: ENTRY_SAVE_ERROR,
  error,
});

/**
 * Save entry
 * @param entry
 * @param {string} token
 * @returns {{type: string, entry: Entry}}
 */
export const saveEntry = (entry, token) => (dispatch) => {
  dispatch(saveEntryStart());

  const transformedEntry = entryTransformer(entry);
  const method = entry.id === null ? 'POST' : 'PATCH';
  let uri = 'http://localhost:8080/entries';

  if (entry.id !== null) {
    uri += `/${entry.id}`;
  }

  axios(uri, {
    method: method,
    data: transformedEntry,
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  }).then(({ data }) => {
    const newEntry = entryFactory(
      data.content,
      moment(data.createdAt),
      data.id,
    );

    dispatch(saveEntrySuccess(newEntry));
  }).catch((error) => {
    dispatch(saveEntryError(error));
  });
};

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
 * @param {Entry[]} entries
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
export const getEntries = token => (dispatch) => {
  dispatch(getAllEntriesStart);

  axios.get('http://localhost:8080/entries', {
    headers: { Authorization: `Bearer ${token}` },
    json: true,
  }).then(({ data }) => {
    const entries = data.map(entry => entryFactory(
      entry.content,
      moment(entry.createdAt),
      entry.id,
    ));

    dispatch(getAllEntriesSuccess(entries));
  }).catch((error) => {
    dispatch(getAllEntriesError(error));
  });
};

/**
 * Clear local entry state
 * @return {{type: *}}
 */
export const clearEntries = () => ({
  type: CLEAR_ENTRIES,
});

/**
 * Toggle Entry readonly mode
 * @return {{type: string}}
 */
export const toggleReadOnly = () => ({
  type: ENTRY_TOGGLE_READONLY,
});

/**
 * Reset readonly to true
 * @return {{type: *}}
 */
export const resetReadonly = () => ({
  type: ENTRY_READONLY_RESET,
});
