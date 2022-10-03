import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Label from '../Label';
import Input from '../Input';
import { updateValue } from '../../store/slices/jobinfoSlice';
import { updateValue as updateColor } from '../../store/slices/windowworldSlice';

import './style.css';

const Information = ({ children }) => {
  const contactData = useSelector((state) => state.contact.data);
  const colorData = useSelector((state) => state.windowworld.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
    if (formId === 'insideColor' || formId === 'outsideColor')
      dispatch(updateColor({ id: formId, value: value }));
  };

  return (
    <>
      {children}
      <div className="information">
        <div className="flex-input information-input">
          <Label>Job Name</Label>
          <Input
            addClass="input-box contact-input"
            type={'text'}
            inputId="jobname"
            updateData={handleChange}
            inputVal={contactData['customer']}
            readOnlyMode={viewMode !== 'homepage'}
          />
          <Label>Phone#</Label>
          <Input
            addClass="input-box contact-input"
            type={'text'}
            inputId="phone"
            updateData={handleChange}
            inputVal={contactData['phone1']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="flex-input information-input">
          <Label>Address</Label>
          <Input
            addClass="input-box contact-input"
            type={'text'}
            inputId="address"
            updateData={handleChange}
            inputVal={contactData['installAddr']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div
          className="flex-input information-input"
          style={{ marginBottom: '5px' }}
        >
          <Label>Window Color: </Label>
          <Label>Inside:</Label>
          <Input
            addClass="input-box"
            type={'text'}
            inputId="insideColor"
            updateData={handleChange}
            inputVal={colorData['windowWorldInput31']}
            readOnlyMode={viewMode !== 'homepage'}
          />
          <Label>Outside:</Label>
          <Input
            addClass="input-box"
            type={'text'}
            inputId="outsideColor"
            updateData={handleChange}
            inputVal={colorData['windowWorldInput32']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
    </>
  );
};

export default Information;
