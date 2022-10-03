import React, { useState, useEffect } from 'react';

import './style.css';

import { typeOfCheckBox } from '../../constants/variables';

const CheckBox = ({ checkVal, checkId, updateCheck, isInputEnable, type }) => {
  const [checked, setChecked] = useState(checkVal);

  const src =
    type === typeOfCheckBox.PatioDoorOrder
      ? '/images/checked-2.png'
      : '/images/checked.png';
  const style =
    type === typeOfCheckBox.PatioDoorOrder
      ? { width: '10px', height: '10px' }
      : { height: '24px' };

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
          <img className="image" alt="checkbox" src={src} style={style} />
        </div>
      ) : (
        <div className="ImageOfCheckBox UnChecked"></div>
      )}
    </div>
  );
};

export default React.memo(CheckBox);
