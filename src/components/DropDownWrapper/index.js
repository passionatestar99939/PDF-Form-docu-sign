import React from 'react';

import './style.css';

const DropDownWrapper = (props) => {
  return (
    <div>
      {props.isInputEnable ? <>{props.children}</> : <div>{props.value}</div>}
    </div>
  );
};

export default DropDownWrapper;
