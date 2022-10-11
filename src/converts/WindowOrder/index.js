import React from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '../Checkbox';
import Signature from '../Signature';

import {
  initDataOfWindowOrder,
  typeOfCheckBox,
} from '../../constants/variables';

import './style.css';

const data = {
  mainTable: {},
  drawingData: {},
};

for (let i = 0; i < 16; i++) {
  data.mainTable[i] = { ...initDataOfWindowOrder, no: i + 1 };
}

const WindowOrder = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const windowOrderData = useSelector((state) => state.windoworder.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);

  const handleSign = () => {};

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="2">QTY</th>
          <th rowSpan="2">TYPE</th>
          <th rowSpan="2">SERIES</th>
          <th rowSpan="2">FOAM</th>
          <th rowSpan="2">NAILFIN</th>
          <th rowSpan="2" colSpan="3">
            Exact Size
          </th>
          <th>SASH</th>
          <th>INT</th>
          <th>EXT</th>
          <th rowSpan="2">GRIDS</th>
          <th rowSpan="2">PATTERN</th>
          <th rowSpan="2">BLINDS</th>
          <th rowSpan="2">ENERGY</th>
          <th rowSpan="2">OBSC</th>
          <th rowSpan="2">TEMP</th>
          <th colSpan={3}>CASEMENTS</th>
          <th rowSpan="2">MULLS</th>
          <th rowSpan="2">OTHER COMMENTS</th>
        </tr>
        <tr>
          <th>SPLIT</th>
          <th>COLOR</th>
          <th>COLOR</th>
          <th>L</th>
          <th>R</th>
          <th>PW</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const checkBoxArray = [
      'foam',
      'obsc',
      'temp',
      'casementsL',
      'casementsR',
      'casementsPW',
    ];

    return (
      <tbody>
        {data.mainTable &&
          Object.values(windowOrderData.mainTable).map((ele, row_id) => (
            <tr key={row_id}>
              {Object.keys(ele).map((key, index) => (
                <td
                  key={index}
                  className={ele[key] === 'X' ? 'window-order__X-td' : ''}
                >
                  {checkBoxArray.find((val) => val === key) ? (
                    <Checkbox
                      checkVal={ele[key]}
                      checkId={key}
                      isInputEnable={viewMode === 'homepage'}
                      type={typeOfCheckBox.PatioDoorOrder}
                    />
                  ) : (
                    ele[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    );
  };

  const TableFooter = () => {
    return (
      <tfoot>
        <tr>
          <td></td>
          <td colSpan={21}>
            <div className="underline left-align black-font">
              Draw Grid Pattern Layout
            </div>
            <div className="window-order__draw-box_convert black-font">
              Click to Draw
              <Signature
                width={'100%'}
                height={'100%'}
                signId="drawingData"
                addClass="mySign_convert"
                updateSign={handleSign}
                setVal={windowOrderData['drawingData']}
                signStatus={false}
                viewMode={viewMode}
                isSignMode={false}
              />
            </div>
          </td>
        </tr>
      </tfoot>
    );
  };

  return (
    <div className="wof-container">
      <div className="wof__body">
        <div className="flex justify-end">
          <div className="flex width-40">
            <div className="width-50">
              <div className="flex wo_sales">
                <div className="right-align width-30">Customer:</div>
                <div className="border-bottom width-70 blue-font">
                  {salesInfo.customer}
                </div>
              </div>
              <div className="flex wo_sales">
                <div className="right-align width-30">PO #:</div>
                <div className="border-bottom width-70 blue-font">
                  {salesInfo.po}
                </div>
              </div>
            </div>
            <div className="width-50">
              <div className="flex wo_sales">
                <div className="right-align width-30">Sales Rep:</div>
                <div className="border-bottom width-70 blue-font">
                  {salesInfo.salesConsultant}
                </div>
              </div>
              <div className="flex wo_sales">
                <div className="right-align width-30">Date:</div>
                <div className="border-bottom width-70 blue-font">
                  {salesInfo.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="wof__body-table_convert">
          <TableHeader />
          <TableBody />
          <TableFooter />
        </table>
      </div>
    </div>
  );
};

export default WindowOrder;
