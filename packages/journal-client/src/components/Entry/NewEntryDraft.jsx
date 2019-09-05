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
      entry.createdAt,
      entry.id
    );

    saveEntry(newEntry, token);
  };
  const debounceSave = debounce(save, 500);

  return (
    <form ref={form}>
      <fieldset>
        <legend>{ moment().startOf('day').format() }</legend>
        <label>What did you do today?</label>
        <textarea name="entry_content" onChange={debounceSave} defaultValue={entry.content}/>
      </fieldset>
    </form>
  )
};
