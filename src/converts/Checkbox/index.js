import React, { useState, useEffect } from 'react';

import './style.css';

const CheckBox = ({ checkVal, checkId, updateCheck, isInputEnable }) => {
  const [checked, setChecked] = useState(checkVal);

  useEffect(() => {
    setChecked(checkVal);
  }, [checkVal]);

  const handleClick = (val) => {
    setChecked(!val);
    updateCheck(!checked, { formId: checkId });
  };
  return (
    <div
      onClick={() => {
        return isInputEnable ? handleClick(checked) : null;
      }}
    >
      {checked ? (
        <div className="ImageOfCheckBox Checked">
          <img className="image" alt="checkbox" src="/images/checked.png" style={{ height: "24px" }} />
        </div>
      ) : (
        <div className="ImageOfCheckBox UnChecked"></div>
      )}
    </div>
  );
};

export default React.memo(CheckBox);
