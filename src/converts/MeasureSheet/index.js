import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { initDataOfMeasureSheet } from '../../constants/variables';
import {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
} from '../../store/slices/measuresheetSlice';

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

const MeasureSheet = () => {
  const salesInfo = useSelector((state) => state.salesInfo.data);
  const measuresheetData = useSelector((state) => state.measuresheet.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  
  const [openRightModal, setOpenRightModal] = useState(false);
  const [openLeftModal, setOpenLeftModal] = useState(false);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [tempObj, setTempObj] = useState({});
  const [selectedRow, setSelectedRow] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWindowTable({ ...data.leftTable }));
    dispatch(updateTypeTable({ ...data.rightTable }));
    // dispatch(updateMainTable({ ...data.mainTable }));
  }, []);

  const handleLeftModalOpen = () => {
    setOpenLeftModal(viewMode === "homepage");
  };

  const handleRightModalOpen = () => {
    setOpenRightModal(viewMode === "homepage");
  };

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

  const handleClickTr = useCallback((row_id) => {
    setSelectedRow(row_id);
    setTempObj({ ...data.mainTable[row_id] });
    setOpenTableModal(viewMode === "homepage");
  }, []);

  const handleSave = () => {
    console.log(tempObj);
    console.log(data.mainTable[selectedRow]);
    data.mainTable[selectedRow] = { ...tempObj };
    dispatch(updateMainTable(data.mainTable));
    setOpenTableModal(false);
  };

  const handleClear = () => {
    setTempObj({ ...initDataOfMeasureSheet, no: selectedRow + 1 });
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
    return (
      <tbody>
        {data.mainTable &&
          Object.values(measuresheetData.mainTable).map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {Object.values(ele).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <div className="msh__container">
      <div className="msh__header">
        <div className="msh__header__left flex-col-30">
          <div className="display-inline-block">
            <p className="msh-text text-center m-5">EXISTING WINDOWS</p>
            <div
              className="msh__hover-left-table"
              onClick={handleLeftModalOpen}
            >
              <table className="msh__header__left-table">
                <tr>
                  <td className="text-right">TYPE OF WINDOW TEAROUTS</td>
                  <td>{measuresheetData.windowTable.tearouts}</td>
                </tr>
                <tr>
                  <td className="text-right">TYPE OF WINDOW POCKET</td>
                  <td>{measuresheetData.windowTable.pockets}</td>
                </tr>
                <tr>
                  <td className="text-right">WINDOW CUTBACKS</td>
                  <td>{measuresheetData.windowTable.cutbacks}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openLeftModal}
          className="msh__header_left-table-modal"
          overlayClassName="myoverlay"
          closeTimeoutMS={200}
        >
          <div className="p-line">
            <label htmlFor="tearouts">TYPE OF WINDOW TEAROUTS</label>
            <select id="tearouts" onChange={(e) => handleChangeWindowOption(e)}>
              <option
                value="WOOD"
                selected={'WOOD' === data.leftTable.tearouts}
              >
                WOOD
              </option>
              <option
                value="ALUM"
                selected={'ALUM' === data.leftTable.tearouts}
              >
                ALUM
              </option>
              <option
                value="VINYL"
                selected={'VINYL' === data.leftTable.tearouts}
              >
                VINYL
              </option>
              <option
                value="STEEL"
                selected={'STEEL' === data.leftTable.tearouts}
              >
                STEEL
              </option>
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="pockets">TYPE OF WINDOW POCKET</label>
            <select id="pockets" onChange={(e) => handleChangeWindowOption(e)}>
              <option>WOOD</option>
              <option>PLASTER</option>
              <option>DRYWALL</option>
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="cutbacks">WINDOW CUTBACKS</label>
            <select id="cutbacks" onChange={(e) => handleChangeWindowOption(e)}>
              <option>(-3/8” W)</option>
              <option>(-1/2” W) x (-1/2 H)</option>
            </select>
          </div>
          <div className="modal_footer">
            <button onClick={() => setOpenLeftModal(false)}>close</button>
          </div>
        </Modal>
        <div className="msh__header__center flex-col-40 d-flex flex-direction-column justify-content-end">
          <p className="m-0">MEASURE SHEET (ORDER FORM)</p>
        </div>
        <div className="msh__header__right flex-col-30">
          <div className="msh__header_contact d-flex flex-direction-column">
            <div className="flex-col-100 bottom-borderd">
              Customer: {salesInfo.customer} Sales Rep:{' '}
              {salesInfo.salesConsultant}
            </div>
            <div className="flex-col-100 bottom-borderd">
              PO #: {salesInfo.po} Date: {salesInfo.date}
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <table
              className="msh__header__right-table"
              onClick={handleRightModalOpen}
            >
              <tr>
                <td className="text-right">GRID STYLE</td>
                <td className="text-center">
                  {measuresheetData.typeTable.grid}
                </td>
              </tr>
              <tr>
                <td className="text-right">CAPPING STYLE</td>
                <td className="text-center">
                  {measuresheetData.typeTable.capping}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <Modal
          isOpen={openRightModal}
          className="msh__header_left-table-modal"
          overlayClassName="myoverlay"
          closeTimeoutMS={200}
        >
          <div className="p-line">
            <label htmlFor="grid">GRID STYLE</label>
            <select id="grid" onChange={(e) => handleChangeTypeTable(e)}>
              <option value="NO GRIDS">NO GRIDS</option>
              <option value="Flat">Flat</option>
              <option value="Sculptured">Sculptured</option>
              <option value="SDL">SDL</option>
            </select>
          </div>
          <div className="p-line">
            <label htmlFor="capping">CAPPING STYLE</label>
            <select id="capping" onChange={(e) => handleChangeTypeTable(e)}>
              <option value="BRICKMOLD">BRICKMOLD</option>
              <option value="1x4">1x4</option>
              <option value="1x6">1x6</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>
          <div className="modal_footer">
            <button onClick={() => setOpenRightModal(false)}>close</button>
          </div>
        </Modal>
      </div>
      <div className="msh__body">
        <table className="msh__body-table">
          <TableHeader />
          <TableBody />
        </table>
      </div>
      <Modal
        isOpen={openTableModal}
        className="msh__header_left-table-modal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <div className="p-line">
          <label htmlFor="room">Room</label>
          <input
            id="room"
            value={tempObj['room']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="style">Style</label>
          <input
            id="style"
            value={tempObj['style']}
            onChange={(e) => handleChangeInput(e)}
          />
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
          <input
            id="intColor"
            value={tempObj['intColor']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="extColor">Ext Color</label>
          <input
            id="extColor"
            value={tempObj['extColor']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="foam">FOAM</label>
          <input
            id="foam"
            value={tempObj['foam']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="temp">Temp</label>
          <input
            id="temp"
            value={tempObj['temp']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="obsc">OBSC</label>
          <input
            id="obsc"
            value={tempObj['obsc']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="energy">Energy</label>
          <input
            id="energy"
            value={tempObj['energy']}
            onChange={(e) => handleChangeInput(e)}
          />
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
        <div className="modal_footer">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={() => setOpenTableModal(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default MeasureSheet;
