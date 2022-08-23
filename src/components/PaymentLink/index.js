import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/creditSlice';
import Input from '../Input';
import Signature from '../Signature';

import './style.css';

const PaymentLink = () => {
  const storeData = useSelector((state) => state.credit.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div className="payment-box">
      <div className="margin-top-4">
        <div className="margin-top-4">
          <label>Deposit (ran at the time of order) $</label>
          <Input
            type={'number'}
            inputId="deposit"
            updateData={handleChange}
            inputVal={storeData['deposit']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="margin-top-4">
          <label>Balance (ran at the time of installation) $</label>
          <Input
            type={'number'}
            inputId="balance"
            updateData={handleChange}
            inputVal={storeData['balance']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="margin-top-4">
        <div className="margin-top-4">
          <label>Cardholder Name:</label>
          <Input
            type={'text'}
            inputId="cardholderName"
            updateData={handleChange}
            inputVal={storeData['cardholderName']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="margin-top-4">
          <label>Credit Card: </label>
          <div className="wrapper-space-around">
            <div>
              <label htmlFor="visa">VISA</label>
              <input
                type="checkbox"
                id="visa"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'visa' })
                }
                checked={storeData['visa']}
              />
            </div>
            <div>
              <label htmlFor="mc">MC</label>
              <input
                type="checkbox"
                id="mc"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'mc' })
                }
                checked={storeData['mc']}
              />
            </div>
            <div>
              <label htmlFor="amex">AMEX</label>
              <input
                type="checkbox"
                id="amex"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'amex' })
                }
                checked={storeData['amex']}
              />
            </div>
            <div>
              <label htmlFor="disc">DISC</label>
              <input
                type="checkbox"
                id="disc"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'disc' })
                }
                checked={storeData['disc']}
              />
            </div>
          </div>
        </div>
        <div className="margin-top-4">
          <label>Card Number:</label>
          <Input
            type={'text'}
            inputId="cardNumber"
            updateData={handleChange}
            inputVal={storeData['cardNumber']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="margin-top-4">
          <label>EXP DATE:</label>
          <Input
            type={'text'}
            inputId="expDate"
            updateData={handleChange}
            inputVal={storeData['expDate']}
            readOnlyMode={viewMode !== 'homepage'}
          />
          /
          <Input
            type={'text'}
            inputId="expMonth"
            updateData={handleChange}
            inputVal={storeData['expMonth']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
        <div className="margin-top-4">
          <label>CVV Code:</label>
          <Input
            type={'text'}
            inputId="cvvMode"
            updateData={handleChange}
            inputVal={storeData['cvvMode']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="margin-top-4">
        <p className="justify-content">
          I authorize the above card to be run for the amount as well as the
          balance. If for some unforseen reason the entire job doesn't get
          completed, I authorize the work that did get completed to be run that
          day. I will then pay the remainder, after the rest of the work is
          completed. This ensures that our installers get paid for the work they
          have gotten completed thus far.
        </p>
      </div>
      <div className="wrapper-center margin-top-4">
        <div className="div-center margin-top-4">
          <label>Customer Signature: </label>
          <Signature
            width={200}
            height={50}
            signId="signature"
            updateSign={handleSign}
            setVal={storeData['signature']}
            viewMode={viewMode}
          />
        </div>
        <div className="div-center margin-top-4">
          <label>Date: </label>
          <Input
            type={'text'}
            inputId="signDate"
            updateData={handleChange}
            inputVal={storeData['signDate']}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
