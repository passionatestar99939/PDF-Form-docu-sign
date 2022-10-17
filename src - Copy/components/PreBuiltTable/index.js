import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/prebuiltSlice';
import { numberWithCommas } from '../../utils/globals';

import Signature from '../Signature';

const PreBuiltTable = (props) => {
  const storeData = useSelector((state) => state.prebuilt.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const dispatch = useDispatch();

  const handleChange = (e, { id, formId }) => {
    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updatePrebuiltTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', count: value }));
  };

  return (
    <div className="table-bottom table-font table-padding">
      <div className="table-title-big">
        <strong>PRE 1978 BUILT HOMES</strong>
        <span style={{ fontStyle: 'italic' }}>
          (Federal Lead Containment Law)
        </span>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`prebuiltInput${index + 1}`}
                  type="number"
                  className="bottom-outline width-80px medium-input"
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
                      formId: `prebuiltInput${index + 1}`,
                    })
                  }
                  value={storeData[`prebuiltInput${index + 1}`]}
                  readOnly={viewMode !== 'homepage'}
                />
                <label>{item.label}</label>
              </div>
              <div>
                <label>{`$${item.unitPrice}`}</label>
                <input
                  type="text"
                  style={
                    viewMode === 'convert-pdf'
                      ? { width: '75px' }
                      : { width: '90px' }
                  }
                  className="bottom-outline width-80px medium-input"
                  value={`$ ${numberWithCommas(
                    Number(storeData[`prebuiltInput${index + 1}`]) *
                      item.unitPrice
                  )}`}
                  readOnly
                />
              </div>
            </div>
          );
        })}
        <div className="wrapper home-year">
          <div>
            <label>MY HOME WAS BUILT IN THE YEAR</label>
            <input
              className="bottom-outline width-100px medium-input"
              id="prebuiltInput2"
              onChange={(e) => handleChange(e, { formId: 'prebuiltInput2' })}
              value={storeData['prebuiltInput2']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>Initial</label>
            <Signature
              width={54}
              height={19}
              signId="signature"
              updateSign={handleSign}
              setVal={storeData['signature']}
              signStatus={signStatus}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBuiltTable;
