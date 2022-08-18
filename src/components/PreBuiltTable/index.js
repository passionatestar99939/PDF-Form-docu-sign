import React from 'react';
import Signature from '../Signature';

const PreBuiltTable = (props) => {
  const handleChange = (e, id) => {
    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    props.updatePrebuiltTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom">
      <div>
        <strong>PRE 1978 BUILT HOMES (Federal Lead Containment Law)</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div>
                <input
                  type="number"
                  className="bottom-outline width-50px"
                  onChange={(e) => handleChange(e, item.id)}
                />
                <label>{item.label}</label>
              </div>
              <div>
                <label>{`$${item.unitPrice}`}</label>
                <input
                  type="text"
                  className="bottom-outline width-50px"
                  value={`${item.count * item.unitPrice}`}
                  readOnly
                />
              </div>
            </div>
          );
        })}
        <div className="wrapper">
          <div>
            <label>MY HOME WAS BUILT IN THE YEAR</label>
            <input className="bottom-outline width-50px" />
          </div>
          <div>
            <label>Initial</label>
            <Signature width={54} height={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreBuiltTable;
