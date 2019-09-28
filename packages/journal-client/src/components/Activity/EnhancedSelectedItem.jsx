import React from 'react';

export const EnhancedSelectedItem = ({ icon, name, click }) => {
  return (
    <button className="selected-item" onClick={click}>
      <span className="selected-item__icon">{ icon }</span>
      <span className="selected-item__name">{ name }</span>
    </button>
  )
};
