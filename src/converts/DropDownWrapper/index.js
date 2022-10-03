import React from 'react';

import './style.css';

const DropDownWrapper = (props) => {
  return (
    <div className="DropDownWrapper" style={props.style}>
      {props.isInputEnable ? <>{props.children}</> : <>{props.value}</>}
    </div>
  );
};

export default DropDownWrapper;
