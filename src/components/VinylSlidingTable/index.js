import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/vinylslidingSlice';

const VinylSlidingTable = (props) => {
  const value = useSelector((state) => state.vinylsliding.data);
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
    <div className="table-bottom">
      <div>
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
                    className="bottom-outline width-50px"
                    type="number"
                    onChange={(e) =>
                      handleChange(e, {
                        id: item.id,
                        formId: `vinylSlidingInput${index + 1}`,
                      })
                    }
                  />
                  <label>{item.label}</label>
                </div>
                <div>
                  <label>{`$${item.unitPrice}`}</label>
                  <input
                    className="bottom-outline width-50px"
                    type="text"
                    value={
                      Number(value[`vinylSlidingInput${index + 1}`]) *
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
                    className="bottom-outline width-50px"
                    type="number"
                    id="vinylSlidingInput16"
                    onChange={(e) =>
                      handleChange(e, { formId: 'vinylSlidingInput16' })
                    }
                  />
                  <label>{item.label}</label>
                </div>
                <div>
                  <label>$</label>
                  <input
                    id="vinylSlidingInput15"
                    className="bottom-outline width-50px"
                    type="number"
                    onChange={(e) =>
                      handleChange(e, {
                        id: 15,
                        formId: 'vinylSlidingInput15',
                      })
                    }
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
            className="bottom-outline width-38"
            id="vinylSlidingInput17"
            onChange={(e) => handleChange(e, { formId: 'vinylSlidingInput17' })}
          />
          <label>/</label>
          <input
            type="text"
            className="bottom-outline width-38"
            id="vinylSlidingInput18"
            onChange={(e) => handleChange(e, { formId: 'vinylSlidingInput18' })}
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
