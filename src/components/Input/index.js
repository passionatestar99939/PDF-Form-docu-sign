import React, { useState } from 'react';

import './style.css';

const Input = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <>
      {/* <div>Input</div> */}
      <input
        class={`bottom-outline` + ` ${props.class}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={props.type}
        style={props.style}
      />
      {/* <input
        class="bottom-outline"
        value={props.info}
        onChange={props.callback}
      /> */}
    </>
  );
};

export default Input;
