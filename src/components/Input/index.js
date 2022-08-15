import React, { useState } from 'react';

import './style.css';

const Input = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <>
      {/* <div>Input</div> */}
      <input
        class="bottom-outline"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default Input;
