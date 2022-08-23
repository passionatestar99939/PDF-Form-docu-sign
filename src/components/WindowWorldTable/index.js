import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import { updateValue } from '../../store/slices/windowworldSlice';

import './style.css';

const WindowWorldTable = (props) => {
  const storeData = useSelector((state) => state.windowworld.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const [windowTotal, setWindowTotal] = useState(0);
  const [tmpCount, setTmpCount] = useState(0);
  // const [cntWindow, setCntWindow] = useState(0);

  const cntWindow = useMemo(() => {
    return Number(storeData['windowWorldInput22']) + Number(storeData['windowWorldInput23']) + Number(storeData['windowWorldInput24']) + Number(storeData['windowWorldInput25']);
  }, [storeData]);

  useEffect(() => {
    dispatch(updateValue({ id: 'windowTotal', value: cntWindow + tmpCount }))
    setWindowTotal(cntWindow + tmpCount);
  }, [cntWindow, tmpCount])

  const handleChange = (e, { id, formId }) => {
    if (Number(formId.substr(16, 2)) > 21) {
      console.log({ id: formId, value: e.target.value })
      dispatch(updateValue({ id: formId, value: e.target.value }));
      if (Number(formId.substr(16, 2)) >= 22 && Number(formId.substr(16, 2)) <= 25) {
        // console.log({ tmpCount, cntWindow });
        console.log(storeData.windowWorldInput22);
        // setCntWindow(Number(storeData['windowWorldInput22']) + Number(storeData['windowWorldInput23']) + Number(storeData['windowWorldInput24']) + Number(storeData['windowWorldInput25']));
        console.log({ tmpCount, cntWindow });
        // dispatch(updateValue({ id: 'windowTotal', value: cntWindow + tmpCount }))
        // setWindowTotal(cntWindow + tmpCount);
      }
      
      return;
    }

    let price = 0;
    let count = 0;

    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
      count += item.id < 17 ? Number(temp) : 0;
    });

    setWindowTotal(cntWindow + tmpCount);
    setTmpCount(count);

    dispatch(updateValue({ id: formId, value: e.target.value }));
    // dispatch(updateValue({ id: 'windowTotal', value: count }));

    props.updateWindowTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleSign = (value) => {
    dispatch(updateValue({ id: 'signature', count: value }));
  };

  return (
    <div className="table-bottom small-letter">
      <div className="table-title">
        <strong>WINDOW WORLD</strong>
      </div>
      {props.data.map((item, index) => {
        if (index < 16)
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`windowWorldInput${index + 1}`}
                  className="bottom-outline width-50px small-input"
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
                <label>{item.label}</label>
              </div>
              <div>
                <label>{`$${item.unitPrice}`}</label>
                <input
                  className="bottom-outline width-50px small-input"
                  type="text"
                  value={
                    Number(storeData[`windowWorldInput${index + 1}`]) *
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
            type="number"
            className="bottom-outline width-50px small-input"
            id="windowWorldInput22"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput22' })}
            value={storeData['windowWorldInput22']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Bay/Bow Window</label>
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px small-input"
            type="number"
            id="windowWorldInput17"
            onChange={(e) =>
              handleChange(e, {
                id: 17,
                formId: 'windowWorldInput17',
              })
            }
            value={storeData['windowWorldInput17']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px small-input"
            id="windowWorldInput23"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput23' })}
            value={storeData['windowWorldInput23']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline small-input"
            style={{ width: "410px" }}
            id="windowWorldInput27"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput27' })}
            value={storeData['windowWorldInput27']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px small-input"
            type="number"
            id="windowWorldInput18"
            onChange={(e) =>
              handleChange(e, {
                id: 18,
                formId: 'windowWorldInput18',
              })
            }
            value={storeData['windowWorldInput18']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px small-input"
            id="windowWorldInput24"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput24' })}
            value={storeData['windowWorldInput24']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline small-input"
            style={{ width: "410px" }}
            id="windowWorldInput28"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput28' })}
            value={storeData['windowWorldInput28']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px small-input"
            type="number"
            id="windowWorldInput19"
            onChange={(e) =>
              handleChange(e, {
                id: 19,
                formId: 'windowWorldInput19',
              })
            }
            value={storeData['windowWorldInput19']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px small-input"
            id="windowWorldInput25"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput25' })}
            value={storeData['windowWorldInput25']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline small-input"
            style={{ width: "410px" }}
            id="windowWorldInput29"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput29' })}
            value={storeData['windowWorldInput29']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px small-input"
            type="number"
            id="windowWorldInput20"
            onChange={(e) =>
              handleChange(e, {
                id: 20,
                formId: 'windowWorldInput20',
              })
            }
            value={storeData['windowWorldInput20']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px small-input"
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
            className="bottom-outline width-50px small-input"
            type="number"
            id="windowWorldInput21"
            onChange={(e) =>
              handleChange(e, {
                id: 21,
                formId: 'windowWorldInput21',
              })
            }
            value={storeData['windowWorldInput21']}
            readOnly={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="wrapper">
        <label>Window Color</label>
        <input
          className="bottom-outline width-38 margin-2 small-input"
          defaultValue="WHITE"
          id="windowWorldInput31"
          onChange={(e) => handleChange(e, { formId: 'windowWorldInput31' })}
          value={storeData['windowWorldInput31']}
          readOnly={viewMode !== 'homepage'}
        />
        <label>/</label>
        <input
          className="bottom-outline width-38 margin-2 small-input"
          defaultValue="WHITE"
          id="windowWorldInput32"
          onChange={(e) => handleChange(e, { formId: 'windowWorldInput32' })}
          value={storeData['windowWorldInput32']}
          readOnly={viewMode !== 'homepage'}
        />
      </div>
      <div className="wrapper">
        <div>
          <p>Window Total</p>
          <input
            type="text"
            className="bottom-outline width-50px small-input"
            value={storeData['windowTotal']}
            readOnly
          />
        </div>
        <div className="width-40">
          * Denotes triple pane, solarzone and foam enhanced frame included.
        </div>
        <div>
          <label>Initial: </label>
          <Signature
            width={95}
            height={28}
            signId="signature"
            updateSign={handleSign}
            setVal={storeData['signature']}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default WindowWorldTable;
