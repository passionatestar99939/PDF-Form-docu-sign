import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/miscellenousSlice';

const MiscellenousTable = (props) => {
  const storeData = useSelector((state) => state.miscellenous.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (e, { id, formId }) => {
    if (Number(formId.substr(17, 2)) > 19) {
      dispatch(updateValue({ id: formId, count: e.target.value }));
      return;
    }

    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateMiscellaneousTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom">
      <div className="table-title">
        <strong>MISCELLANEOUS</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          if (index < 15)
            return (
              <div className="wrapper" key={index}>
                <div>
                  <input
                    id={`miscellenousInput${index + 1}`}
                    type="number"
                    className="bottom-outline width-50px"
                    onChange={(e) =>
                      handleChange(e, {
                        id: item.id,
                        formId: `miscellenousInput${index + 1}`,
                      })
                    }
                    value={storeData[`miscellenousInput${index + 1}`]}
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
                      storeData[`miscellenousInput${index + 1}`] *
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
            <input
              className="bottom-outline width-50px"
              type="number"
              id="miscellenousInput20"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput20' })
              }
              value={storeData['miscellenousInput20']}
              readOnly={viewMode !== 'homepage'}
            />
            <label>Lift Rental $750 Daily</label>
          </div>
          <div>
            <label>$</label>
            <input
              id="miscellenousInput16"
              className="bottom-outline width-50px"
              type="number"
              onChange={(e) =>
                handleChange(e, {
                  id: 16,
                  formId: 'miscellenousInput16',
                })
              }
              value={storeData['miscellenousInput16']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div className="wrapper">
          <div className="flex-input">
            <input
              className="bottom-outline width-50px input-box"
              type="number"
              id="miscellenousInput21"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput21' })
              }
              value={storeData['miscellenousInput21']}
              readOnly={viewMode !== 'homepage'}
            />
            <label style={{ width: "90px" }}>Extra Labor</label>
            <input
              className="bottom-outline input-box"
              style={{ width: '410px' }}
              type="text"
              id="miscellenousInput22"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput22' })
              }
              value={storeData['miscellenousInput22']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id="miscellenousInput17"
              className="bottom-outline width-50px"
              type="number"
              onChange={(e) =>
                handleChange(e, {
                  id: 17,
                  formId: 'miscellenousInput17',
                })
              }
              value={storeData['miscellenousInput17']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <input
              className="bottom-outline width-50px"
              type="number"
              id="miscellenousInput23"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput23' })
              }
              value={storeData['miscellenousInput23']}
              readOnly={viewMode !== 'homepage'}
            />
            <input
              className="bottom-outline width-50px width-70"
              style={{ width: '500px' }}
              type="text"
              id="miscellenousInput24"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput24' })
              }
              value={storeData['miscellenousInput24']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id="miscellenousInput18"
              className="bottom-outline width-50px"
              type="number"
              onChange={(e) =>
                handleChange(e, {
                  id: 18,
                  formId: 'miscellenousInput18',
                })
              }
              value={storeData['miscellenousInput18']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <input
              className="bottom-outline width-50px"
              type="number"
              id="miscellenousInput25"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput25' })
              }
              value={storeData['miscellenousInput25']}
              readOnly={viewMode !== 'homepage'}
            />
            <input
              className="bottom-outline width-70"
              style={{ width: '500px' }}
              type="text"
              id="miscellenousInput26"
              onChange={(e) =>
                handleChange(e, { formId: 'miscellenousInput26' })
              }
              value={storeData['miscellenousInput26']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id="miscellenousInput19"
              className="bottom-outline width-50px"
              type="number"
              onChange={(e) =>
                handleChange(e, {
                  id: 19,
                  formId: 'miscellenousInput19',
                })
              }
              value={storeData['miscellenousInput19']}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellenousTable;
