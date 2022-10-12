import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

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
  obscured,
  tempered,
  cutbacks,
} from '../../constants/variables';

import { fractionCalculator } from '../../utils/globals';
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

const MeasureSheet = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const measuresheetData = useSelector((state) => state.measuresheet.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);

  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);

  const dispatch = useDispatch();

  const handleChangeWindowOption = (e) => {
    data.leftTable[e.target.id] = e.target.value;
    data.leftTable.cutbacks = cutbacks[data.leftTable.pockets];
    dispatch(updateWindowTable({ ...data.leftTable }));
  };

  const handleChangeTypeTable = (e) => {
    data.rightTable[e.target.id] = e.target.value;
    dispatch(updateTypeTable({ ...data.rightTable }));
  };

  const handleChangeInput = (e) => {
    switch (e.target.id) {
      case 'roWidth':
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
          orderWidth: fractionCalculator(
            e.target.value,
            '+',
            measuresheetData.windowTable.cutbacks.w
          ),
        });
        break;
      case 'roHeight':
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
          orderHeight: fractionCalculator(
            e.target.value,
            '+',
            measuresheetData.windowTable.cutbacks.H
          ),
        });
        break;
      default:
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
        });
        break;
    }
    // measuresheetData.windowTable.cutbacks.H
  };

  const handleClickTr = (row_id) => {
    setSelectedRow(row_id);
    setTempObj({ ...measuresheetData.mainTable[row_id] });
    console.log(measuresheetData.mainTable);
    setOpenTableModal(viewMode === 'homepage');
  };

  const handleSave = () => {
    data.mainTable[selectedRow] = { ...tempObj };
    dispatch(updateMainTable(data.mainTable));
    setOpenTableModal(false);
  };

  const handleClear = () => {
    setTempObj({ ...initDataOfMeasureSheet, no: selectedRow + 1 });
  };

  const handleChangeCheckbox = (value, { formId }) => {
    setTempObj({ ...tempObj, [formId]: value });
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          {tableHeaderLine &&
            tableHeaderLine.map((value, index) => <th key={index}>{value}</th>)}
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const boldArray = ['orderWidth', 'orderHeight'];
    const checkBoxArray = ['foam'];
    // setTempObj({ ...measuresheetData.mainTable });
    data.mainTable = { ...measuresheetData.mainTable };
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.keys(ele).map((key, index) => (
                <td
                  key={index}
                  className={
                    boldArray.find((val) => val == key)
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
              ))}
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <div className="msh__container">
      <div className="msh__header">
        <div className="msh__header__left width-40">
          <div className="display-inline-block">
            <p className="msh-text text-center m-5">EXISTING WINDOWS</p>
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
                    {measuresheetData.windowTable.cutbacks.H
                      ? ' X ' +
                        '(' +
                        measuresheetData.windowTable.cutbacks.H +
                        '")'
                      : ''}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="msh__header__center  width-20 d-flex flex-direction-column justify-content-end">
          <p className="m-0">MEASURE SHEET (ORDER FORM)</p>
        </div>
        <div className="msh__header__right width-40">
          <div className="flex">
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
          <div className="d-flex justify-content-end">
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
                        selected={'1x4' === measuresheetData.typeTable.capping}
                      >
                        1x4
                      </option>
                      <option
                        value="1x6"
                        selected={'1x6' === measuresheetData.typeTable.capping}
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
      <div className="msh__body">
        <table className="msh__body-table">
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
          <div className="p-line">
            <label htmlFor="room">Room</label>
            <select id="room" onChange={(e) => handleChangeInput(e)}>
              {roomItems.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.room ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="style">Style</label>
            <select id="style" onChange={(e) => handleChangeInput(e)}>
              {roomStyle.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.style ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="roWidth">R.O.Width</label>
            <input
              id="roWidth"
              value={tempObj['roWidth']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
            <label htmlFor="roHeight">R.O.Height</label>
            <input
              id="roHeight"
              value={tempObj['roHeight']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
            <label htmlFor="orderWidth">Order Width</label>
            <input
              id="orderWidth"
              value={tempObj['orderWidth']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
            <label htmlFor="orderHeight">Order Height</label>
            <input
              id="orderHeight"
              value={tempObj['orderHeight']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
            <label htmlFor="grids">Grids/Blinds</label>
            <input
              id="grids"
              value={tempObj['grids']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
            <label htmlFor="intColor">Int Color</label>
            <select id="intColor" onChange={(e) => handleChangeInput(e)}>
              {interiorColor.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.intColor ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="extColor">Ext Color</label>
            <select id="extColor" onChange={(e) => handleChangeInput(e)}>
              {exteriorColor.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.extColor ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
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
          <div className="p-line">
            <label htmlFor="temp">Temp</label>
            <select id="temp" onChange={(e) => handleChangeInput(e)}>
              {tempered.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.temp ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="obsc">OBSC</label>
            <select id="obsc" onChange={(e) => handleChangeInput(e)}>
              {obscured.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.obsc ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="energy">Energy</label>
            <select id="energy" onChange={(e) => handleChangeInput(e)}>
              {energy.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  selected={value === tempObj.energy ? 'selected' : ''}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="mullCuts">Mull Cuts</label>
            <input
              id="mullCuts"
              value={tempObj['mullCuts']}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="p-line">
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
