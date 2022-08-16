import React, { useState } from 'react';

import './style.css';

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  console.log('???=>', checked);
  return (
    <div>
      {/* <div> */}
      {checked ? (
        <div
          className="ImageOfCheckBox Checked"
          onClick={() => setChecked(!checked)}
        >
          <img src="images/checked.png" />
        </div>
      ) : (
        <div
          className="ImageOfCheckBox UnChecked"
          onClick={() => setChecked(!checked)}
        >
          <img src="images/unchecked.png" />
        </div>
      )}
    </div>
  );
};

export default CheckBox;
