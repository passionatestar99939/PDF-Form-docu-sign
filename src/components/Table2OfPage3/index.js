import React from 'react';

import './style.css';

const Table2OfPage3 = ({ children }) => {
  return (
    <table className="Table2OfPage3">
      <tbody>
        <tr>
          <td>Type of Tear Ouot:</td>
          <td>
            <input type="checkbox" />
            Wood
          </td>
          <td>
            <input type="checkbox" />
            Alum
          </td>
          <td>
            <input type="checkbox" />
            Steel
          </td>
          <td>
            <input type="checkbox" />
            Vinyl
          </td>
        </tr>
        <tr>
          <td>Type of House:</td>
          <td>
            <input type="checkbox" />
            Brick
          </td>
          <td>
            <input type="checkbox" />
            Frame
          </td>
          <td>
            <input type="checkbox" />
            Siding
          </td>
          <td>
            <input type="checkbox" />
            Stucco
          </td>
        </tr>
        <tr>
          <td>Type of Property:</td>
          <td>
            <input type="checkbox" />
            Business
          </td>
          <td>
            <input type="checkbox" />
            Rental
          </td>
          <td>
            <input type="checkbox" />
            Empty
          </td>
          <td>
            <input type="checkbox" />
            Own
          </td>
        </tr>
        <tr>
          <td>Type of Opening:</td>
          <td>
            <input type="checkbox" />
            Drywall
          </td>
          <td>
            <input type="checkbox" />
            Plaster
          </td>
          <td>
            <input type="checkbox" />
            Wood
          </td>
        </tr>
        <tr>
          <td>Style:</td>
          <td>
            <input type="checkbox" />
            Brickmold
          </td>
          <td>
            <input type="checkbox" />
            1x4
          </td>
          <td>
            <input type="checkbox" />
            1x6
          </td>
          <td>
            <input type="checkbox" />
            Other
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2OfPage3;
