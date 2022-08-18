import React from 'react';

import './style.css';

const DropDown = (props, { children }) => {
  return <div>props.status ? {children} :'aaa';</div>;
};

export default DropDown;
