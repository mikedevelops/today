import React from 'react';
import createEntry from '../../factories/entryFactory';
import moment from 'moment';

export const NewEntry = ({ saveEntry, token }) => {
  const form = React.createRef();
  const save = () => {
    const data = new FormData(form.current);
    const newEntry = createEntry(
      data.get('entry_content'),
      moment().startOf('day'),
    );

    saveEntry(newEntry, token);
  };

  return (
    <form ref={form}>
      <fieldset>
        <legend>{ moment().startOf('day').format() }</legend>
        <label>What did you do today?</label>
        <textarea name="entry_content" onChange={save}/>
      </fieldset>
    </form>
  )
};


