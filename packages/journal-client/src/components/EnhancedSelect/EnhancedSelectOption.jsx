import React from 'react';

export const EnhancedSelectOption = ({ disabled, click, icon, label }) => {
  return (
    <button className="select-option enhanced-button" disabled={disabled} onClick={click}>
      <span className="selected-option__icon enhanced-button__icon">{ icon }</span>
      <span className="selected-option__name">{ label }</span>
    </button>
  );
};
