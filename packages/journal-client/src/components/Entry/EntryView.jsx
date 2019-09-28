import React from 'react';

export const EntryView = ({ entry }) => {
  return (
    <div className="entry-view">
      <h2 className="entry-view__date">{ entry.createdAt.format() }</h2>
      <div className="entry-view__content">
        <p>{ entry.content }</p>
      </div>
    </div>
  )
};
