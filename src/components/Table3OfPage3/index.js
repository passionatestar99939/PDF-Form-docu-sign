import React from 'react';
import Input from '../Input';

import './style.css';

const Table3OfPage3 = ({ children }) => {
  return (
    <table class="Table3OfPage3">
      <tr>
        <td>Capping:</td>
        <td>
          <input type="checkbox" />
          Yes
          <input type="checkbox" />
          No
        </td>
      </tr>
      <tr>
        <td>Color:</td>
        <td>
          <Input value="White" />
        </td>
        <td>
          <input type="checkbox" />
          SM
        </td>
        <td>
          <input type="checkbox" />
          PVC
        </td>
      </tr>
      <tr>
        <td>Interior Trim:</td>
        <td>
          <input type="checkbox" />
          Yes
          <input type="checkbox" />
          No
        </td>
      </tr>
    </table>
  );
};

export default Table3OfPage3;
