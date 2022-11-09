import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/glassoptionSlice';
import { numberWithCommas } from '../../utils/globals';

const GlassOptionTable = (props) => {
  const storeData = useSelector((state) => state.glassoption.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (e, { id, formId }) => {
    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateGlassTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom table-font table-padding">
      <div className="table-title-big">
        <strong>GLASS OPTIONS</strong>
      </div>
      {props.data.map((item, index) => {
        return (
          <div className="wrapper" key={index}>
            <div>
              <input
                id={`glassOptionInput${index + 1}`}
                type="number"
                className="bottom-outline width-70px medium-input"
                onChange={(e) =>
                  handleChange(e, {
                    id: item.id,
                    formId: `glassOptionInput${index + 1}`,
                  })
                }
                value={storeData[`glassOptionInput${index + 1}`]}
                readOnly={viewMode !== 'homepage'}
              />
              <label>{item.label}</label>
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
                className="bottom-outline width-70px medium-input"
                value={`$ ${numberWithCommas(
                  Number(storeData[`glassOptionInput${index + 1}`]) *
                    item.unitPrice
                )}`}
                readOnly
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlassOptionTable;
