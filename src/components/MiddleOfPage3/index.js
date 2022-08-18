import React from 'react';
import MiddleLeftOfPage3 from '../MiddleLeftOfPage3';
import MiddleRightOfPage3 from '../MiddleRightOfPage3';

import './style.css';

const MiddleOfPage3 = ({ children }) => {
  return (
    <div className="MiddleOfPage3">
      <MiddleLeftOfPage3 />
      <MiddleRightOfPage3 />
    </div>
  );
};

export default MiddleOfPage3;
