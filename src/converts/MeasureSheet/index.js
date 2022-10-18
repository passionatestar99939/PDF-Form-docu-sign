import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import DrawBox from '../DrawBox';
import DropDownWrapper from '../DropDownWrapper';
import Checkbox from '../Checkbox';

import {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
} from '../../store/slices/measuresheetSlice';

import {
  initDataOfMeasureSheet,
  typeOfCheckBox,
  interiorColor,
  exteriorColor,
  roomItems,
  roomStyle,
  energy,
} from '../../constants/variables';

import './style.css';

const tableHeaderLine = [
  'No.',
  'ROOM',
  'STYLE',
  'R.O.WIDTH',
  'R.O.HEIGHT',
  'ORDER WIDTH',
  'ORDER HEIGHT',
  'GRIDS/BLINDS',
  'INT COLOR',
  'EXT COLOR',
  'FOAM',
  'TEMP',
  'OBSC',
  'ENERGY',
  'MULL CUTS',
  'NOTES',
];
let data = {
  leftTable: {
    tearouts: 'WOOD',
    pockets: 'WOOD',
    cutbacks: '(-3/8") x (-1/2")',
  },
  rightTable: {
    grid: 'NO GRIDS',
    capping: 'BRICKMOLD',
  },
  mainTable: {},
  writable: true,
};

for (let i = 0; i < 20; i++) {
  data.mainTable[i] = { ...initDataOfMeasureSheet, no: i + 1 };
}

const MeasureSheet = ({ page }) => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const measuresheetData = useSelector((state) => state.measuresheet.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);

  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);

  const dispatch = useDispatch();

  const handleChangeWindowOption = (e) => {
    data.leftTable[e.target.id] = e.target.value;
    dispatch(updateWindowTable({ ...data.leftTable }));
  };

  const handleChangeTypeTable = (e) => {
    data.rightTable[e.target.id] = e.target.value;
    dispatch(updateTypeTable({ ...data.rightTable }));
  };

  const handleChangeInput = (e) => {
    setTempObj({ ...tempObj, [e.target.id]: e.target.value });
  };

  const handleClickTr = (row_id) => {
    setSelectedRow(row_id);
    setTempObj({ ...measuresheetData.mainTable[row_id] });
    console.log(measuresheetData.mainTable);
    setOpenTableModal(viewMode === 'homepage');
  };

  const handleSave = () => {
    console.log(tempObj);
    data.mainTable[selectedRow] = { ...tempObj };
    console.log('???=>', selectedRow, data.mainTable[selectedRow]);
    dispatch(updateMainTable(data.mainTable));
    setOpenTableModal(false);
  };

  const handleClear = () => {
    setTempObj({ ...initDataOfMeasureSheet, no: selectedRow + 1 });
  };

  const handleChangeCheckbox = (value, { formId }) => {
    setTempObj({ ...tempObj, formId: value });
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          {tableHeaderLine &&
            tableHeaderLine.map((value, index) => (
              <th key={index}>
                {value === 'GRIDS/BLINDS' ? (
                  <div>
                    GRIDS/ <br /> BLINDS
                  </div>
                ) : (
                  value
                )}
              </th>
            ))}
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const boldElementArray = ['orderWidth', 'orderHeight'];
    const checkBoxArray = ['foam'];
    const hiddenElementArray = ['categoryNum'];
    data.mainTable = { ...measuresheetData.mainTable };
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => {
            if (page === 1) {
              if (row_id < 17)
                return (
                  <tr key={row_id} onClick={() => handleClickTr(row_id)}>
                    {Object.keys(ele).map((key, index) =>
                      hiddenElementArray.find((val) => val === key) ? (
                        ''
                      ) : (
                        <td
                          key={index}
                          className={
                            boldElementArray.find((val) => val === key)
                              ? 'bold measure-sheet__big-font'
                              : ''
                          }
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
                      )
                    )}
                  </tr>
                );
            } else if (page === 2) {
              if (row_id >= 17)
                return (
                  <tr key={row_id} onClick={() => handleClickTr(row_id)}>
                    {Object.keys(ele).map((key, index) =>
                      hiddenElementArray.find((val) => val === key) ? (
                        ''
                      ) : (
                        <td
                          key={index}
                          className={
                            boldElementArray.find((val) => val === key)
                              ? 'bold measure-sheet__big-font'
                              : ''
                          }
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
                      )
                    )}
                  </tr>
                );
            }
          })}
      </tbody>
    );
  };

  return (
    <div className="msh_container_convert">
      {page === 1 ? (
        <div>
          <div className="flex justify-content__space-between width-100">
            <div
              className="flex align-items__end bold"
              style={{ fontSize: '30px' }}
            >
              MEASURE SHEET <div></div>
            </div>
            <div className="flex width-40">
              <div className="width-50">
                <div className="flex margin-top-15px">
                  <div className="right-align width-30">Customer:</div>
                  <div className="border-bottom width-70 blue-font text-center">
                    {salesInfo.customer}
                  </div>
                </div>
                <div className="flex margin-top-15px">
                  <div className="right-align width-30">PO #:</div>
                  <div className="border-bottom width-70 blue-font text-center">
                    {salesInfo.po}
                  </div>
                </div>
              </div>
              <div className="width-50">
                <div className="flex margin-top-15px">
                  <div className="right-align width-30">Sales Rep:</div>
                  <div className="border-bottom width-70 blue-font text-center">
                    {salesInfo.salesConsultant}
                  </div>
                </div>
                <div className="flex margin-top-15px">
                  <div className="right-align width-30">Date:</div>
                  <div className="border-bottom width-70 blue-font text-center">
                    {salesInfo.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-content__space-between width-100">
            <div className="msh__hover-left-table">
              <table className="msh__header__left-table">
                <tr>
                  <td className="text-right">TYPE OF WINDOW TEAROUTS</td>
                  <td>
                    {viewMode !== 'homepage' ? (
                      measuresheetData.windowTable.tearouts
                    ) : (
                      <select
                        className="ms_select"
                        id="tearouts"
                        onChange={(e) => handleChangeWindowOption(e)}
                      >
                        <option
                          value="WOOD"
                          selected={
                            'WOOD' === measuresheetData.windowTable.tearouts
                          }
                        >
                          WOOD
                        </option>
                        <option
                          value="ALUM"
                          selected={
                            'ALUM' === measuresheetData.windowTable.tearouts
                          }
                        >
                          ALUM
                        </option>
                        <option
                          value="VINYL"
                          selected={
                            'VINYL' === measuresheetData.windowTable.tearouts
                          }
                        >
                          VINYL
                        </option>
                        <option
                          value="STEEL"
                          selected={
                            'STEEL' === measuresheetData.windowTable.tearouts
                          }
                        >
                          STEEL
                        </option>
                      </select>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">TYPE OF WINDOW POCKET</td>
                  <td>
                    {viewMode !== 'homepage' ? (
                      measuresheetData.windowTable.pockets
                    ) : (
                      <select
                        className="ms_select"
                        id="pockets"
                        onChange={(e) => handleChangeWindowOption(e)}
                      >
                        <option
                          value="WOOD"
                          selected={
                            'WOOD' === measuresheetData.windowTable.pockets
                          }
                        >
                          WOOD
                        </option>
                        <option
                          value="PLASTER"
                          se
                          lected={
                            'PLASTER' === measuresheetData.windowTable.pockets
                          }
                        >
                          PLASTER
                        </option>
                        <option
                          value="DRYWALL"
                          selected={
                            'DRYWALL' === measuresheetData.windowTable.pockets
                          }
                        >
                          DRYWALL
                        </option>
                      </select>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">WINDOW CUTBACKS</td>
                  <td>
                    ({measuresheetData.windowTable.cutbacks.w}")
                    {measuresheetData.windowTable.cutbacks.h
                      ? ' X ' +
                        '(' +
                        measuresheetData.windowTable.cutbacks.h +
                        '")'
                      : ''}
                  </td>
                </tr>
              </table>
            </div>

            <div className="flex width-60 justify-content__space-around">
              <div className="measure-sheet__draw-box black-font width-30">
                {measuresheetData.drawingData[0] ? (
                  ''
                ) : (
                  <div>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 40,
                        color: 'black',
                        margin: '0px 20px',
                      }}
                    />
                  </div>
                )}

                <DrawBox
                  width={'100%'}
                  height={'100%'}
                  signId="drawingData"
                  addClass="mySign"
                  setVal={measuresheetData.drawingData[0].value}
                  signStatus={false}
                  viewMode={viewMode}
                  styleJSON={measuresheetData.drawingData[0].style}
                  index={0}
                />
              </div>
              <div className="measure-sheet__draw-box black-font width-30">
                {measuresheetData.drawingData[1] ? (
                  ''
                ) : (
                  <div>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 40,
                        color: 'black',
                        margin: '0px 20px',
                      }}
                    />
                  </div>
                )}
                <DrawBox
                  width={'100%'}
                  height={'100%'}
                  signId="drawingData"
                  addClass="mySign"
                  setVal={measuresheetData.drawingData[1].value}
                  signStatus={false}
                  viewMode={viewMode}
                  styleJSON={measuresheetData.drawingData[1].style}
                  index={1}
                />
              </div>
              <div className="measure-sheet__draw-box black-font width-30">
                {measuresheetData.drawingData[2] ? (
                  ''
                ) : (
                  <div>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 40,
                        color: 'black',
                        margin: '0px 20px',
                      }}
                    />
                  </div>
                )}
                <DrawBox
                  width={'100%'}
                  height={'100%'}
                  signId="drawingData"
                  addClass="mySign"
                  setVal={measuresheetData.drawingData[2].value}
                  signStatus={false}
                  viewMode={viewMode}
                  styleJSON={measuresheetData.drawingData[2].style}
                  index={2}
                />
              </div>
            </div>
            <div>
              <table className="msh__header__right-table">
                <tr>
                  <td className="text-right">GRID STYLE</td>
                  <td className="text-center">
                    {viewMode !== 'homepage' ? (
                      measuresheetData.typeTable.grid
                    ) : (
                      <select
                        className="ms_select"
                        id="grid"
                        onChange={(e) => handleChangeTypeTable(e)}
                      >
                        <option
                          value="NO GRIDS"
                          selected={
                            'NO GRIDS' === measuresheetData.typeTable.grid
                          }
                        >
                          NO GRIDS
                        </option>
                        <option
                          value="Flat"
                          selected={'Flat' === measuresheetData.typeTable.grid}
                        >
                          Flat
                        </option>
                        <option
                          value="Sculptured"
                          selected={
                            'Sculptured' === measuresheetData.typeTable.grid
                          }
                        >
                          Sculptured
                        </option>
                        <option
                          value="SDL"
                          selected={'SDL' === measuresheetData.typeTable.grid}
                        >
                          SDL
                        </option>
                      </select>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="text-right">CAPPING STYLE</td>
                  <td className="text-center">
                    {viewMode !== 'homepage' ? (
                      measuresheetData.typeTable.capping
                    ) : (
                      <select
                        className="ms_select"
                        id="capping"
                        onChange={(e) => handleChangeTypeTable(e)}
                      >
                        <option
                          value="BRICKMOLD"
                          selected={
                            'BRICKMOLD' === measuresheetData.typeTable.capping
                          }
                        >
                          BRICKMOLD
                        </option>
                        <option
                          value="1x4"
                          selected={
                            '1x4' === measuresheetData.typeTable.capping
                          }
                        >
                          1x4
                        </option>
                        <option
                          value="1x6"
                          selected={
                            '1x6' === measuresheetData.typeTable.capping
                          }
                        >
                          1x6
                        </option>
                        <option
                          value="OTHER"
                          selected={
                            'OTHER' === measuresheetData.typeTable.capping
                          }
                        >
                          OTHER
                        </option>
                      </select>
                    )}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="msh__body">
        <table className="msh__body-table_convert">
          <TableHeader />
          <TableBody />
        </table>
      </div>
      <Modal
        isOpen={openTableModal}
        className="msh__header_main-table-modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <div>
          <div className="ms_p-line_convert">
            <label htmlFor="room">Room</label>
            <select id="room" onChange={(e) => handleChangeInput(e)}>
              {roomItems.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="style">Style</label>
            <select id="style" onChange={(e) => handleChangeInput(e)}>
              {roomStyle.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="roWidth">R.O.Width</label>
            <input
              id="roWidth"
              value={tempObj['roWidth']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="roHeight">R.O.Height</label>
            <input
              id="roHeight"
              value={tempObj['roHeight']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="orderWidth">Order Width</label>
            <input
              id="orderWidth"
              value={tempObj['orderWidth']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="orderHeight">Order Height</label>
            <input
              id="orderHeight"
              value={tempObj['orderHeight']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="grids">Grids/Blinds</label>
            <input
              id="grids"
              value={tempObj['grids']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="intColor">Int Color</label>
            <select id="intColor" onChange={(e) => handleChangeInput(e)}>
              {interiorColor.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="extColor">Ext Color</label>
            <select id="extColor" onChange={(e) => handleChangeInput(e)}>
              {exteriorColor.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="foam">FOAM</label>
            <div className="measure-sheet__check-box">
              <Checkbox
                checkVal={tempObj.foam}
                checkId="foam"
                updateCheck={handleChangeCheckbox}
                isInputEnable={viewMode === 'homepage'}
                type={typeOfCheckBox.PatioDoorOrder}
              />
            </div>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="temp">Temp</label>
            <div className="measure-sheet__check-box">
              <Checkbox
                checkVal={tempObj.temp}
                checkId="temp"
                updateCheck={handleChangeCheckbox}
                isInputEnable={viewMode === 'homepage'}
                type={typeOfCheckBox.PatioDoorOrder}
              />
            </div>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="obsc">OBSC</label>
            <div className="measure-sheet__check-box">
              <Checkbox
                checkVal={tempObj.obsc}
                checkId="obsc"
                updateCheck={handleChangeCheckbox}
                isInputEnable={viewMode === 'homepage'}
                type={typeOfCheckBox.PatioDoorOrder}
              />
            </div>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="energy">Energy</label>
            <select id="energy" onChange={(e) => handleChangeInput(e)}>
              {energy.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="mullCuts">Mull Cuts</label>
            <input
              id="mullCuts"
              value={tempObj['mullCuts']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="ms_p-line_convert">
            <label htmlFor="notes">Notes</label>
            <input
              id="notes"
              value={tempObj['notes']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
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

export default MeasureSheet;
