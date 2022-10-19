import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import DrawBox from '../DrawBox';
import { updateDrawingDataFunc } from '../../store/slices/measuresheetSlice';

import Checkbox from '../Checkbox';

import {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
} from '../../store/slices/measuresheetSlice';
import { updateMainTable as updateMainTableForWindowOrder } from '../../store/slices/windoworderSlice';

import {
  initDataOfMeasureSheet,
  typeOfCheckBox,
  interiorColor,
  exteriorColor,
  roomItems,
  roomStyle,
  energy,
  obsc,
  temp,
  cutbacks,
  initDataOfWindowOrder,
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
  windowTable: {
    tearouts: 'WOOD',
    pockets: 'WOOD',
    cutbacks: { w: '-3/8' },
  },
  typeTable: { grid: 'NO GRIDS', capping: 'BRICKMOLD' },
  mainTable: {},
};

const dataForWindowOrder = {
  mainTable: {},
};

const MeasureSheet = ({ page }) => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const measuresheetData = useSelector((state) => state.measuresheet.data);
  const windowOrderData = useSelector((state) => state.windoworder.data);

  const viewMode = useSelector((state) => state.option.data.viewMode);

  dataForWindowOrder.mainTable = { ...windowOrderData.mainTable };

  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);

  const dispatch = useDispatch();

  const calculateOrderWidthHeight = () => {
    Object.values(data.mainTable).forEach((ele, index) => {
      data.mainTable[index] = {
        ...ele,
        orderWidth:
          ele.style === 'SPD'
            ? ele.orderWidth
            : ele.roWidth
            ? fractionCalculator(ele.roWidth, '+', data.windowTable.cutbacks.w)
            : '',
        orderHeight:
          ele.style === 'SPD'
            ? ele.orderHeight
            : ele.roHeight
            ? fractionCalculator(ele.roHeight, '+', data.windowTable.cutbacks.h)
            : '',
      };
    });
  };

  const handleSign = (value) => {
    dispatch(updateDrawingDataFunc(value));
  };

  const handleChangeWindowOption = (e) => {
    data.windowTable[e.target.id] = e.target.value;
    data.windowTable.cutbacks = cutbacks[data.windowTable.pockets];
    dispatch(updateWindowTable(data.windowTable));

    calculateOrderWidthHeight();

    dispatch(updateMainTable(data.mainTable));
    processWindowOrderData();
  };

  const handleChangeTypeTable = (e) => {
    data.typeTable[e.target.id] = e.target.value;
    dispatch(updateTypeTable({ ...data.typeTable }));
  };

  const handleChangeInput = (e) => {
    switch (e.target.id) {
      case 'style':
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
          orderWidth:
            e.target.value === 'SPD'
              ? tempObj.roWidth
              : tempObj.roWidth
              ? fractionCalculator(
                  tempObj.roWidth,
                  '+',
                  measuresheetData.windowTable.cutbacks.w
                )
              : '',
          orderHeight:
            e.target.value === 'SPD'
              ? tempObj.roHeight
              : tempObj.roHeight
              ? fractionCalculator(
                  tempObj.roHeight,
                  '+',
                  measuresheetData.windowTable.cutbacks.h
                )
              : '',
        });

        dataForWindowOrder.mainTable[0] = {
          ...dataForWindowOrder.mainTable[0],
          szWidth: tempObj.orderWidth,
        };
        dispatch(
          updateMainTableForWindowOrder({
            ...dataForWindowOrder.mainTable,
            0: { ...dataForWindowOrder.mainTable[0] },
          })
        );
        break;
      case 'roWidth':
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
          orderWidth:
            tempObj.style === 'SPD'
              ? tempObj.orderWidth
              : e.target.value
              ? fractionCalculator(
                  e.target.value,
                  '+',
                  measuresheetData.windowTable.cutbacks.w
                )
              : '',
        });

        break;
      case 'roHeight':
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
          orderHeight:
            tempObj.style === 'SPD'
              ? tempObj.orderHeight
              : e.target.value
              ? fractionCalculator(
                  e.target.value,
                  '+',
                  measuresheetData.windowTable.cutbacks.h
                )
              : '',
        });
        break;
      default:
        setTempObj({
          ...tempObj,
          [e.target.id]: e.target.value,
        });
        break;
    }
  };

  const handleClickTr = (row_id) => {
    setSelectedRow(row_id);
    setTempObj({ ...measuresheetData.mainTable[row_id] });
    console.log(measuresheetData.mainTable);
    setOpenTableModal(viewMode === 'homepage');
  };

  const findLastCategoryNumKindBeforeIndex = (index) => {
    let result = -1;
    for (let i = 0; i < index; i++) {
      console.log('???=>i-categoryNum:', data.mainTable[i].categoryNum);
      if (data.mainTable[i].categoryNum > result) {
        result = data.mainTable[i].categoryNum;
      }
    }

    console.log('???=>last category num:', result);
    return result;
  };

  const isOnlyOneCategory = (index) => {
    const nonComparisonElementArray = ['no', 'categoryNum', 'room'];
    const length = Object.keys(data.mainTable).length;

    for (let i = 0; i < length; i++) {
      if (i === index) continue;
      else {
        if (
          Object.keys(data.mainTable[index]).every((key) => {
            if (nonComparisonElementArray.find((val) => val === key)) {
              return true;
            } else {
              return data.mainTable[i][key] === data.mainTable[index][key];
            }
          })
        )
          return false;
      }
    }
    return true;
  };

  const isOnlyOneCategoryInPreState = (index) => {
    const nonComparisonElementArray = ['no', 'categoryNum', 'room'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i === index) continue;
      else {
        if (
          Object.keys(measuresheetData.mainTable[index]).every((key) => {
            if (nonComparisonElementArray.find((val) => val === key)) {
              return true;
            } else {
              return (
                measuresheetData.mainTable[i][key] ===
                measuresheetData.mainTable[index][key]
              );
            }
          })
        )
          return false;
      }
    }
    return true;
  };

  const findFirstIdenticalIndex = (index) => {
    const nonComparisonElementArray = ['no', 'categoryNum', 'room'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i === index) continue;
      else if (
        Object.keys(data.mainTable[index]).every((key) => {
          if (nonComparisonElementArray.find((val) => val === key)) {
            return true;
          } else {
            return data.mainTable[i][key] === data.mainTable[index][key];
          }
        })
      ) {
        console.log('???=>identical category index:', i);
        return i;
      }
    }
    return -1;
  };

  const estimateCategoryNum = (index) => {
    if (data.mainTable[index].categoryNum === -1)
      data.mainTable[index].categoryNum = 0;

    let lastCategoryNum = findLastCategoryNumKindBeforeIndex(index);

    console.log('???=>isOnly', isOnlyOneCategory(index));

    if (isOnlyOneCategoryInPreState(index)) {
      if (isOnlyOneCategory(index)) {
      } else {
        const firstIdenticalIndex = findFirstIdenticalIndex(index);
        console.log('???=>firstIdenticalIndex:', firstIdenticalIndex);
        data.mainTable[index] = {
          ...data.mainTable[index],
          categoryNum: data.mainTable[firstIdenticalIndex].categoryNum,
        };
        let standardIndex;
        if (firstIdenticalIndex < index) {
          standardIndex = index;
          const length = Object.keys(data.mainTable).length;
          for (let i = 0; i < length; i++) {
            if (
              data.mainTable[i].categoryNum >
              measuresheetData.mainTable[standardIndex].categoryNum
            ) {
              data.mainTable[i] = {
                ...data.mainTable[i],
                categoryNum: data.mainTable[i].categoryNum - 1,
              };
            }
          }
        } else {
          const nonComparisonElementArray = ['no', 'categoryNum'];
          const length = Object.keys(data.mainTable).length;
          for (let i = 0; i < length; i++) {
            if (
              Object.keys(data.mainTable[index]).every((key) => {
                if (nonComparisonElementArray.find((val) => val === key)) {
                  return true;
                } else {
                  return data.mainTable[i][key] === data.mainTable[index][key];
                }
              })
            ) {
              data.mainTable[i] = {
                ...data.mainTable[i],
                categoryNum: measuresheetData.mainTable[index].categoryNum,
              };
            }
          }

          standardIndex = firstIdenticalIndex;
          for (let i = 0; i < length; i++) {
            if (
              data.mainTable[i].categoryNum >
              measuresheetData.mainTable[standardIndex].categoryNum
            ) {
              data.mainTable[i] = {
                ...data.mainTable[i],
                categoryNum: data.mainTable[i].categoryNum - 1,
              };
            }
          }
        }
      }
    } else {
      if (isOnlyOneCategory(index)) {
        data.mainTable[index] = {
          ...data.mainTable[index],
          categoryNum: lastCategoryNum + 1,
        };
        const length = Object.keys(data.mainTable).length;
        for (let i = 0; i < length; i++) {
          console.log('???=>i - category num:', data.mainTable[i].categoryNum);
          if (measuresheetData.mainTable[i].categoryNum > lastCategoryNum) {
            data.mainTable[i] = {
              ...data.mainTable[i],
              categoryNum: data.mainTable[i].categoryNum + 1,
            };
          }
        }
      } else {
        const firstIdenticalIndex = findFirstIdenticalIndex(index);
        console.log('???=>firstIdenticalIndex:', firstIdenticalIndex);
        data.mainTable[index] = {
          ...data.mainTable[index],
          categoryNum: data.mainTable[firstIdenticalIndex].categoryNum,
        };
      }
    }
  };

  const processWindowOrderData = () => {
    Object.keys(dataForWindowOrder.mainTable).forEach((key) => {
      dataForWindowOrder.mainTable[key] = { ...initDataOfWindowOrder };
    });

    Object.values(data.mainTable).forEach((ele) => {
      if (ele.categoryNum >= 0) {
        console.log('???=>ele.categoryNum:', ele.categoryNum);
        dataForWindowOrder.mainTable[ele.categoryNum] = {
          ...dataForWindowOrder.mainTable[ele.categoryNum],
          qty: parseInt(dataForWindowOrder.mainTable[ele.categoryNum].qty + 1),
          intColor: ele.intColor,
          extColor: ele.extColor,
          type: ele.style,
          szWidth: ele.orderWidth,
          szHeight: ele.orderHeight,
          energy: ele.energy,
          obsc: ele.obsc,
          temp: ele.temp,
          pattern: ele.grids,
        };
      }
    });

    dispatch(updateMainTableForWindowOrder(dataForWindowOrder.mainTable));
  };

  const handleSave = () => {
    data.mainTable[selectedRow] = {
      ...tempObj,
    };
    estimateCategoryNum(selectedRow);
    dispatch(updateMainTable(data.mainTable));

    processWindowOrderData();
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
    const boldElementArray = ['orderWidth', 'orderHeight'];
    const checkBoxArray = ['foam'];
    const hiddenElementArray = ['categoryNum'];
    data.mainTable = { ...measuresheetData.mainTable };
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => {
            if (page === 1) {
              if (row_id < 18)
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
              if (row_id >= 18)
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
    <div className="msh__container">
      {page === 1 ? (
        <div>
          <div className="flex justify-content__space-between width-100">
            <div
              className="flex align-items__end bold"
              style={{ fontSize: '27px' }}
            >
              MEASURE SHEET <div></div>
            </div>
            <div className="flex width-50">
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
                {measuresheetData.drawingData[0].value ? (
                  ''
                ) : (
                  <div style={{ fontSize: '10px' }}>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 20,
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
                  imgInfo={measuresheetData.drawingData[0].value}
                  updateSign={handleSign}
                  signStatus={viewMode === 'homepage'}
                  viewMode={viewMode}
                  style={measuresheetData.drawingData[0].style}
                  index={0}
                />
              </div>
              <div className="measure-sheet__draw-box black-font width-30">
                {measuresheetData.drawingData[1].value ? (
                  ''
                ) : (
                  <div style={{ fontSize: '10px' }}>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 20,
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
                  imgInfo={measuresheetData.drawingData[1].value}
                  updateSign={handleSign}
                  signStatus={viewMode === 'homepage'}
                  viewMode={viewMode}
                  style={measuresheetData.drawingData[1].style}
                  index={1}
                />
              </div>
              <div className="measure-sheet__draw-box black-font width-30">
                {measuresheetData.drawingData[2].value ? (
                  ''
                ) : (
                  <div style={{ fontSize: '10px' }}>
                    Click to Draw
                    <FontAwesomeIcon
                      icon={faPencil}
                      style={{
                        fontSize: 20,
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
                  imgInfo={measuresheetData.drawingData[2].value}
                  updateSign={handleSign}
                  signStatus={viewMode === 'homepage'}
                  viewMode={viewMode}
                  style={measuresheetData.drawingData[2].style}
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
              disabled={tempObj.style === 'SPD' ? false : true}
            />
          </div>
          <div className="p-line">
            <label htmlFor="orderHeight">Order Height</label>
            <input
              id="orderHeight"
              value={tempObj['orderHeight']}
              onChange={(e) => handleChangeInput(e)}
              disabled={tempObj.style === 'SPD' ? false : true}
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
              {temp.map((value, index) => (
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
              {obsc.map((value, index) => (
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
