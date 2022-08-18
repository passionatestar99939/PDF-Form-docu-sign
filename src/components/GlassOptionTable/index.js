import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateValue } from '../../store/slices/glassoptionSlice';

const GlassOptionTable = (props) => {
  const value = useSelector((state) => state.glassoption.data);
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
    <div className="table-bottom">
      <div>
        <strong>GLASS OPTIONS</strong>
      </div>
      {props.data.map((item, index) => {
        return (
          <div className="wrapper font-14" key={index}>
            <div>
              <input
                id={`glassOptionInput${index + 1}`}
                type="number"
                className="bottom-outline width-50px"
                onChange={(e) =>
                  handleChange(e, {
                    id: item.id,
                    formId: `glassOptionInput${index + 1}`,
                  })
                }
              />
              <label>{item.label}</label>
            </div>
            <div>
              <label>{`$${item.unitPrice}`}</label>
              <input
                type="text"
                className="bottom-outline width-50px"
                value={
                  Number(value[`glassOptionInput${index + 1}`]) * item.unitPrice
                }
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
