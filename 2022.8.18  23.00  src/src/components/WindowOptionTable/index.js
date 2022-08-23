import React from 'react';

const WindowOptionTable = (props) => {
  const handleChange = (e, id) => {
    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    props.updateWindowOptionTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  return (
    <div className="table-bottom">
      <div>
        <strong>WINDOW OPTIONS</strong>
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
                  value={item.count * item.unitPrice}
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
