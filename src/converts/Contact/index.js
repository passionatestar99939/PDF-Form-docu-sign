import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateValue } from '../../store/slices/contactSlice';

import './style.css';

const Contact = ({ addStyle }) => {
  const storeData = useSelector((state) => state.contact.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
  };

  return (
    <div className="s1">
      <div className="wrapper-space-between input-line" style={addStyle}>
        <div className="width-70 flex-input">
          <label>Customer: </label>
          <Input
            addClass="contact-input"
            type={'text'}
            inputId="customer"
            updateData={handleChange}
            inputVal={storeData['customer']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="width-30 flex-input">
          <label>Phone(m)</label>
          <Input
            addClass="contact-input"
            type={'text'}
            inputId="phone1"
            updateData={handleChange}
            inputVal={storeData['phone1']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper-space-between input-line" style={addStyle}>
        <div className="width-70 flex-input">
          <label>Install Address: </label>
          <Input
            addClass="contact-input"
            type={'text'}
            inputId="installAddr"
            updateData={handleChange}
            inputVal={storeData['installAddr']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="width-30 flex-input">
          <label>Phone(h)</label>
          <Input
            addClass="contact-input"
            type={'text'}
            inputId="phone2"
            updateData={handleChange}
            inputVal={storeData['phone2']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div
        className="wrapper-space-between width-100 input-line"
        style={addStyle}
      >
        <label>Bill Address: </label>
        <Input
          addClass="contact-input"
          type={'text'}
          inputId="billAddr"
          updateData={handleChange}
          inputVal={storeData['billAddr']}
          readOnlyMode={viewMode !== 'homepage'}
        />
      </div>
    </div>
  );
};

export default Contact;
