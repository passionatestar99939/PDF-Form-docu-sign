import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  customerAction,
  installAddrAction,
  phone1Action,
  phone2Action,
  billAddrAction,
} from '../../store/slices/contactSlice';

import Input from '../Input';

import './style.css';

const Contact = () => {
  const customerValue = useSelector((state) => state.contact.installAddr);
  const dispatch = useDispatch();

  return (
    <div className="s1">
      <div className="wrapper-space-between top-padding-4 ">
        <div className="width-70">
          <label>Customer: </label>
          <Input
            type={'text'}
            addClass={'width-86'}
            updateValue={(value) => dispatch(customerAction(value))}
          />
        </div>
        <div className="width-30">
          <label>Phone</label>
          <Input
            type={'text'}
            addClass={'width-80'}
            updateValue={(value) => dispatch(phone1Action(value))}
          />
        </div>
      </div>
      <div className="wrapper-space-between top-padding-4 ">
        <div className="width-70">
          <label>Install Address: </label>
          <Input
            type={'text'}
            addClass={'width-80'}
            updateValue={(value) => dispatch(installAddrAction(value))}
          />
        </div>
        <div className="width-30">
          <label>Phone</label>
          <Input
            type={'text'}
            addClass={'width-80'}
            updateValue={(value) => dispatch(phone2Action(value))}
          />
        </div>
      </div>
      <div className="wrapper-space-between top-padding-4 width-100">
        <label>Bill Address: </label>
        <Input
          type={'text'}
          addClass={'width-89'}
          updateValue={(value) => dispatch(billAddrAction(value))}
        />
      </div>
    </div>
  );
};

export default Contact;
