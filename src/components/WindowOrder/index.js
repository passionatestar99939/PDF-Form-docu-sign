import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  initDataOfWindowOrder,
  interiorColor,
  exteriorColor,
  sashSplit,
  typeOfCheckBox,
  energy,
  temp,
  obsc,
} from '../../constants/variables';
import {
  updateMainTable,
  updateDrawingData,
} from '../../store/slices/windoworderSlice';

import './style.css';
import Checkbox from '../Checkbox';
import Signature from '../Signature';
import { updateDrawingDataFunc } from '../../store/slices/windoworderSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const data = {
  mainTable: {},
  drawingData: {},
};

const WindowOrder = () => {
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const windowOrderData = useSelector((state) => state.windoworder.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});

  data.mainTable = { ...windowOrderData.mainTable };
  const dispatch = useDispatch();

  const selectedRowRef = useRef(0);

  const selectedRow = selectedRowRef.current;

  const handleChangeInput = (e) => {
    setTempObj({ ...tempObj, [e.target.id]: e.target.value });
  };

  const handleChangeCheckbox = (value, { formId }) => {
    setTempObj({ ...tempObj, [formId]: value });
  };

  const handleSign = (value) => {
    dispatch(updateDrawingDataFunc(value));
  };

  const handleClickTr = useCallback((row_id) => {
    selectedRowRef.current = row_id;
    setTempObj({ ...data.mainTable[row_id] });
    setOpenTableModal(viewMode === 'homepage');
  }, []);

  const handleSave = () => {
    data.mainTable[selectedRow] = { ...tempObj };
    dispatch(updateMainTable(data.mainTable));
    setOpenTableModal(false);
  };

  const handleClear = () => {
    const selectedRow = selectedRowRef.current;
    setTempObj({ ...initDataOfWindowOrder, no: selectedRow + 1 });
  };

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
      'nailfin',
      'grids',
      'blinds',
      'casementsL',
      'casementsR',
      'casementsPW',
    ];

    const classNameForX = '';

    return (
      <tbody>
        {data.mainTable &&
          Object.values(windowOrderData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.keys(ele).map((key, index) => (
                <td
                  key={index}
                  className={ele[key] == 'X' ? 'window-order__X-td' : ''}
                >
                  {checkBoxArray.find((val) => val === key) ? (
                    <Checkbox
                      checkVal={ele[key]}
                      checkId={key}
                      updateCheck={handleChangeCheckbox}
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
            <div className="window-order__draw-box black-font">
              <div>
                Click to Draw
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{ fontSize: 40, color: 'black', margin: '0px 20px' }}
                />
              </div>
              <Signature
                width={'100%'}
                height={'100%'}
                signId="drawingData"
                addClass="mySign"
                updateSign={handleSign}
                setVal={windowOrderData['drawingData']}
                signStatus={true}
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

        <table className="wof__body-table">
          <TableHeader />
          <TableBody />
          <TableFooter />
        </table>
      </div>
      <Modal
        isOpen={openTableModal}
        className="wof__table_modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <div className="p-line">
          <label htmlFor="qty">QTY</label>
          <input
            id="qty"
            type="number"
            min="0"
            value={tempObj['qty']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="type">TYPE</label>
          <input
            id="type"
            value={tempObj['type']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="series">SERIES</label>
          <input
            id="series"
            value={tempObj['series']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="foam">FOAM</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['foam']}
              checkId={'foam'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="nailfin">NAILFIN</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['nailfin']}
              checkId={'nailfin'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="szWidth">Exact Size Width</label>
          <input
            id="szWidth"
            type="number"
            min="0"
            value={tempObj['szWidth']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="szHeight">Exact Size Height</label>
          <input
            id="szHeight"
            type="number"
            min="0"
            value={tempObj['szHeight']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="sashSplit">SASH SPLIT</label>
          <select id="sashSplit" onChange={(e) => handleChangeInput(e)}>
            {sashSplit.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj.sashSplit ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="intColor">INTERIOR COLOR</label>
          <select id="intColor" onChange={(e) => handleChangeInput(e)}>
            {interiorColor.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj['intColor'] ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="extColor">EXTERIOR COLOR</label>
          <select id="extColor" onChange={(e) => handleChangeInput(e)}>
            {exteriorColor.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj['extColor'] ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="grids">GRIDS</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj.grids}
              checkId={'grids'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="pattern">Pattern</label>
          <input
            id="pattern"
            value={tempObj['pattern']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="blinds">Blinds</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj.blinds}
              checkId={'blinds'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="energy">ENERGY</label>
          <select id="energy" onChange={(e) => handleChangeInput(e)}>
            {energy.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj['energy'] ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="obsc">Obsc</label>
          <select id="obsc" onChange={(e) => handleChangeInput(e)}>
            {obsc.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj['obsc'] ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="temp">Temp</label>
          <select id="temp" onChange={(e) => handleChangeInput(e)}>
            {temp.map((value, index) => (
              <option
                key={index}
                value={value}
                selected={value === tempObj['temp'] ? 'selected' : ''}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="casementsL">Casement L</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['casementsL']}
              checkId={'casementsL'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="casementsR">Casement R</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['casementsR']}
              checkId={'casementsR'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="casementsPW">Casement PW</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['casementsPW']}
              checkId={'casementsPW'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="mulls">MULLS</label>
          <input
            id="mulls"
            value={tempObj['mulls']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="comment">OTHER COMMENTS</label>
          <input
            id="comment"
            value={tempObj['comment']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="modal_footer">
          <button className="btn sign-modal-btn" onClick={handleSave}>
            Save
          </button>
          <button className="btn sign-modal-btn" onClick={handleClear}>
            Clear
          </button>
          <button
            className="btn sign-modal-btn"
            onClick={() => setOpenTableModal(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default WindowOrder;
