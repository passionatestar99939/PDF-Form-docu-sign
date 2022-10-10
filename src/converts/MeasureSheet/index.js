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
    const checkBoxArray = ['foam', 'temp', 'obsc'];
    // setTempObj({ ...measuresheetData.mainTable });
    data.mainTable = { ...measuresheetData.mainTable };
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.keys(ele).map((key, index) =>
                checkBoxArray.find((val) => val === key) ? (
                  <td key={index}>
                    <Checkbox
                      checkVal={ele[key]}
                      checkId={key}
                      updateCheck={handleChangeCheckbox}
                      isInputEnable={viewMode === 'homepage'}
                      type={typeOfCheckBox.PatioDoorOrder}
                    />
                  </td>
                ) : (
                  <td key={index}>{ele[key]}</td>
                )
              )}
            </tr>
          ))}
      </tbody>
    );
  };

  let selected;

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
                    {viewMode !== 'homepage' ? (
                      measuresheetData.windowTable.cutbacks
                    ) : (
                      <select
                        className="ms_select"
                        id="cutbacks"
                        onChange={(e) => handleChangeWindowOption(e)}
                      >
                        <option
                          value="(-3/8” W)"
                          selected={
                            '(-3/8” W)' ===
                            measuresheetData.windowTable.cutbacks
                          }
                        >
                          (-3/8” W)
                        </option>
                        <option
                          value="(-1/2” W) x (-1/2 H)"
                          selected={
                            '(-1/2” W) x (-1/2 H)' ===
                            measuresheetData.windowTable.cutbacks
                          }
                        >
                          (-1/2” W) x (-1/2 H)
                        </option>
                      </select>
                    )}
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
    </div>
  );
};

export default MeasureSheet;
