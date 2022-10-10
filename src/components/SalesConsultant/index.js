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

  const handleContractTotal = (e) => {
    let price = dollarNumberWithCommas(salesData.contractTotal);
    setContractTotal(price);
    dispatch(updateSalesInfo({ id: 'contractTotal', value: e.target.value }));
  };

  const handleContractTotalFocus = (e) => {
    e.target.type = 'number';
    e.target.value = salesData.contractTotal;
  };

  const handleContractTotalBlur = (e) => {
    e.target.type = 'text';
    let price = dollarNumberWithCommas(salesData.contractTotal);
    e.target.value = price;
    setContractTotal(price);
    dispatch(
      updateSalesInfo({
        id: 'contractTotal',
        value: Number(salesData.contractTotal),
      })
    );
  };

  useEffect(() => {
    let contractPrice = dollarNumberWithCommas(salesData.contractTotal * 0.08);
    let bonus = dollarNumberWithCommas(salesData.contractTotal * 0.08 + 25);

    setPrice(contractPrice);
    setBonus(bonus);
  }, [contractTotal, salesData.contractTotal]);

  return (
    <div>
      <div>
        <table className="cf_table">
          <thead>
            <tr>
              <th colSpan={4}>Window World - Sales Commission Sheet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gray_title">1099 Sales Rep:</td>
              <td className="td_content">{salesData.salesConsultant}</td>
              <td className="gray_title">Total Commission</td>
              <td className="td_content width-30">$ </td>
            </tr>
            <tr>
              <td className="gray_title">Customer Name:</td>
              <td className="td_content">{salesData.customer}</td>
              <td className="gray_title">Deductions:</td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">Contract Date:</td>
              <td className="td_content">{salesData.date}</td>
              <td className="gray_title">10% Deduction:</td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">Customer PO:</td>
              <td className="td_content">348-___________</td>
              <td className="gray_title">Check Total:</td>
              <td className="td_content">$ </td>
            </tr>
            <tr>
              <td className="gray_title">Contract Total:</td>
              <td>
                <input
                  className="contract_total"
                  type="text"
                  defaultValue={dollarNumberWithCommas(salesData.contractTotal)}
                  onChange={(e) => handleContractTotal(e)}
                  onFocus={(e) => handleContractTotalFocus(e)}
                  onBlur={(e) => handleContractTotalBlur(e)}
                  readOnly={viewMode !== 'homepage'}
                />
              </td>
              <td className="gray_title">Account Balance:</td>
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
              <td>(5+ Windows) w/o DISCOUNTS</td>
              <td>+ $25</td>
              <td>= {bonus}</td>
            </tr>
            <tr>
              <td colSpan={2} className="total">
                Commission Total
              </td>
              <td></td>
              <td rowSpan={2} className="approved">
                Approved by:
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="bonus">
                Commission Total for 8 %
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesConsultant;
