import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import DropDownWrapper from '../DropDownWrapper';
import Signature from '../Signature';

import { updateValue } from '../../store/slices/creditSlice';

import './style.css';

let months = [];
let years = [];

for (let i = 0; i < 12; i++) {
  months.push(i + 1);
}

const currentYear = new Date().getFullYear();
for (let i = 0; i < 10; i++) {
  years.push(currentYear + i);
}

const CreditCardForm = () => {
  const storeData = useSelector((state) => state.credit.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div>
      <div className="cc_container">
        <div>
          <div className="cc_title">Credit Card Authorization Form</div>
          <div className="cc_flex_wrap">
            <div className="flex-50 cc_bar cc_left_align">
              <label htmlFor="cc_name">Name: </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_name"
                style={{ textAlign: 'left', width: '70%' }}
                updateData={handleChange}
                inputVal={storeData['cc_name']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="flex-50 cc_bar cc_right_align">
              <label htmlFor="cc_deposit">
                Deposit (ran at time of order) ${' '}
              </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_deposit"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_deposit']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="flex-50 d-flex cc_bar cc_left_align">
              <div className="cc_flex-50">
                <label htmlFor="cc_address">Address: </label>
                <Input
                  addClass="medium-input"
                  type={'text'}
                  inputId="cc_address"
                  style={{ textAlign: 'left', width: '70%' }}
                  updateData={handleChange}
                  inputVal={storeData['cc_address']}
                  readOnlyMode={viewMode !== 'homepage'}
                />
              </div>
              <div className="cc_flex-30">
                <label htmlFor="cc_zip">Zip: </label>
                <Input
                  addClass="medium-input"
                  type={'text'}
                  inputId="cc_zip"
                  style={{ textAlign: 'left', width: '50%' }}
                  updateData={handleChange}
                  inputVal={storeData['cc_zip']}
                  readOnlyMode={viewMode !== 'homepage'}
                />
              </div>
            </div>
            <div className="flex-50 cc_bar cc_right_align">
              <label htmlFor="cc_balance">
                Balance (ran at time of installation) ${' '}
              </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_balance"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_balance']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="flex-50 cc_bar cc_left_align">
              <label htmlFor="cc_phone">Phone #</label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_phone"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_phone']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="flex-50 cc_bar cc_right_align"></div>
          </div>
        </div>
        <div className="cc_bordered_container">
          <div>
            <div className="d-flex cc_bar">
              <label htmlFor="cc_cardholder_name">Cardholder Name: </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_cardholder_name"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_cardholder_name']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="d-flex cc_bar">
              <div>
                <label htmlFor="cc_credit_card">Credit Card: </label>
              </div>
              <div className="d-flex cc_credit_card">
                <div>
                  <label htmlFor="cc_visa">Visa</label>
                  <input
                    type="checkbox"
                    id="cc_visa"
                    onChange={(e) =>
                      handleChange(e.target.checked, { formId: 'cc_visa' })
                    }
                    checked={storeData['cc_visa']}
                  />
                </div>
                <div>
                  <label htmlFor="cc_mc">MC</label>
                  <input
                    type="checkbox"
                    id="cc_mc"
                    onChange={(e) =>
                      handleChange(e.target.checked, { formId: 'cc_mc' })
                    }
                    checked={storeData['cc_mc']}
                  />
                </div>
                <div>
                  <label htmlFor="cc_amex">AMEX</label>
                  <input
                    type="checkbox"
                    id="cc_amex"
                    onChange={(e) =>
                      handleChange(e.target.checked, { formId: 'cc_amex' })
                    }
                    checked={storeData['cc_amex']}
                  />
                </div>
                <div>
                  <label htmlFor="cc_dicover">Dicover</label>
                  <input
                    type="checkbox"
                    id="cc_dicover"
                    onChange={(e) =>
                      handleChange(e.target.checked, { formId: 'cc_dicover' })
                    }
                    checked={storeData['cc_dicover']}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex cc_bar">
              <label htmlFor="cc_card_number">Card Number: </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_card_number"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_card_number']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="d-flex cc_bar">
              <label>EXP DATE:</label>
              <DropDownWrapper
                style={{
                  display: 'inline-block',
                  width: '100px',
                  textAlign: 'right',
                }}
                isInputEnable={viewMode === 'homepage'}
                value={storeData['expDate']}
              >
                <select
                  className="date-select"
                  onChange={(e) => {
                    handleChange(e.target.value, { formId: 'expDate' });
                  }}
                >
                  <option value=" "> </option>
                  {months.map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={value === storeData['expDate']}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </DropDownWrapper>
              /
              <DropDownWrapper
                style={{
                  display: 'inline-block',
                  width: '100px',
                  textAlign: 'left',
                }}
                isInputEnable={viewMode === 'homepage'}
                value={storeData['expMonth']}
              >
                <select
                  className="date-select"
                  onChange={(e) => {
                    handleChange(e.target.value, { formId: 'expMonth' });
                  }}
                >
                  <option value=" "> </option>
                  {years.map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={value === storeData['expMonth']}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </DropDownWrapper>
            </div>
            <div className="d-flex cc_bar">
              <label htmlFor="cc_cvv_code">CVV Code: </label>
              <Input
                addClass="medium-input"
                type={'text'}
                inputId="cc_cvv_code"
                style={{ textAlign: 'left' }}
                updateData={handleChange}
                inputVal={storeData['cc_cvv_code']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="cc_content">
            I authorize the above card to be run for the amount as well as the
            balance. If for some unforseen reason the entire job doesn't get
            completed, I authorize the work that did get completed to be run
            that day. I will then pay the remainder, after the rest of the work
            is completed. This ensures that our installers get paid for the work
            they have gotten completed thus far.
          </div>
        </div>
        <div className="wrapper-center margin-top-4">
          <div className="div-center margin-top-4">
            <div>
              <label htmlFor="signature">Customer Signature: </label>
            </div>
            <Signature
              width={200}
              height={50}
              signId="signature"
              updateSign={handleSign}
              setVal={storeData['signature']}
              signStatus={signStatus}
              viewMode={viewMode}
            />
          </div>
          <div className="div-center margin-top-4">
            <label htmlFor="signDate">Date: </label>
            <Input
              addClass="medium-input"
              type={'text'}
              inputId="signDate"
              style={{ textAlign: 'left' }}
              updateData={handleChange}
              inputVal={storeData['signDate']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
