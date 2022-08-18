import React from 'react';
import Input from '../Input';

import './style.css';

const Table3OfPage3 = ({ children }) => {
  return (
    <table className="Table3OfPage3">
      <thead>
        <tr>
          <td>Capping:</td>
          <td>
            <input type="checkbox" />
            Yes
            <input type="checkbox" />
            No
          </td>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default Table3OfPage3;
