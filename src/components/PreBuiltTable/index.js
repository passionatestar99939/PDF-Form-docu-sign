import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/prebuiltSlice';
import Signature from '../Signature';

const PreBuiltTable = (props) => {
  const storeData = useSelector((state) => state.prebuilt.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
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
    <div className="table-bottom">
      <div className="table-title">
        <strong>PRE 1978 BUILT HOMES (Federal Lead Containment Law)</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`prebuiltInput${index + 1}`}
                  type="number"
                  className="bottom-outline width-50px"
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
                  className="bottom-outline width-50px"
                  value={
                    Number(storeData[`prebuiltInput${index + 1}`]) *
                    item.unitPrice
                  }
                  readOnly
                />
              </div>
            </div>
          );
        })}
        <div className="wrapper">
          <div>
            <label>MY HOME WAS BUILT IN THE YEAR</label>
            <input
              className="bottom-outline width-50px"
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
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBuiltTable;
