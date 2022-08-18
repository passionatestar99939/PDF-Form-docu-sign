import React from 'react';
import Input from '../Input';
import Table2OfPage3 from '../Table2OfPage3';
import Table3OfPage3 from '../Table3OfPage3';

import './style.css';

const MiddleLeftOfPage3 = ({ children }) => {
  return (
    <div>
      <Table2OfPage3 />
      <Table3OfPage3 />
      Qty: <Input addClass="width-10" /> Style:{' '}
      <Input addClass="width-10" value="RWD" /> <input type="checkbox" />
      Paint <input type="checkbox" />
      PVC
    </div>
  );
};

export default MiddleLeftOfPage3;
