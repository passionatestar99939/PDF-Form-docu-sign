import React from 'react';

import CheckBox from '../Checkbox';
import DropDown from '../DropDown';
import Input from '../Input';

import './style.css';

const options = require('../../constants/options.json');

const WindowTable = (props) => {
  let rows = [];
  for (let i = 0; i < props.rowCount; i++) {
    rows.push({ [props.colNames[0]]: props.firstNoOfRow + i });
  }

  return (
    <table className="WindowTable">
      {/* {for(let i=0; i<props.row_count; i++){

      }} */}
      {/* {while(i<15){}} */}
      <thead>
        <tr>
          {props.colNames.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((value, index) => (
          <tr key={index}>
            {/* <td>{value[`${props.colNames[0]}`]}</td> */}
            <td>{value[props.colNames[0]]}</td>
            <td>
              <DropDown status={1}>
                <select className="table-select">
                  <option value=" "> </option>
                  {options.rooms.map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}{' '}
                </select>
              </DropDown>
            </td>
            <td>
              <select className="table-select">
                <option value=" "> </option>
                {options.styles.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}{' '}
              </select>
            </td>
            <td className="width-10">
              <input className="table-input" />
            </td>
            <td className="CheckBoxCell">
              <CheckBox />
            </td>
            <td>
              <input className="table-input" />
            </td>
            <td>
              <input className="table-input" />
            </td>
            <td>
              <input className="table-input" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WindowTable;
