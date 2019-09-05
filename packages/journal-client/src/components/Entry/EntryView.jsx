import React from 'react';

export const EntryView = ({ entry }) => {
  return (
    <div className="entry-view">
      <h2>{ entry.createdAt.format() }</h2>
      <p>{ entry.content }</p>
    </div>
  )
};
