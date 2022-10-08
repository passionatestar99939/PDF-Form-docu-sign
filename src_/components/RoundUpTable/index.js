import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/roundupSlice';
import { numberWithCommas, dollarNumberWithCommas } from '../../utils/globals';

import './style.css';

const RoundUpTable = (props) => {
  const storeData = useSelector((state) => state.roundup.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();
  
  let flag = useRef(false);

  const input3 = useRef();
  const input4 = useRef();

  useEffect(() => {
    if (flag.current === false) {  
      input3.current.value = dollarNumberWithCommas(storeData['roundupInput3']);
      input4.current.value = dollarNumberWithCommas(storeData['roundupInput4']);
    }
  }, [storeData]);
  
  const handleChange = (e, { id, formId }) => {
    let price = 0;

    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    dispatch(updateValue({ id: formId, count: Number(e.target.value) }));

    props.updateRoundUpTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleEntity = (e, { formId }) => {
    dispatch(updateValue({ id: formId, count: e.target.value }));
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
    <div className="roundup table-padding">
      <div>
        <img src="/images/emjoi.png" alt="emjoi" />
      </div>

      <div className="roundup-flex table-font">
        <div className="table-title-big">
          <strong>ROUND UP FOR WINDOW WORLD CARES</strong>
        </div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`roundupInput${index + 1}`}
                  type="number"
                  className="bottom-outline width-80px roundup-input medium-input"
                  onChange={(e) =>
                    handleEntity(e, {
                      formId: `roundupInput${index + 1}`,
                    })
                  }
                  value={storeData[`roundupInput${index + 1}`]}
                  readOnly={viewMode !== 'homepage'}
                />
                <label>{item.label}</label>
              </div>
              <div>
                <label>{`$`}</label>
                <input
                  className="bottom-outline width-80px roundup-input medium-input"
                  type="text"
                  style={
                    viewMode === 'convert-pdf'
                      ? { width: '75px' }
                      : { width: '90px' }
                  }
                  id={`roundupInput${index + 3}`}
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
                      formId: `roundupInput${index + 3}`,
                    })
                  }
                  ref={index === 0 ? input3 : input4}
                  onFocus={(e) => handleFocus(e, `roundupInput${index + 3}`)}
                  onBlur={(e) => handleBlur(e, `roundupInput${index + 3}`)}
                  readOnly={viewMode !== 'homepage'}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoundUpTable;
