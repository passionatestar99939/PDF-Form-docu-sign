import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import Input from '../Input';
import { updateValue } from '../../store/slices/salespersonSlice';
import { updateValue as updateSalesman } from '../../store/slices/salesmanSlice';

import './style.css';

const SalesPersonOwner = () => {
  const storeData = useSelector((state) => state.salesperson.data);
  const salesperson = useSelector((state) => state.salesman.data.salesman);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (formId === 'salesperson')
      dispatch(updateSalesman({ id: formId, value: value }));
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div className="salespersonandowner">
      <div className="salesperson">
        <div
          className="input-field input_label pos_bottom"
          style={{ width: '90%', height: '100%' }}
        >
          <Input
            addClass="width-100 margin-2 small-input"
            type={'text'}
            style={{ height: '60%', color: 'blue', fontSize: '30px' }}
            inputId="salesperson"
            updateData={handleChange}
            inputVal={salesperson}
            readOnlyMode={viewMode !== 'homepage'}
          />
          <label
            htmlFor="windowWorldInput31"
            className="lbl"
            style={{ textAlign: 'left' }}
          >
            Salesperson
          </label>
        </div>
      </div>
      <div>
        <Signature
          width={396}
          height={52}
          signId="signature"
          updateSign={handleSign}
          imgInfo={storeData.signature.value}
          style={storeData.signature.style}
          signStatus={signStatus}
          viewMode={viewMode}
        />
        <div>Home Owner</div>
      </div>
    </div>
  );
};

export default SalesPersonOwner;
