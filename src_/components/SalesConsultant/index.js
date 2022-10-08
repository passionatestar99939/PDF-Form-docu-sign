import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initDataOfCommisionForm } from '../../constants/variables';
import { formatDate } from '../../utils/globals';

import './style.css';

const SalesConsultant = () => {
  const salesConsultant = useSelector((state) => state.salesman.data.salesman);
  const customerName = useSelector((state) => state.contact.data.customer);

  const [tableData, setTableData] = useState({
    ...initDataOfCommisionForm,
    date: formatDate(new Date()),
    salesConsultant: salesConsultant,
    customerName: customerName,
  });

  useEffect(() => {
    setTableData({
      ...initDataOfCommisionForm,
      customerName: customerName,
      salesConsultant: salesConsultant,
    });
  }, [salesConsultant, customerName]);

  return (
    <div>
      <div>
        <table className="Patio__Table1">
          <tr>
            <th></th>
            <th colSpan="2">COMMISION FORM</th>
            <th></th>
          </tr>
          <tr>
            <td>STORE</td>
            <td>
              <input id="store" value={tableData.store} />
            </td>
            <td style={{ backgroundColor: 'RGB(220, 220, 220)' }}>DATE</td>
            <td>
              <input id="date" value={tableData.date} />
            </td>
          </tr>
          <tr>
            <td>SALES CONSULTANT</td>
            <td>
              <input id="salesConsultant" value={tableData.salesConsultant} />
            </td>
            <td style={{ backgroundColor: 'RGB(220, 220, 220)' }}>SALES#</td>
            <td>
              <input id="sales" value={tableData.sales} />
            </td>
          </tr>
          <tr>
            <td>CUSTOMER NAME</td>
            <td>
              <input id="customerName" value={tableData.customerName} />
            </td>
            <td>COMM%</td>
            <td>
              <input id="comm" value={tableData.comm} />
            </td>
          </tr>
          <tr>
            <td>WW ORDER #</td>
            <td>
              <div className="flex">
                <input id="wwOrder" value={tableData.wwOrder} />
                <div
                  style={{
                    borderBottom: '1px solid RGB(122, 122, 122); width: 70%',
                  }}
                ></div>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: 'hidden' }}>none</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>CALCULATIONS</td>
            <td>
              <input id="calculation" value={tableData.calculation} />
            </td>
            <td>8%</td>
            <td></td>
          </tr>
          <tr>
            <td>CONTRACT PRICE</td>
            <td style={{ textAlign: 'right', color: 'red' }}>$12,298</td>
            <td style={{ texAalign: 'left' }}>x 0.08</td>
            <td style={{ color: 'RGB(0, 118, 186)' }}>=$983.84</td>
          </tr>
          <tr>
            <td>MANUFACTURER BNOUS</td>
            <td>
              <small>(5+ Windows) w/o DISCOUNTS</small>
            </td>
            <td style={{ textAlign: 'left' }}>
              <strong>+$25</strong>
            </td>
            <td style={{ color: 'RGB(0, 118, 186)' }}>=$1,008.84</td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: 'hidden' }}>none</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: 'hidden' }}>none</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SalesConsultant;
