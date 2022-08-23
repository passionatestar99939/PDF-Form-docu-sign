import React, { useState } from 'react';

import './style.css';

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* <div> */}
      {checked ? (
        <div
          className="ImageOfCheckBox Checked"
          onClick={() => setChecked(!checked)}
        >
          <img className="image" alt="checkbox" src="images/checked.gif" />
        </div>
      ) : (
        <div
          className="ImageOfCheckBox UnChecked"
          onClick={() => setChecked(!checked)}
        >
          {/* <img src="images/unchecked.png" /> */}
        </div>
      )}
    </div>
  );
};

export default CheckBox;