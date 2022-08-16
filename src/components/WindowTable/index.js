import React from 'react';
import Input from '../Input';

import './style.css';

const options = require('../../constants/options.json');

const WindowTable = (props) => {
  let rows = [];
  for (let i = 0; i < props.rowCount; i++) {
    rows.push({ [props.colNames[0]]: props.firstNoOfRow + i });
  }

  console.log('???=>', options.rooms);

  return (
    <table class="WindowTable">
      {/* {for(let i=0; i<props.row_count; i++){

      }} */}
      {/* {while(i<15){}} */}
      <tr>
        {props.colNames.map((value) => (
          <th>{value}</th>
        ))}
      </tr>
      {rows.map((value) => (
        <tr>
          <td>{value[`${props.colNames[0]}`]}</td>
          <td>
            <select>
              <option value=" " selected="selected">
                {' '}
              </option>
              {options.rooms.map((value) => (
                <option value={value}>{value}</option>
              ))}{' '}
            </select>
          </td>
          <td>
            <select>
              <option value=" " selected="selected">
                {' '}
              </option>
              {options.styles.map((value) => (
                <option value={value}>{value}</option>
              ))}{' '}
            </select>
          </td>
          <td className="width-10">
            <Input class="width-100" />
          </td>
          <td>
            <Input type="checkbox" />
          </td>
          <td>
            <Input />
          </td>
          <td>
            <Input />
          </td>
          <td>
            <Input />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default WindowTable;
