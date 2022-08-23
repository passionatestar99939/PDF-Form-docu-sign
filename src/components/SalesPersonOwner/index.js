import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import Input from '../Input';
import { updateValue } from '../../store/slices/salespersonSlice';

import './style.css';

const SalesPersonOwner = () => {
  const storeData = useSelector((state) => state.salesperson.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    console.log(value);
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div className="salespersonandowner">
      <div className="salesperson">
        <Input
          addClass="width-100"
          type={'text'}
          inputId="salesperson"
          updateData={handleChange}
          inputVal={storeData['salesperson']}
          readOnlyMode={viewMode !== 'homepage'}
        />
        <div>Salesperson</div>
      </div>
      <div>
        <Signature
          width={396}
          height={52}
          signId="signature"
          updateSign={handleSign}
          setVal={storeData['signature']}
          viewMode={viewMode}
        />
        <div>Home Owner</div>
      </div>
    </div>
  );
};

export default SalesPersonOwner;
