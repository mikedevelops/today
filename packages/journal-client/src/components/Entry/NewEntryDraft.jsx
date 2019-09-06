import React from 'react';
import moment from 'moment';
import createEntry from '../../factories/entryFactory';
import debounce from 'lodash.debounce';

export const NewEntryDraft = ({ entry, saveEntry, token }) => {
  const form = React.createRef();
  const save = () => {
    const data = new FormData(form.current);
    const newEntry = createEntry(
      data.get('entry_content'),
      entry !== null ? entry.createdAt : moment().startOf('day'),
      entry !== null ? entry.id : null
    );

    saveEntry(newEntry, token);
  };
  const debounceSave = debounce(save, 500);

  return (
    <form ref={form}>
      <fieldset>
        <legend><h1>{ moment().startOf('day').format() }</h1></legend>
        <label>What did you do today?</label>
        {entry !== null ?
          <textarea
            key="empty"
            name="entry_content"
            onChange={debounceSave}
            defaultValue={entry.content}
          /> :
          <textarea
            key="draft"
            name="entry_content"
            onChange={debounceSave}
            defaultValue=""
          />
        }
      </fieldset>
    </form>
  )
};
