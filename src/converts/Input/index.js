import React from 'react';

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
    updateFocus,
    updateBlur,
    flag
  } = props;

  const handleChange = (e) => {
    updateData(e.target.value, { formId: inputId });
  };

  const hanldeFocus = (e) => {
    if (flag === 'true')
      updateFocus(e, inputId);
  };

  const handleBlur = (e) => {
    if (flag === 'true')
      updateBlur(e, inputId);
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
      onFocus={(e) => hanldeFocus(e)}
      onBlur={(e) => handleBlur(e)}
    />
  );
};

export default Input;
