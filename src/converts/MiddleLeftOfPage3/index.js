import React from 'react';
import Table2OfPage3 from '../Table2OfPage3';
import Table3OfPage3 from '../Table3OfPage3';

import './style.css';

const MiddleLeftOfPage3 = ({ children }) => {
  return (
    <div className="MiddleLeftOfPage3">
      <Table2OfPage3 />
      <Table3OfPage3 />
    </div>
  );
};

export default MiddleLeftOfPage3;
