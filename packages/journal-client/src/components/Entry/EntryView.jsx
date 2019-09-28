import React from 'react';
import ActivitySelector from '../Activity/ActivitySelector';
import { mapOptionToActivity } from '../../transformers/activityTransformer';

export const EntryView = ({ token, entry, saveActivities }) => {
  const update = (activities) => {
    saveActivities(entry, activities.map(mapOptionToActivity), token);
  };

  return (
    <div className="entry-view">
      <h2 className="entry-view__date">{ entry.createdAt.format() }</h2>
      <div className="entry-view__content">
        <p>{ entry.content }</p>
      </div>
      <ActivitySelector entry={entry} update={update}/>
    </div>
  )
};
