import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import { updateValue } from '../../store/slices/windowworldSlice';
import { updateValue as updateDisposal } from '../../store/slices/calculateSlice';
import { numberWithCommas, dollarNumberWithCommas } from '../../utils/globals';

import './style.css';

const WindowWorldTable = (props) => {
  const storeData = useSelector((state) => state.windowworld.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const dispatch = useDispatch();
  let flag = useRef(false);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();

  useEffect(() => {
    if (flag.current === false) {
      input1.current.value = dollarNumberWithCommas(
        storeData['windowWorldInput17']
      );
      input2.current.value = dollarNumberWithCommas(
        storeData['windowWorldInput18']
      );
      input3.current.value = dollarNumberWithCommas(
        storeData['windowWorldInput19']
      );
      input4.current.value = dollarNumberWithCommas(
        storeData['windowWorldInput20']
      );
      input5.current.value = dollarNumberWithCommas(
        storeData['windowWorldInput21']
      );
    }
  }, [storeData]);

  const [windowTotal, setWindowTotal] = useState(0);
  const [tmpCount, setTmpCount] = useState(0);

  const cntWindow = useMemo(() => {
    return (
      Number(storeData['windowWorldInput22']) +
      Number(storeData['windowWorldInput23']) +
      Number(storeData['windowWorldInput24']) +
      Number(storeData['windowWorldInput25'])
    );
  }, [storeData]);

  useEffect(() => {
    dispatch(updateValue({ id: 'windowTotal', value: cntWindow + tmpCount }));
    setWindowTotal(cntWindow + tmpCount);
  }, [cntWindow, tmpCount]);

  const handleChange = (e, { id, formId }) => {
    if (Number(formId.substr(16, 2)) > 21) {
      dispatch(updateValue({ id: formId, value: e.target.value }));
      return;
    }

    let price = 0;
    let count = 0;

    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
      if (item.id < 17 && item.id !== 10 && item.id !== 11)
        count += Number(temp);
    });

    setWindowTotal(cntWindow + tmpCount);
    setTmpCount(count);

    if (
      Number(formId.substr(16, 2)) > 16 &&
      Number(formId.substr(16, 2)) < 22
    ) {
      dispatch(updateValue({ id: formId, value: Number(e.target.value) }));
    } else dispatch(updateValue({ id: formId, value: e.target.value }));

    props.updateWindowTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', value: value }));
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
        <strong>WINDOW WORLD</strong>
      </div>
      {props.data.map((item, index) => {
        if (index < 16)
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`windowWorldInput${index + 1}`}
                  className="bottom-outline width-80px medium-input"
                  type="number"
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
                      formId: `windowWorldInput${index + 1}`,
                    })
                  }
                  value={storeData[`windowWorldInput${index + 1}`]}
                  readOnly={viewMode !== 'homepage'}
                />
                <label htmlFor={`windowWorldInput${index + 1}`}>
                  {item.label}
                </label>
              </div>
              <div>
                <label>{`$${item.unitPrice}`}</label>
                <input
                  className="bottom-outline medium-input"
                  style={
                    viewMode === 'convert-pdf'
                      ? { width: '75px' }
                      : { width: '90px' }
                  }
                  type="text"
                  value={`$ ${numberWithCommas(
                    Number(storeData[`windowWorldInput${index + 1}`]) *
                      item.unitPrice
                  )}`}
                  readOnly
                />
              </div>
            </div>
          );
      })}

      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-80px medium-input"
            id="windowWorldInput22"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput22' })}
            value={storeData['windowWorldInput22']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Bay/Bow Window</label>
        </div>
        <div style={{ textAlign: 'right' }}>
          <label>$</label>
          <input
            className="bottom-outline width-80px medium-input"
            type="text"
            id="windowWorldInput17"
            style={
              viewMode === 'convert-pdf' ? { width: '75px' } : { width: '90px' }
            }
            onChange={(e) =>
              handleChange(e, {
                id: 17,
                formId: 'windowWorldInput17',
              })
            }
            ref={input1}
            onFocus={(e) => handleFocus(e, 'windowWorldInput17')}
            onBlur={(e) => handleBlur(e, 'windowWorldInput17')}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="flex-input" style={{ width: '82%' }}>
          <input
            type="number"
            className="bottom-outline width-80px medium-input"
            id="windowWorldInput23"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput23' })}
            value={storeData['windowWorldInput23']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline medium-input"
            style={{ width: '40%' }}
            id="windowWorldInput27"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput27' })}
            value={storeData['windowWorldInput27']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div
          style={
            viewMode === 'convert-pdf'
              ? { width: '23%', textAlign: 'right' }
              : {}
          }
        >
          <label>$</label>
          <input
            className="bottom-outline width-80px medium-input"
            type="text"
            id="windowWorldInput18"
            style={
              viewMode === 'convert-pdf' ? { width: '75px' } : { width: '90px' }
            }
            onChange={(e) =>
              handleChange(e, {
                id: 18,
                formId: 'windowWorldInput18',
              })
            }
            ref={input2}
            onFocus={(e) => handleFocus(e, 'windowWorldInput18')}
            onBlur={(e) => handleBlur(e, 'windowWorldInput18')}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="flex-input" style={{ width: '82%' }}>
          <input
            type="number"
            className="bottom-outline width-80px medium-input"
            id="windowWorldInput24"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput24' })}
            value={storeData['windowWorldInput24']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline medium-input"
            style={{ width: '40%' }}
            id="windowWorldInput28"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput28' })}
            value={storeData['windowWorldInput28']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div
          style={
            viewMode === 'convert-pdf'
              ? { width: '23%', textAlign: 'right' }
              : {}
          }
        >
          <label>$</label>
          <input
            className="bottom-outline width-80px medium-input"
            type="text"
            id="windowWorldInput19"
            style={
              viewMode === 'convert-pdf' ? { width: '75px' } : { width: '90px' }
            }
            onChange={(e) =>
              handleChange(e, {
                id: 19,
                formId: 'windowWorldInput19',
              })
            }
            ref={input3}
            onFocus={(e) => handleFocus(e, 'windowWorldInput19')}
            onBlur={(e) => handleBlur(e, 'windowWorldInput19')}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="flex-input" style={{ width: '82%' }}>
          <input
            type="number"
            className="bottom-outline width-80px medium-input"
            id="windowWorldInput25"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput25' })}
            value={storeData['windowWorldInput25']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline medium-input"
            style={{ width: '40%' }}
            id="windowWorldInput29"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput29' })}
            value={storeData['windowWorldInput29']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div
          style={
            viewMode === 'convert-pdf'
              ? { width: '23%', textAlign: 'right' }
              : {}
          }
        >
          <label>$</label>
          <input
            className="bottom-outline width-80px medium-input"
            type="text"
            id="windowWorldInput20"
            style={
              viewMode === 'convert-pdf' ? { width: '75px' } : { width: '90px' }
            }
            onChange={(e) =>
              handleChange(e, {
                id: 20,
                formId: 'windowWorldInput20',
              })
            }
            ref={input4}
            onFocus={(e) => handleFocus(e, 'windowWorldInput20')}
            onBlur={(e) => handleBlur(e, 'windowWorldInput20')}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-80px medium-input"
            id="windowWorldInput30"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput30' })}
            value={storeData['windowWorldInput30']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Install Labor</label>
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-80px medium-input"
            type="text"
            id="windowWorldInput21"
            style={
              viewMode === 'convert-pdf' ? { width: '75px' } : { width: '90px' }
            }
            onChange={(e) =>
              handleChange(e, {
                id: 21,
                formId: 'windowWorldInput21',
              })
            }
            ref={input5}
            onFocus={(e) => handleFocus(e, 'windowWorldInput21')}
            onBlur={(e) => handleBlur(e, 'windowWorldInput21')}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper" style={{ width: '80%' }}>
          <label>Window Color</label>
          <div className="input_label_compo pos_bottom">
            <input
              className="bottom-outline width-100 margin-2 medium-input inside"
              // defaultValue="WHITE"
              id="windowWorldInput31"
              onChange={(e) =>
                handleChange(e, { formId: 'windowWorldInput31' })
              }
              value={storeData['windowWorldInput31']}
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
              // defaultValue="WHITE"
              id="windowWorldInput32"
              onChange={(e) =>
                handleChange(e, { formId: 'windowWorldInput32' })
              }
              value={storeData['windowWorldInput32']}
              readOnly={viewMode !== 'homepage'}
            />
            <label htmlFor="windowWorldInput32" className="lbl">
              Outside
            </label>
          </div>
        </div>
        <div style={{ width: '20%' }}></div>
      </div>
      <div className="wrapper">
        <div>
          <p style={{ textAlign: 'center' }}>
            Window
            <br />
            Total
          </p>
          <input
            type="text"
            className="bottom-outline width-80px medium-input"
            value={storeData['windowTotal']}
            readOnly
          />
        </div>
        <div className="width-50">
          * Denotes triple pane, solarzone and foam enhanced frame included.
        </div>
        <div>
          <label>Initial: </label>
          <Signature
            width={95}
            height={28}
            signId="signature"
            updateSign={handleSign}
            imgInfo={storeData.signature.value}
            style={storeData.signature.style}
            signStatus={signStatus}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowWorldTable;
