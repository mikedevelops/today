import React from 'react';

/**
 * @param {string} value
 * @param {boolean} readonly
 * @param {function} submit
 */
export default ({ value, readonly, onBlur, onChange }) => {
    return (
        <textarea
            name="entry_content"
            defaultValue={value}
            className="entry-text-input"
            readOnly={readonly}
            onBlur={onBlur}
            onChange={onChange}
        />
    );
}
