export const SAVE_ENTRY = 'SAVE_ENTRY';

/**
 * Save entry
 * @param {Entry} entry
 * @returns {{ type: string, entry: Entry }}
 */
export const saveEntry = entry => ({
    type: SAVE_ENTRY,
    entry,
});
