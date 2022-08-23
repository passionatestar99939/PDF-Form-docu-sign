import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/roundupSlice';

import './style.css';

const RoundUpTable = (props) => {
  const storeData = useSelector((state) => state.roundup.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (e, { id, formId }) => {
    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateRoundUpTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="roundup">
      <div>
        <img src="/images/emjoi.png" alt="emjoi"/>
      </div>
      
      <div className="small-letter roundup-flex">
        <div className="table-title">
          <strong>ROUND UP FOR WINDOW WORLD CARES</strong>
        </div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`roundupInput${index + 1}`}
                  type="number"
                  className="bottom-outline width-50px roundup-input"
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
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
                  className="bottom-outline width-50px roundup-input"
                  type="number"
                  id={`roundupInput${index + 3}`}
                  onChange={(e) =>
                    handleChange(e, {
                      id: 19,
                      formId: `roundupInput${index + 3}`,
                    })
                  }
                  value={storeData[`roundupInput${index + 3}`]}
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
