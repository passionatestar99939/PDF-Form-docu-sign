import React, { useState } from 'react';

import './style.css';

const Input = (props) => {
  const { value, addClass, type, style, updateValue } = props;
  const [data, setData] = useState(value);

  const handleChange = (e) => {
    // console.log(e.target.value);
    updateValue(e.target.value);
  };

  return (
    <>
      {props.isInputEnable ? (
        <input
          value={data}
          type={type}
          style={style}
          min={type === 'number' ? 0 : null}
          className={`bottom-outline ${addClass}`}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <div />
      )}
    </>
  );
};

export default Input;
