export const SAVE_ENTRY = 'SAVE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';

/**
 * Save entry
 * @param {Entry} entry
 * @returns {{type: string, entry: Entry}}
 */
export const saveEntry = entry => ({
    type: SAVE_ENTRY,
    entry,
});

/**
 * Edit entry
 * @returns {{type: string}}
 */
export const editEntry = () => ({
    type: EDIT_ENTRY,
});
