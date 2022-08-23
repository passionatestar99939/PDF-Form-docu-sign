import React from 'react';

import './style.css';

const DropDownWrapper = (props) => {
  // console.log('???=>props', props);
  console.log('???=>children', props.children);
  return <div>{props.isInputEnable ? <>{props.children}</> : <div />}</div>;
};

export default DropDownWrapper;
