import React, { useState } from 'react';

import './style.css';

const Input = (props) => {
  const {
    defaultVal,
    inputVal,
    addClass,
    type,
    style,
    updateData,
    inputId,
    readOnlyMode,
  } = props;

  const handleChange = (e) => {
    console.log(inputId);
    updateData(e.target.value, { formId: inputId });
  };

  return (
    <input
      id={inputId}
      value={inputVal}
      type={type}
      style={style}
      min={type === 'number' ? 0 : null}
      className={`bottom-outline ${addClass}`}
      onChange={(e) => handleChange(e)}
      defaultValue={defaultVal}
      readOnly={readOnlyMode}
    />
  );
};

export default Input;
