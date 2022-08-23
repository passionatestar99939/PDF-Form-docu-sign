import React from 'react';

import Signature from '../Signature';
import Input from '../Input';

import './style.css';

const SalesPersonOwner = () => {
  return (
    <div className="salespersonandowner">
      <div className="salesperson">
        <Input
          addClass="width-100"
          value={'Nick Tisdale      (502) 310-9454'}
        />
        <div>Salesperson</div>
      </div>
      <div>
        <Signature width={396} height={52} />
        <div>Home Owner</div>
      </div>
    </div>
  );
};

export default SalesPersonOwner;
