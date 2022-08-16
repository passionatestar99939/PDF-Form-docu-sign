import React from 'react';
import Input from '../Input';
import Table4OfPage3 from '../Table4OfPage3';

import './style.css';

const MiddleRightOfPage3 = ({ children }) => {
  return (
    <div>
      <Table4OfPage3 />
      <Input class="width-100" value={'Nick Tisdale      (502) 310-9454'} />
    </div>
  );
};

export default MiddleRightOfPage3;
