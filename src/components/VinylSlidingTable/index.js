import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/vinylslidingSlice';
import { numberWithCommas, dollarNumberWithCommas } from '../../utils/globals';

const VinylSlidingTable = (props) => {
  const storeData = useSelector((state) => state.vinylsliding.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  let flag = useRef(false);

  const input1 = useRef();

  useEffect(() => {
    if (flag.current === false) {
      input1.current.value = dollarNumberWithCommas(
        Number(storeData['vinylSlidingInput15'])
      );
    }
  }, [storeData]);

  const handleChange = (e, { id, formId }) => {
    if (Number(formId.substr(17, 2)) > 15) {
      dispatch(updateValue({ id: formId, count: e.target.value }));
      return;
    }

    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    if (formId === 'vinylSlidingInput15') {
      dispatch(updateValue({ id: formId, count: Number(e.target.value) }));
    } else dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateVinylTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleFocus = (e, id) => {
    e.target.type = 'number';
    e.target.value = storeData[id];
    flag.current = true;
  };

  const handleBlur = (e, id) => {
    e.target.type = 'text';
    e.target.value = dollarNumberWithCommas(Number(storeData[id]));
    flag.current = false;
  };

  return (
    <div className="table-bottom table-font">
      <div className="table-title-big">
        <strong>Vinyl Sliding Patio Doors</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          if (index < 14) {
            return (
              <div className="wrapper" key={index}>
                <div
                  className="flex-input"
                  style={index === 11 || index === 12 ? { width: '75%' } : {}}
                >
                  <input
                    id={`vinylSlidingInput${index + 1}`}
                    className="bottom-outline width-80px medium-input"
                    type="number"
                    onChange={(e) =>
                      handleChange(e, {
                        id: item.id,
                        formId: `vinylSlidingInput${index + 1}`,
                      })
                    }
                    value={storeData[`vinylSlidingInput${index + 1}`]}
                    readOnly={viewMode !== 'homepage'}
                  />
                  <label
                    style={
                      index === 12
                        ? { fontSize: '19px' }
                        : index === 4
                        ? { fontSize: '18px' }
                        : {}
                    }
                  >
                    {item.label}
                  </label>
                  {index === 11 && (
                    <input
                      type="text"
                      style={{ width: '30%' }}
                      className="bottom-outline medium-input"
                      id="vinylSlidingInput40"
                      onChange={(e) =>
                        handleChange(e, { formId: 'vinylSlidingInput40' })
                      }
                      value={storeData['vinylSlidingInput40']}
                      readOnly={viewMode !== 'homepage'}
                    />
                  )}
                </div>
                <div>
                  <label>{`$${item.unitPrice}`}</label>
                  <input
                    className="bottom-outline width-80px medium-input"
                    type="text"
                    style={
                      viewMode === 'convert-pdf'
                        ? { width: '75px' }
                        : { width: '90px' }
                    }
                    value={`$ ${numberWithCommas(
                      Number(storeData[`vinylSlidingInput${index + 1}`]) *
                        item.unitPrice
                    )}`}
                    readOnly
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className="wrapper" key={index}>
                <div>
                  <input
                    className="bottom-outline width-80px medium-input"
                    type="number"
                    id="vinylSlidingInput16"
                    onChange={(e) =>
                      handleChange(e, { formId: 'vinylSlidingInput16' })
                    }
                    value={storeData['vinylSlidingInput16']}
                    readOnly={viewMode !== 'homepage'}
                  />
                  <label>{item.label}</label>
                </div>
                <div>
                  <label>$</label>
                  <input
                    id="vinylSlidingInput15"
                    className="bottom-outline width-80px medium-input"
                    type="text"
                    style={
                      viewMode === 'convert-pdf'
                        ? { width: '75px' }
                        : { width: '90px' }
                    }
                    onChange={(e) =>
                      handleChange(e, {
                        id: 15,
                        formId: 'vinylSlidingInput15',
                      })
                    }
                    ref={input1}
                    onFocus={(e) => handleFocus(e, 'vinylSlidingInput15')}
                    onBlur={(e) => handleBlur(e, 'vinylSlidingInput15')}
                    // value={numberWithCommas(Number(storeData['vinylSlidingInput15']))}
                    readOnly={viewMode !== 'homepage'}
                  />
                </div>
              </div>
            );
          }
        })}
        <div className="wrapper">
          <div className="wrapper" style={{ width: '80%' }}>
            <label>Door Color</label>
            <div className="input_label_compo pos_bottom">
              <input
                className="bottom-outline width-100 margin-2 medium-input inside"
                id="vinylSlidingInput17"
                onChange={(e) =>
                  handleChange(e, { formId: 'vinylSlidingInput17' })
                }
                value={storeData['vinylSlidingInput17']}
                readOnly={viewMode !== 'homepage'}
              />
              <label htmlFor="windowWorldInput31" className="lbl">
                Inside
              </label>
            </div>
            <label>/</label>
            <div className="input_label_compo pos_bottom">
              <input
                className="bottom-outline width-100 margin-2 medium-input outside"
                id="vinylSlidingInput18"
                onChange={(e) =>
                  handleChange(e, { formId: 'vinylSlidingInput18' })
                }
                value={storeData['vinylSlidingInput18']}
                readOnly={viewMode !== 'homepage'}
              />
              <label htmlFor="windowWorldInput32" className="lbl">
                Outside
              </label>
            </div>
          </div>
          <div></div>
        </div>
        <div
          className="bottom-text"
          style={{ textAlign: 'center', fontStyle: 'italic' }}
        >
          All patio doors include SolarZone glass and standard foot lock
        </div>
      </div>
    </div>
  );
};

export default VinylSlidingTable;
