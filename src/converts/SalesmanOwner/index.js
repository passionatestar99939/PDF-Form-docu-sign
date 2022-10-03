import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import Input from '../Input';
import { updateValue } from '../../store/slices/salesmanSlice';
import { updateValue as updateCustomer} from '../../store/slices/contactSlice';

import './style.css';

const SalesmanOwner = () => {
  const storeData = useSelector((state) => state.salesman.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const customer = useSelector((state) => state.contact.data.customer);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const dispatch = useDispatch();

  const [inputVal, setInputVal] = useState(storeData);

  const handleChange = (value, { formId }) => {
    if (formId === 'owner')
      dispatch(updateCustomer({ id: 'customer', value: value }));
    else dispatch(updateValue({ id: formId, value: value }));
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
  };

  return (
    <div className="salesman-owner">
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
          homeowner is still responsible for full balance.
        </div>
      </div>
      <div>
        <div className="wrapper-right salesman-owner">
          <div className="input-field">
            <label>Owner</label>
            <Signature
              width={333}
              height={50}
              signId="signature"
              updateSign={handleSign}
              setVal={storeData['signature']}
              signStatus={signStatus}
              viewMode={viewMode}
            />
          </div>
        </div>
        <div className="wrapper-space-around">
          <div
            className="wrapper-space-around width-50"
            style={{ marginTop: '15px' }}
          >
            <div
              className="input-field input_label pos_bottom"
              style={{ width: '65%' }}
            >
              <Input
                addClass="width-100 margin-2 small-input"
                type={'text'}
                style={{ height: '60%', fontSize: '30px', textAlign: 'left' }}
                inputId="salesman"
                updateData={handleChange}
                inputVal={storeData['salesman']}
                readOnlyMode={viewMode !== 'homepage'}
                flag={false}
              />
              <label for="windowWorldInput31" className="lbl">
                Salesman
              </label>
            </div>
            <div
              className="input-field input_label pos_bottom"
              style={{ width: '30%' }}
            >
              <Input
                addClass="width-100 margin-2 small-input"
                type={'text'}
                style={{
                  height: '60%',
                  fontSize: viewMode === 'convert-pdf' ? '16px' : '30px',
                  textAlign: 'left',
                }}
                inputId="date2"
                updateData={handleChange}
                inputVal={storeData['date2']}
                readOnlyMode={viewMode !== 'homepage'}
                flag={false}
              />
              <label for="windowWorldInput31" className="lbl">
                Date
              </label>
            </div>
          </div>
          <div
            className="wrapper-space-around width-50"
            style={{ marginTop: '15px' }}
          >
            <div
              className="input-field input_label pos_bottom"
              style={{ width: '65%' }}
            >
              <Input
                addClass="width-100 margin-2 small-input"
                type={'text'}
                style={{
                  height: '60%',
                  fontSize: viewMode === 'convert-pdf' ? '16px' : '30px',
                  textAlign: 'left',
                }}
                inputId="owner"
                updateData={handleChange}
                inputVal={customer}
                readOnlyMode={viewMode !== 'homepage'}
                flag={false}
              />
              <label for="windowWorldInput31" className="lbl">
                Owner
              </label>
            </div>
            <div
              className="input-field input_label pos_bottom"
              style={{ width: '30%' }}
            >
              <Input
                addClass="width-100 margin-2 small-input"
                type={'text'}
                style={{
                  height: '60%',
                  fontSize: viewMode === 'convert-pdf' ? '16px' : '30px',
                  textAlign: 'left',
                }}
                inputId="date3"
                updateData={handleChange}
                inputVal={storeData['date3']}
                readOnlyMode={viewMode !== 'homepage'}
                flag={false}
              />
              <label for="windowWorldInput31" className="lbl">
                Date
              </label>
            </div>
          </div>
        </div>
        <div className="wrapper-right">
          <div className="input-field email-form" style={{ marginTop: '15px' }}>
            <label>Email</label>
            <Input
              type={'text'}
              style={{
                width: viewMode === 'convert-pdf' ? '88%' : '94%',
                height: '100%',
                fontSize: viewMode === 'convert-pdf' ? '16px' : '30px',
                textAlign: 'left',
                color: "blue"
              }}
              inputId="email"
              updateData={handleChange}
              inputVal={storeData['email']}
              readOnlyMode={viewMode !== 'homepage'}
              flag={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesmanOwner;
