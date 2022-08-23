import React from 'react';

import Input from '../Input';
import Signature from '../Signature';

import './style.css';

const PaymentLink = () => {
  return (
    <div className="payment-box">
      <div className="margin-top-4">
        <div className="margin-top-4">
          <label>Deposit (ran at the time of order) $</label>
          <Input type={'number'} />
        </div>
        <div className="margin-top-4">
          <label>Balance (ran at the time of installation) $</label>
          <Input type={'number'} />
        </div>
      </div>
      <div className="margin-top-4">
        <div className="margin-top-4">
          <label>Cardholder Name:</label>
          <Input type={'text'} />
        </div>
        <div className="margin-top-4">
          <label>Credit Card: </label>
          <div className="wrapper-space-around">
            <div>
              <label htmlFor="visa">VISA</label>
              <input type="checkbox" id="visa" />
            </div>
            <div>
              <label htmlFor="mc">MC</label>
              <input type="checkbox" id="mc" />
            </div>
            <div>
              <label htmlFor="amex">AMEX</label>
              <input type="checkbox" id="amex" />
            </div>
            <div>
              <label htmlFor="disc">DISC</label>
              <input type="checkbox" id="disc" />
            </div>
          </div>
        </div>
        <div className="margin-top-4">
          <label>Card Number:</label>
          <Input type={'number'} />
        </div>
        <div className="margin-top-4">
          <label>EXP DATE:</label>
          <Input type={'number'} /> / <Input type={'number'} />
        </div>
        <div className="margin-top-4">
          <label>CVV Code:</label>
          <Input type={'text'} />
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
        <div className="margin-top-4">
          <label>Customer Signature: </label>
          <Signature width={200} height={50} />
        </div>
        <div className="margin-top-4">
          <label>Date: </label>
          <Input type={'text'} />
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
