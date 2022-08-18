import React from 'react';
import Signature from '../Signature';

import './style.css';

const SalesmanOwner = () => {
  return (
    <div>
      <div>
        <div className="notice-box">
          <strong>Notice to Owner:</strong> Do not sign this contract if blank.
          You are entitled to a copy of the contract at the time you sign. Owner
          agrees that failure to comply with the terms of this contract,
          including any addendums will entitle Window World to recover all
          incidental collection costs owed pursuant to this Contract including,
          but not limited to, reasonable attorney’s fees and court cost. The
          parties acknowledge that the terms and conditions set fourth in the
          Window installation Summary attached hereto as Addendum A is hereby
          incorporated in this Contract in its entirety. Warranty is not valid
          until Certificate of Completion is signed and balance paid in full.
        </div>
        <div className="notice-box text-align-center">
          <strong>
            You the buyer may cancel this transaction at any time prior to
            midnight of the third business day after the date of this
            transaction. Notice of cancellation must be in writing postmarked no
            later than midnight of the following third business day. THIS IS A
            CUSTOM ORDER NOT FOR RESALE!
          </strong>
        </div>
        <div className="alert-content">
          *Home Owner is responsible for getting/paying for all permits and
          historic approval. If job is stopped due failure to obtain these,
          homeowner is still responsible fr full balance.
        </div>
      </div>
      <div>
        <div className="wrapper-right">
          <div className="input-field">
            <label>Owner</label>
            <Signature width={333} height={37} />
          </div>
          <div className="input-field">
            <label>Date</label>
            <input type="text" className="bottom-outline width-100px" />
          </div>
        </div>
        <div className="wrapper-space-around">
          <div className="input-field">
            <label>Salesman</label>
            <input
              type="text"
              className="bottom-outline middle-input width-100px"
            />
          </div>
          <div className="input-field">
            <label>Date</label>
            <input type="text" className="bottom-outline width-100px" />
          </div>
          <div className="input-field">
            <label>Owner</label>
            <input type="text" className="bottom-outline width-100px" />
          </div>
          <div className="input-field">
            <label>Date</label>
            <input type="text" className="bottom-outline width-100px" />
          </div>
        </div>
        <div>
          <div className="input-field email-form">
            <label>Date</label>
            <input type="text" className="bottom-outline width-100px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesmanOwner;
