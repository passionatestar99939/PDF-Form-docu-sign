import React from 'react';
import Input from '../Input';

import './style.css';

const Table4OfPage3 = ({ children }) => {
  return (
    <table class="Table4OfPage3">
      <tr>
        <td>Windows</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>capping</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>Doors (hardware shutters/ other)</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>Disposal by Cust</td>
        <td>
          <input type="checkbox" />
          Yes <input type="checkbox" />
          No
        </td>
      </tr>
      <tr>
        <td>Mull Removals</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>R&R Removals</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>Extra Labor?</td>
        <td>
          <Input />
        </td>
      </tr>
      <tr>
        <td>Cont.</td>
        <td>
          <Input />
        </td>
      </tr>
    </table>
  );
};

export default Table4OfPage3;
