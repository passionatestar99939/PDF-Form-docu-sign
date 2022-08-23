import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/windowoptionSlice';

const WindowOptionTable = (props) => {
  const storeData = useSelector((state) => state.windowoption.data);
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

    props.updateWindowOptionTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom">
      <div className="table-title">
        <strong>WINDOW OPTIONS</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div className="flex-input">
                <input
                  id={`windowOptionInput${index + 1}`}
                  type="number"
                  className="bottom-outline width-50px input-box"
                  onChange={(e) =>
                    handleChange(e, {
                      id: item.id,
                      formId: `windowOptionInput${index + 1}`,
                    })
                  }
                  value={storeData[`windowOptionInput${index + 1}`]}
                />
                <label>{item.label}</label>
                {index === 1 ? (
                  <input
                    type="text"
                    className="bottom-outline input-box"
                    style={{ width: '450px' }}
                    id="windowOptionInput14"
                    onChange={(e) =>
                      handleChange(e, { formId: 'windowOptionInput14' })
                    }
                    value={storeData['windowOptionInput14']}
                    readOnly={viewMode !== 'homepage'}
                  />
                ) : index === 6 ? (
                  <>
                    <input
                      type="text"
                      className="bottom-outline input-box"
                      style={{ width: '388px' }}
                      id="windowOptionInput12"
                      onChange={(e) =>
                        handleChange(e, { formId: 'windowOptionInput12' })
                      }
                      value={storeData['windowOptionInput12']}
                      readOnly={viewMode !== 'homepage'}
                    />
                  </>
                ) : null}
              </div>
              <div>
                <label>{`$${item.unitPrice}`}</label>
                <input
                  type="text"
                  className="bottom-outline width-50px"
                  value={
                    Number(storeData[`windowOptionInput${index + 1}`]) *
                    item.unitPrice
                  }
                  readOnly
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WindowOptionTable;
