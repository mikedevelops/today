import React from 'react';
import moment from 'moment';
import createEntry from '../../factories/entryFactory';
import debounce from 'lodash.debounce';
import ActivitySelector from '../Activity/ActivitySelector';
import { mapOptionToActivity } from '../../transformers/activityTransformer';
import { Editor, EditorState } from 'draft-js';

export const NewEntryDraft = ({ entry, saveEntry, token }) => {
  const form = React.createRef();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const saveContent = () => {
    if (form.current === null) {
      return;
    }

    const data = new FormData(form.current);
    const newEntry = createEntry(
      data.get('entry_content'),
      entry !== null ? entry.createdAt : moment().startOf('day'),
      entry !== null ? entry.id : null,
      entry !== null ? entry.activities : [],
    );

    saveEntry(newEntry, token);
  };

  const saveActivities = (activities) => {
    if (form.current === null) {
      return;
    }

    const data = new FormData(form.current);
    const newEntry = createEntry(
      data.get('entry_content'),
      entry !== null ? entry.createdAt : moment().startOf('day'),
      entry !== null ? entry.id : null,
      entry !== null ? activities.map(mapOptionToActivity) : [],
    );

    saveEntry(newEntry, token);
  };

  const debounceSave = debounce(saveContent, 500);

  return (
    <form className="entry-view" ref={form} onSubmit={event => event.preventDefault()}>
      <fieldset>
        <legend>
          <h1 className="entry-view__date">{ moment().startOf('day').format('D MMMM YYYY') }</h1>
        </legend>

        <div className="entry-view__content">
          <Editor placeholder="What happened today?" editorState={editorState} onChange={setEditorState}/>
        </div>
        <ActivitySelector entry={entry || null} update={saveActivities}/>
      </fieldset>
    </form>
  )
};
