import React from 'react';

export const EnhancedSelectedItem = ({ icon, name, click }) => {
  return (
    <button className="selected-item enhanced-button" onClick={click}>
      <span className="selected-item__icon enhanced-button__icon">{ icon }</span>
      <span className="selected-item__name">{ name }</span>
    </button>
  )
};
