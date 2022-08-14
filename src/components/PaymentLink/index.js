import React from 'react';

const PaymentLink = () => {
  return (
    <div>
      <div>
        <div>Deposit (ran at the time of order)</div>
        <div>Balance (ran at the time of installation)</div>
      </div>
      <div>
        <div>Cardholder Name:</div>
        <div>Credit Card:</div>
        <div>Card Number:</div>
        <div>EXP DATE:</div>
        <div>CVV Code:</div>
      </div>
      <div>
        I authorize the above card to be run for the amount as well as the
        balance. If for some unforseen reason the entire job doesn't get
        completed, I authorize the work that did get completed to be run that
        day. I will then pay the remainder, after the rest of the work is
        completed. This ensures that our installers get paid for the work they
        have gotten completed thus far.
      </div>
      <div>
        <div>Customer Signature:</div>
        <div>Date</div>
      </div>
    </div>
  );
};

export default PaymentLink;
