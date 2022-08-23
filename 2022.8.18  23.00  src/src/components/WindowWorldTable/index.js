import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Signature from '../Signature';
import { updateValue } from '../../store/slices/windowworldSlice';

import './style.css';

const WindowWorldTable = (props) => {
  const [windowTotal, setWindowTotal] = useState(0);

  const value = useSelector((state) => state.windowworld.data);
  const dispatch = useDispatch();

  const handleChange = (e, { id, formId }) => {
    if (Number(formId.substr(16, 2)) > 21) {
      dispatch(updateValue({ id: formId, count: e.target.value }));
      return;
    }
    let price = 0;
    let count = 0;

    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
      count += item.id < 17 ? Number(temp) : 0;
    });

    setWindowTotal(count);

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateWindowTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom">
      <div>
        <strong>Window World</strong>
      </div>
      {props.data.map((item, index) => {
        if (index < 16)
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  id={`windowWorldInput${index + 1}`}
                  className="bottom-outline width-50px"
                  type="number"
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
                      formId: `windowWorldInput${index + 1}`,
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
                    Number(value[`windowWorldInput${index + 1}`]) *
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
            className="bottom-outline width-50px"
            id="windowWorldInput22"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput22' })}
          />
          <label>Bay/Bow Window</label>
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px"
            type="number"
            id="windowWorldInput17"
            onChange={(e) =>
              handleChange(e, {
                id: 17,
                formId: 'windowWorldInput17',
              })
            }
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px"
            id="windowWorldInput23"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput23' })}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline"
            id="windowWorldInput24"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput24' })}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px"
            type="number"
            id="windowWorldInput18"
            onChange={(e) =>
              handleChange(e, {
                id: 18,
                formId: 'windowWorldInput18',
              })
            }
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px"
            id="windowWorldInput25"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput25' })}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline"
            id="windowWorldInput26"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput26' })}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px"
            type="number"
            id="windowWorldInput19"
            onChange={(e) =>
              handleChange(e, {
                id: 19,
                formId: 'windowWorldInput19',
              })
            }
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px"
            id="windowWorldInput27"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput27' })}
          />
          <label>Specialty Window</label>
          <input
            type="text"
            className="bottom-outline"
            id="windowWorldInput28"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput28' })}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px"
            type="number"
            id="windowWorldInput20"
            onChange={(e) =>
              handleChange(e, {
                id: 20,
                formId: 'windowWorldInput20',
              })
            }
          />
        </div>
      </div>
      <div className="wrapper">
        <div>
          <input
            type="number"
            className="bottom-outline width-50px"
            id="windowWorldInput29"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput29' })}
          />
          <label>Install Labor</label>
          <input
            type="text"
            className="bottom-outline"
            id="windowWorldInput30"
            onChange={(e) => handleChange(e, { formId: 'windowWorldInput30' })}
          />
        </div>
        <div>
          <label>$</label>
          <input
            className="bottom-outline width-50px"
            type="number"
            id="windowWorldInput21"
            onChange={(e) =>
              handleChange(e, {
                id: 21,
                formId: 'windowWorldInput21',
              })
            }
          />
        </div>
      </div>
      <div className="wrapper">
        <label>Window Color</label>
        <input
          className="bottom-outline width-38 margin-2"
          defaultValue="WHITE"
          id="windowWorldInput31"
          onChange={(e) => handleChange(e, { formId: 'windowWorldInput31' })}
        />
        <label>/</label>
        <input
          className="bottom-outline width-38 margin-2"
          defaultValue="WHITE"
          id="windowWorldInput32"
          onChange={(e) => handleChange(e, { formId: 'windowWorldInput32' })}
        />
      </div>
      <div className="wrapper">
        <div>
          <p>Window Total</p>
          <input
            type="text"
            className="bottom-outline width-50px"
            value={windowTotal}
            readOnly
          />
        </div>
        <div className="width-40">
          * Denotes triple pane, solarzone and foam enhanced frame included.
        </div>
        <div>
          <label>Initial: </label>
          <Signature width={95} height={28} />
        </div>
      </div>
    </div>
  );
};

export default WindowWorldTable;
