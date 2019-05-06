export const ENTRY_SAVE = 'ENTRY_SAVE';
export const ENTRY_EDIT = 'ENTRY_EDIT';

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
