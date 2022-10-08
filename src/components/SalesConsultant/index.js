import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initDataOfCommisionForm } from "../../constants/variables";
import { formatDate } from "../../utils/globals";

import "./style.css";

const SalesConsultant = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);

  // const [tableData, setTableData] = useState({
  //   ...initDataOfCommisionForm,
  //   date: formatDate(new Date()),
  //   salesConsultant: salesConsultant,
  //   customerName: customerName,
  // });

  // useEffect(() => {
  //   setTableData({
  //     ...initDataOfCommisionForm,
  //     customerName: customerName,
  //     salesConsultant: salesConsultant,
  //   });
  // }, [salesConsultant, customerName]);

  return (
    <div>
      <div>
        <table className='Patio__Table1'>
          <tr>
            <th></th>
            <th colSpan='2'><div className="td_center">COMMISION FORM</div></th>
            <th></th>
          </tr>
          <tr>
            <td><div className="label">STORE</div></td>
            <td>
              <div className="td_center">{salesInfo.account}</div>
            </td>
            <td style={{ backgroundColor: "RGB(220, 220, 220)" }}><div className="label">DATE</div></td>
            <td>
              <div className="td_center">{salesInfo.date}</div>
            </td>
          </tr>
          <tr>
            <td><div className="label">SALES CONSULTANT</div></td>
            <td>
              <div className="td_center">{salesInfo.salesConsultant}</div>
            </td>
            <td style={{ backgroundColor: "RGB(220, 220, 220)" }}><div className="label">SALES #</div></td>
            <td>
              <div className="td_center">{salesInfo.repNumber}</div>
            </td>
          </tr>
          <tr>
            <td><div className="label">CUSTOMER NAME</div></td>
            <td>
              <div className="td_center">{salesInfo.customer}</div>
            </td>
            <td><div className="label">COMM%</div></td>
            <td>
              <div className="td_center">{salesInfo.comm + "%"}</div>
            </td>
          </tr>
          <tr>
            <td><div className="label">WW ORDER #</div></td>
            <td>
              <div className="td_center">{salesInfo.wwOrder}</div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: "hidden" }}>none</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><div className="label">CALCULATIONS</div></td>
            <td>
              {/*<input id='calculation' value={tableData.calculation} />*/}
            </td>
            <td><div className="label">8%</div></td>
            <td></td>
          </tr>
          <tr>
            <td><div className="label">CONTRACT PRICE</div></td>
            <td style={{ textAlign: "right", color: "red" }}><div className="label">$12,298</div></td>
            <td style={{ texAalign: "left" }}><div className="label">x 0.08</div></td>
            <td style={{ color: "RGB(0, 118, 186)" }}><div className="td_center">=$983.84</div></td>
          </tr>
          <tr>
            <td><div className="label">MANUFACTURER BNOUS</div></td>
            <td>
              <div className="td_center">(5+ Windows) w/o DISCOUNTS</div>
            </td>
            <td style={{ textAlign: "left" }}>
              <strong><div className="label">+$25</div></strong>
            </td>
            <td style={{ color: "RGB(0, 118, 186)" }}><div className="td_center">=$1,008.84</div></td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: "hidden" }}>none</div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div style={{ visibility: "hidden" }}>none</div>
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
