import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import Input from '../Input';
import { updateValue } from '../../store/slices/salesmanSlice';

import './style.css';

const SalesmanOwner = () => {
  const storeData = useSelector((state) => state.salesman.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const [inputVal, setInputVal] = useState(storeData);

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div>
      <div>
        <div className="notice-box notice-owner">
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
        <div className="notice-box text-align-center bottom-box">
          <strong>
            You the buyer may cancel this transaction at any time prior to
            midnight of the third business day after the date of this
            transaction. Notice of cancellation must be in writing postmarked no
            later than midnight of the following third business day.
            <p style={{ letterSpacing: '0px' }}>
              THIS IS A CUSTOM ORDER NOT FOR RESALE!
            </p>
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
            <Signature
              width={333}
              height={37}
              signId="signature"
              updateSign={handleSign}
              setVal={storeData['signature']}
              viewMode={viewMode}
            />
          </div>
          <div className="input-field">
            <label>Date</label>
            <Input
              addClass="width-60"
              type={'text'}
              inputId="date1"
              updateData={handleChange}
              inputVal={storeData['date1']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div>
          <div className="wrapper-space-around">
            <div className="input-field" style={{ width: '70%' }}>
              <label>Salesman</label>
              <Input
                addClass="width-86"
                type={'text'}
                inputId="salesman"
                updateData={handleChange}
                inputVal={storeData['salesman']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="input-field" style={{ width: '30%' }}>
              <label>Date</label>
              <Input
                addClass="width-80"
                type={'text'}
                inputId="date2"
                updateData={handleChange}
                inputVal={storeData['date2']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
          </div>
          <div className="wrapper-space-around">
            <div className="input-field" style={{ width: '70%' }}>
              <label>Owner</label>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="owner"
                updateData={handleChange}
                inputVal={storeData['owner']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div className="input-field" style={{ width: '30%' }}>
              <label>Date</label>
              <Input
                addClass="width-80"
                type={'text'}
                inputId="date3"
                updateData={handleChange}
                inputVal={storeData['date3']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
          </div>
        </div>
        <div className="wrapper-right">
          <div className="input-field email-form">
            <label>Email</label>
            <Input
              addClass="width-90"
              type={'text'}
              inputId="email"
              updateData={handleChange}
              inputVal={storeData['email']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesmanOwner;
