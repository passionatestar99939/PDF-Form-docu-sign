import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "../Input";
import { updateValue } from "../../store/slices/contactSlice";
import { updateSalesInfo } from "../../store/slices/salesInfoSlice";

import "./style.css";

const Contact = ({ addStyle }) => {
  const storeData = useSelector((state) => state.contact.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
    if (formId === "customer") {
      dispatch(updateSalesInfo({ id: "customer", value: value }));
    }
  };

  return (
    <div className='s1'>
      <div className='wrapper-space-between input-line' style={addStyle}>
        <div className='width-70 flex-input'>
          <label className='table-font'>Customer: </label>
          <Input
            addClass='contact-input medium-input'
            type={"text"}
            inputId='customer'
            updateData={handleChange}
            inputVal={storeData["customer"]}
            readOnlyMode={viewMode !== "homepage"}
          />
        </div>
        <div className='width-30 flex-input'>
          <label className='table-font'>Phone(m)</label>
          <Input
            addClass='contact-input medium-input'
            type={"text"}
            inputId='phone1'
            updateData={handleChange}
            inputVal={storeData["phone1"]}
            readOnlyMode={viewMode !== "homepage"}
          />
        </div>
      </div>
      <div className='wrapper-space-between input-line' style={addStyle}>
        <div className='width-70 flex-input'>
          <label className='table-font'>Install Address: </label>
          <Input
            addClass='contact-input medium-input'
            type={"text"}
            inputId='installAddr'
            updateData={handleChange}
            inputVal={storeData["installAddr"]}
            readOnlyMode={viewMode !== "homepage"}
          />
        </div>
        <div className='width-30 flex-input'>
          <label className='table-font'>Phone(h)</label>
          <Input
            addClass='contact-input medium-input'
            type={"text"}
            inputId='phone2'
            updateData={handleChange}
            inputVal={storeData["phone2"]}
            readOnlyMode={viewMode !== "homepage"}
          />
        </div>
      </div>
      <div
        className='wrapper-space-between width-100 input-line'
        style={addStyle}
      >
        <label className='table-font'>Bill Address: </label>
        <Input
          addClass='contact-input medium-input'
          type={"text"}
          inputId='billAddr'
          updateData={handleChange}
          inputVal={storeData["billAddr"]}
          readOnlyMode={viewMode !== "homepage"}
        />
      </div>
    </div>
  );
};

export default Contact;
