import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/windowoptionSlice';
import { numberWithCommas } from '../../utils/globals';

import './style.css';

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
    <div className="table-bottom table-font table-padding">
      <div className="table-title-big">
        <strong>WINDOW OPTIONS</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div key={index}>
              <div className="wrapper">
                <div
                  className="flex-input"
                  style={
                    index === 6
                      ? { width: '75%' }
                      : index === 1
                      ? { width: '70%' }
                      : {}
                  }
                >
                  <input
                    id={`windowOptionInput${index + 1}`}
                    type="number"
                    className="bottom-outline width-80px input-box medium-input"
                    onChange={(e) =>
                      handleChange(e, {
                        id: item.id,
                        formId: `windowOptionInput${index + 1}`,
                      })
                    }
                    value={storeData[`windowOptionInput${index + 1}`]}
                  />
                  <label>{item.label}</label>
                  {index === 1 && (
                    <input
                      type="text"
                      className="bottom-outline input-box"
                      style={{ width: '82%' }}
                      id="windowOptionInput14"
                      onChange={(e) =>
                        handleChange(e, { formId: 'windowOptionInput14' })
                      }
                      value={storeData['windowOptionInput14']}
                      readOnly={viewMode !== 'homepage'}
                    />
                  )}{' '}
                  {index === 6 && (
                    <>
                      <input
                        type="text"
                        className="bottom-outline input-box"
                        style={
                          viewMode === 'convert-pdf'
                            ? { width: '18%' }
                            : { width: '27%' }
                        }
                        id="windowOptionInput12"
                        onChange={(e) =>
                          handleChange(e, { formId: 'windowOptionInput12' })
                        }
                        value={storeData['windowOptionInput12']}
                        readOnly={viewMode !== 'homepage'}
                      />
                      <label htmlFor="windowOptionInput12">
                        Inc. Flexscreen
                      </label>
                    </>
                  )}
                </div>
                <div>
                  <label>{`$${item.unitPrice}`}</label>
                  <input
                    type="text"
                    style={
                      viewMode === 'convert-pdf'
                        ? { width: '75px' }
                        : { width: '90px' }
                    }
                    className="bottom-outline width-80px medium-input"
                    value={`$ ${numberWithCommas(
                      Number(storeData[`windowOptionInput${index + 1}`]) *
                        item.unitPrice
                    )}`}
                    readOnly
                  />
                </div>
              </div>
              {index === 1 && (
                <p style={{ textAlign: 'right' }}>
                  (List Pattern) Initial:
                  <input
                    type="text"
                    className="bottom-outline input-box"
                    style={{ width: '40%' }}
                    id="windowOptionInput21"
                    onChange={(e) =>
                      handleChange(e, { formId: 'windowOptionInput21' })
                    }
                    value={storeData['windowOptionInput21']}
                    readOnly={viewMode !== 'homepage'}
                  />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WindowOptionTable;
