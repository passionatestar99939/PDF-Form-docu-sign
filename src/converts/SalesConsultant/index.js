import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateSalesInfo } from '../../store/slices/salesInfoSlice';
import { dollarNumberWithCommas } from '../../utils/globals';

import './style.css';

const SalesConsultant = () => {
  const salesData = useSelector((state) => state.salesInfo.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const [contractTotal, setContractTotal] = useState(salesData.contractTotal);
  const [price, setPrice] = useState(0);
  const [bonus, setBonus] = useState(0);
  const dispatch = useDispatch();

  console.log(viewMode);

  const handleContractTotal = (e) => {
    let price = dollarNumberWithCommas(salesData.contractTotal);
    setContractTotal(price);
    dispatch(updateSalesInfo({ id: 'contractTotal', value: e.target.value }));
  };

  const handleContractTotalFocus = (e) => {
    if (viewMode !== 'homepage') return;
    e.target.type = 'number';
    e.target.value = salesData.contractTotal;
  };

  const handleContractTotalBlur = (e) => {
    e.target.type = 'text';
    let price = dollarNumberWithCommas(salesData.contractTotal);
    e.target.value = price;
    setContractTotal(price);
  };

  useEffect(() => {
    let contractPrice = dollarNumberWithCommas(salesData.contractTotal * 0.08);
    let bonus = dollarNumberWithCommas(salesData.contractTotal * 0.08 + 25);

    setPrice(contractPrice);
    setBonus(bonus);
  }, [contractTotal, salesData.contractTotal]);

  return (
    <div className="cf_container">
      <div>
        <table className="cf_table_convert">
          <thead>
            <tr>
              <th colSpan={4}>
                <img
                  src="/images/gray1.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                />
                <p style={{ marginTop: '-40px' }}>
                  Window World - Sales Commission Sheet
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">1099 Sales Rep:</p>
              </td>
              <td className="td_content">{salesData.salesConsultant}</td>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Total Commission</p>
              </td>
              <td className="td_content width-30">$ </td>
            </tr>
            <tr>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Customer Name:</p>
              </td>
              <td className="td_content">{salesData.customer}</td>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Deductions:</p>
              </td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Contract Date:</p>
              </td>
              <td className="td_content">{salesData.date}</td>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">10% Deduction:</p>
              </td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Customer PO:</p>
              </td>
              <td className="td_content">348-___________</td>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Check Total:</p>
              </td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Contract Total:</p>
              </td>
              <td>{dollarNumberWithCommas(salesData.contractTotal)}</td>
              <td className="gray_title">
                <img
                  src="/images/gray2.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="gray_background"
                />
                <p className="gray_content">Account Balance:</p>
              </td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="note_td">NOTES</td>
              <td colSpan={3} className="note_td_data"></td>
            </tr>
            <tr className="contract_price">
              <td>CONTRACT PRICE</td>
              <td>{dollarNumberWithCommas(salesData.contractTotal)} x 0.08</td>
              <td colSpan={2}>= {price}</td>
            </tr>
            <tr className="manufacture_bonus">
              <td>MANUFACTURER BONUS</td>
              <td style={{ fontSize: '14px' }}>(5+ Windows) w/o DISCOUNTS</td>
              <td>+ $25</td>
              <td>= {bonus}</td>
            </tr>
            <tr style={{ height: '5px' }}></tr>
            <tr>
              <td colSpan={2} className="total">
                <img
                  src="/images/gray3.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="commission-total-img"
                />
                <p className="commission-total">Commission Total</p>
              </td>
              <td style={{ height: '50px' }}></td>
              <td rowSpan={2} className="approved">
                Approved by:
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="bonus">
                <img
                  src="/images/gray4.png"
                  alt="gray"
                  width="100%"
                  height="49px"
                  className="commission-total-img"
                />
                <p className="bonus-total">Commission Total for 8 %</p>
              </td>
              <td style={{ height: '50px' }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesConsultant;
