import React from 'react';

import './style.css';

const Input = (props) => {
  return (
    <>
      {/* <div>Input</div> */}
      <input
        class="bottom-outline"
        value={props.value}
        onChange={props.callback}
      />
    </>
  );
};

export default Input;
