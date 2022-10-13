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

const MeasureSheet = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const measuresheetData = useSelector((state) => state.measuresheet.data);
  const windowOrderData = useSelector((state) => state.windoworder.data);

  const viewMode = useSelector((state) => state.option.data.viewMode);

  // data = { ...measuresheetData };
  // console.log('???=>data:', data);

  dataForWindowOrder.mainTable = { ...windowOrderData.mainTable };

  // const [renderFlag, setRenderFlag] = useState(false);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);

  const dispatch = useDispatch();

  const calculateOrderWidthHeight = () => {
    Object.values(data.mainTable).forEach((ele, index) => {
      data.mainTable[index] = {
        ...ele,
        orderWidth:
          ele.style == 'SPD'
            ? ele.roWidth
            : ele.roWidth
            ? fractionCalculator(
                ele.roWidth,
                '+',
                data.windowTable.cutbacks.w
                //2022.10.12  13:39  dispatch(updateWindowTable(data.windowTable)): setState, async function ---> prevState is used at this moment
              )
            : '',
        orderHeight:
          ele.style == 'SPD'
            ? ele.roHeight
            : ele.roHeight
            ? fractionCalculator(
                ele.roHeight,
                '+',
                data.windowTable.cutbacks.h
                //2022.10.12  13:39  dispatch(updateWindowTable(data.windowTable)): setState, async function ---> prevState is used at this moment
              )
            : '',
      };

      // data.mainTable[index].orderHeight = fractionCalculator(
      //   ele.roHeight,
      //   '+',
      //   measuresheetData.windowTable.cutbacks.h
      // );
    });
  };
  const handleChangeWindowOption = (e) => {
    // data.windowTable = {};
    // console.log('???=>empty main table:', data.windowTable);
    // setRenderFlag(true);
    data.windowTable[e.target.id] = e.target.value;
    data.windowTable.cutbacks = cutbacks[data.windowTable.pockets];
    // dispatch(updateWindowTable({ ...data.windowTable }));
    dispatch(updateWindowTable(data.windowTable));

    calculateOrderWidthHeight();

    dispatch(updateMainTable(data.mainTable));
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
            tempObj.style == 'SPD'
              ? e.target.value
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
            tempObj.style == 'SPD'
              ? e.target.value
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
    // measuresheetData.windowTable.cutbacks.h
  };

  const handleClickTr = (row_id) => {
    setSelectedRow(row_id);
    setTempObj({ ...measuresheetData.mainTable[row_id] });
    console.log(measuresheetData.mainTable);
    setOpenTableModal(viewMode === 'homepage');
  };

  const isFirstCatogory = (index) => {
    const nonComparisonElementArray = ['no', 'categoryNum'];

    for (let i = 0; i < index; i++) {
      if (
        Object.keys(data.mainTable[index]).every((key) => {
          if (nonComparisonElementArray.find((val) => val === key)) {
            return true;
          } else {
            return data.mainTable[i][key] == data.mainTable[index][key];
          }
        })
      )
        return false;
    }
    return true;
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
    // return Object.values(data.mainTable).find(
    //   (ele) => ele.categoryNum == data.mainTable[index].categoryNum
    // )
    //   ? false
    //   : true;

    const nonComparisonElementArray = ['no', 'categoryNum'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i == index) continue;
      else {
        if (
          Object.keys(data.mainTable[index]).every((key) => {
            if (nonComparisonElementArray.find((val) => val === key)) {
              return true;
            } else {
              return data.mainTable[i][key] == data.mainTable[index][key];
            }
          })
        )
          return false;
      }
    }
    return true;
  };

  const isOnlyOneCategoryInPreState = (index) => {
    // return Object.values(data.mainTable).find(
    //   (ele) => ele.categoryNum == data.mainTable[index].categoryNum
    // )
    //   ? false
    //   : true;

    const nonComparisonElementArray = ['no', 'categoryNum'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i == index) continue;
      else {
        if (
          Object.keys(measuresheetData.mainTable[index]).every((key) => {
            if (nonComparisonElementArray.find((val) => val === key)) {
              return true;
            } else {
              return (
                measuresheetData.mainTable[i][key] ==
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
    const nonComparisonElementArray = ['no', 'categoryNum'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i == index) continue;
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

  const findIdenticalCategoryNum = (index) => {
    const nonComparisonElementArray = ['no', 'categoryNum'];
    const length = Object.keys(data.mainTable).length;
    for (let i = 0; i < length; i++) {
      if (i == index) continue;
      else if (
        Object.keys(data.mainTable[index]).every((key) => {
          if (nonComparisonElementArray.find((val) => val === key)) {
            return true;
          } else {
            return data.mainTable[i][key] === data.mainTable[index][key];
          }
        })
      ) {
        console.log(
          '???=>identical category num:',
          data.mainTable[i].categoryNum
        );
        return data.mainTable[i].categoryNum;
      }
    }
    return -1;
  };

  // estimating categoryNum of index-row in main table
  const estimateCategoryNum = (index) => {
    if (data.mainTable[index].categoryNum == -1)
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
              // data.mainTable[i].categoryNum = 1;
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
            if (i == index) continue;
            else if (
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
                categoryNum: data.mainTable[index].categoryNum,
              };
            }
          }

          standardIndex = firstIdenticalIndex;
          for (let i = 0; i < length; i++) {
            if (
              data.mainTable[i].categoryNum >
              data.mainTable[standardIndex].categoryNum
            ) {
              // data.mainTable[i].categoryNum = 1;
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
      } else {
      }
    }

    // if (isOnlyOneCategory(index)) {
    //   if (data.mainTable[index].categoryNum === lastCategoryNum) {
    //     data.mainTable[index] = {
    //       ...data.mainTable[index],
    //       categoryNum: lastCategoryNum + 1,
    //     };
    //   }
    //   console.log('???=>data[index]', data.mainTable[index]);
    //   const length = Object.keys(data.mainTable).length;
    //   for (let i = index + 1; i < length; i++) {
    //     if (data.mainTable[i].categoryNum >= lastCategoryNum) {
    //       // data.mainTable[i].categoryNum = 1;
    //       data.mainTable[i] = {
    //         ...data.mainTable[i],
    //         categoryNum: data.mainTable[i].categoryNum + 1,
    //       };
    //     }
    //   }
    // } else {
    //   // if pre state is only one
    // }
  };

  const handleSave = () => {
    data.mainTable[selectedRow] = {
      ...tempObj,
      // categoryNum: estimateCategoryNum(selectedRow),
    };
    estimateCategoryNum(selectedRow);
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
    const boldElementArray = ['orderWidth', 'orderHeight'];
    const checkBoxArray = ['foam'];
    const hiddenElementArray = ['categoryNum'];
    // const hiddenElementArray = [];
    // setTempObj({ ...measuresheetData.mainTable });
    data.mainTable = { ...measuresheetData.mainTable };
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.keys(ele).map((key, index) =>
                hiddenElementArray.find((val) => val == key) ? (
                  // ''
                  <td className="bold measure-sheet__big-font">{ele[key]}</td>
                ) : (
                  <td
                    key={index}
                    className={
                      boldElementArray.find((val) => val == key)
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
              // disabled={tempObj.style == 'SPD' ? true : false}
              disabled={true}
            />
          </div>
          <div className="p-line">
            <label htmlFor="orderHeight">Order Height</label>
            <input
              id="orderHeight"
              value={tempObj['orderHeight']}
              onChange={(e) => handleChangeInput(e)}
              // disabled={tempObj.style == 'SPD' ? true : false}
              disabled={true}
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
