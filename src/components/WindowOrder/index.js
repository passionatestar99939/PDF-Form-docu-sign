import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { initDataOfWindowOrder } from '../../constants/variables';
import {
  updateMainTable,
  updateDrawingData,
} from '../../store/slices/windoworderSlice';

import './style.css';

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

const data = {
  mainTable: {},
  drawingData: {},
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
  table: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
};

const WindowOrder = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const windowOrderData = useSelector((state) => state.windoworder.data);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});

  const dispatch = useDispatch();

  const selectedRowRef = useRef(0);

  const selectedRow = selectedRowRef.current;

  const handleChangeInput = (e) => {
    setTempObj({ ...tempObj, [e.target.id]: e.target.value });
  };

  const handleClickTr = useCallback((row_id) => {
    selectedRowRef.current = row_id;
    setTempObj({ ...data.mainTable[row_id] });
    setOpenTableModal(true);
  }, []);

  const handleSave = () => {
    Object.keys(data.mainTable[selectedRow]).forEach((value) => {
      data.mainTable[selectedRow][value] = tempObj[value];
    });
    dispatch(updateMainTable(data.mainTable));
    setOpenTableModal(false);
  };

  const handleClear = () => {
    const selectedRow = selectedRowRef.current;
    setTempObj({ ...initDataOfWindowOrder, no: selectedRow + 1 });
  };

  const TableBody = () => {
    return (
      <tbody>
        {data.mainTable &&
          Object.values(windowOrderData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.values(ele).map((value, index) => (
                <td key={index}>{value}</td>
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
            <div className="window-order__draw-box black-font">
              Click to Draw
            </div>
          </td>
        </tr>
      </tfoot>
    );
  };

  return (
    <div className="wof-container">
      <div className="flex justify-end">
        <div className="flex width-40">
          <div className="width-50">
            <div className="flex margin-top-30px">
              <div className="right-align width-30">Customer:</div>
              <div className="border-bottom width-70 blue-font">
                {salesInfo.customer}
              </div>
            </div>
            <div className="flex margin-top-30px">
              <div className="right-align width-30">PO #:</div>
              <div className="border-bottom width-70 blue-font">
                {salesInfo.po}
              </div>
            </div>
          </div>
          <div className="width-50">
            <div className="flex margin-top-30px">
              <div className="right-align width-30">Sales Rep:</div>
              <div className="border-bottom width-70 blue-font">
                {salesInfo.salesConsultant}
              </div>
            </div>
            <div className="flex margin-top-30px">
              <div className="right-align width-30">Date:</div>
              <div className="border-bottom width-70 blue-font">
                {salesInfo.date}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wof__body">
        <div className="text-center">MI WINDOW ORDER FORM</div>
        <table className="wof__body-table">
          <TableHeader />
          <TableBody />
          <TableFooter />
        </table>
      </div>
      <Modal
        isOpen={openTableModal}
        style={customStyles.table}
        className="wof__main-table-modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        {Object.keys(initDataOfWindowOrder) &&
          Object.keys(initDataOfWindowOrder).map((val, index) => (
            <div key={index}>
              <label htmlFor={val}>{val}</label>
              <input
                id={val}
                value={tempObj[val]}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
          ))}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={() => setOpenTableModal(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default WindowOrder;
