import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/vinylslidingSlice';

const VinylSlidingTable = (props) => {
  const storeData = useSelector((state) => state.vinylsliding.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

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

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateVinylTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom small-letter">
      <div className="table-title">
        <strong>Vinyl Sliding Patio Doors</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          if (index < 14) {
            return (
              <div className="wrapper" key={index}>
                <div>
                  <input
                    id={`vinylSlidingInput${index + 1}`}
                    className="bottom-outline width-50px small-input"
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
                  <label>{item.label}</label>
                  {index === 11 && (<input
                              type="text"
                              style={{ width: "350px" }}
                              className="bottom-outline small-input"
                              style={{width: "200px"}}
                              id="vinylSlidingInput40"
                              onChange={(e) => handleChange(e, { formId: 'vinylSlidingInput40' })}
                              value={storeData['vinylSlidingInput40']}
                              readOnly={viewMode !== 'homepage'}
                            />)}
                </div>
                <div>
                  <label>{`$${item.unitPrice}`}</label>
                  <input
                    className="bottom-outline width-50px small-input"
                    type="text"
                    value={
                      Number(storeData[`vinylSlidingInput${index + 1}`]) *
                      item.unitPrice
                    }
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
                    className="bottom-outline width-50px small-input"
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
                    className="bottom-outline width-50px small-input"
                    type="number"
                    onChange={(e) =>
                      handleChange(e, {
                        id: 15,
                        formId: 'vinylSlidingInput15',
                      })
                    }
                    value={storeData['vinylSlidingInput15']}
                    readOnly={viewMode !== 'homepage'}
                  />
                </div>
              </div>
            );
          }
        })}
        <div className="wrapper">
          <label>Door Color</label>
          <input
            type="text"
            className="bottom-outline width-38 small-input"
            id="vinylSlidingInput17"
            onChange={(e) => handleChange(e, { formId: 'vinylSlidingInput17' })}
            value={storeData['vinylSlidingInput17']}
            readOnly={viewMode !== 'homepage'}
          />
          <label>/</label>
          <input
            type="text"
            className="bottom-outline width-38 small-input"
            id="vinylSlidingInput18"
            onChange={(e) => handleChange(e, { formId: 'vinylSlidingInput18' })}
            value={storeData['vinylSlidingInput18']}
            readOnly={viewMode !== 'homepage'}
          />
          <p style={{ fontStyle: 'italic', margin: 'auto' }}>
            All patio doors include SolarZone glass and standard foot lock
          </p>
        </div>
      </div>
    </div>
  );
};

export default VinylSlidingTable;
