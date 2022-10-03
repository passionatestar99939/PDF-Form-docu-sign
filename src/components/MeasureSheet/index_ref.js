import React, { useCallback, useState, useRef } from "react";
import Modal from "react-modal";

import { measureSheet } from "../../constants/variables";

import "./style.css";

const data = {
  leftTable: {
    tearouts: "WOOD",
    pockets: "WOOD",
    cutbacks: '(-3/8") x (-1/2")',
  },
  rightTable: {
    grid: "NO GRIDS",
    capping: "BRICKMOLD",
  },
  mainTable: [],
};

const initDataOfMainTable = {
  "No.": 0,
  ROOM: "",
  STYLE: "",
  "R.O.WIDTH": "",
  "R.O.HEIGHT": "",
  "ORDER WIDTH": "",
  "ORDER HEIGHT": "",
  "GRIDS/BLINDS": "",
  "INT COLOR": "",
  "EXT COLOR": "",
  FOAM: "",
  TEMP: "",
  OBSC: "",
  ENERGY: "",
  "MULL CUTS": "",
  NOTES: "",
};
for (let i = 0; i < 20; i++) {
  data.mainTable.push({ ...initDataOfMainTable, "No.": i + 1 });
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
  table: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
  },
};

const MeasureSheet = () => {
  const [openRightModal, setOpenRightModal] = useState(false);
  const [openLeftModal, setOpenLeftModal] = useState(false);
  const [openTableModal, setOpenTableModal] = useState(false);

  // const [tempObj, setTempObj] = useState({});
  const tempObjRef = useRef({});
  // const tempObjRef = tempObjRef.current;

  // const [selectedRow, setSelectedRow] = useState(0);\
  const selectedRowRef = useRef(0);
  const selectedRow = selectedRowRef.current;

  const handleLeftModalOpen = () => {
    setOpenLeftModal(true);
  };

  const handleRightModalOpen = () => {
    setOpenRightModal(true);
  };

  const handleChangeLeftSelect = (e) => {
    data.leftTable[e.target.id] = e.target.value;
  };

  const handleChangeRightSelect = (e) => {
    data.rightTable[e.target.id] = e.target.value;
  };

  const handleChangeInput = (e) => {
    tempObjRef.current = {
      ...tempObjRef.current,
      [e.target.id]: e.target.value,
    };
  };

  const handleClickTr = useCallback((row_id) => {
    // setSelectedRow(row_id);
    selectedRowRef.current = row_id;
    // setTempObj({ ...data.mainTable[row_id] });
    tempObjRef.current = { ...data.mainTable[row_id] };
    setOpenTableModal(true);
  }, []);

  const handleSave = () => {
    measureSheet.forEach((value) => {
      data.mainTable[selectedRow][value] = tempObjRef.current[value];
    });
    setOpenTableModal(false);
  };

  const handleClear = () => {
    tempObjRef.current = {
      ...initDataOfMainTable,
      "No.": selectedRow + 1,
    };
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          {measureSheet &&
            measureSheet.map((value, index) => <th key={index}>{value}</th>)}
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    return (
      <tbody>
        {data.mainTable &&
          data.mainTable.map((ele, row_id) => (
            <tr key={row_id} onClick={() => handleClickTr(row_id)}>
              {measureSheet.map((value, index) => (
                <td key={index}>{ele[value]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <div className='msh__container'>
      <div className='msh__header'>
        <div className='msh__header__left flex-col-30'>
          <div className='display-inline-block'>
            <p className='msh-text text-center m-5'>EXISTING WINDOWS</p>
            <div
              className='msh__hover-left-table'
              onClick={handleLeftModalOpen}
            >
              <table className='msh__header__left-table'>
                <tr>
                  <td className='text-right'>TYPE OF WINDOW TEAROUTS</td>
                  <td>{data.leftTable.tearouts}</td>
                </tr>
                <tr>
                  <td className='text-right'>TYPE OF WINDOW POCKET</td>
                  <td>{data.leftTable.pockets}</td>
                </tr>
                <tr>
                  <td className='text-right'>WINDOW CUTBACKS</td>
                  <td>{data.leftTable.cutbacks}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openLeftModal}
          style={customStyles.content}
          className='email-modal'
          overlayClassName='myoverlay'
          closeTimeoutMS={200}
        >
          <div>
            <label htmlFor='tearouts'>TYPE OF WINDOW TEAROUTS</label>
            <select id='tearouts' onChange={(e) => handleChangeLeftSelect(e)}>
              <option
                value='WOOD'
                selected={"WOOD" === data.leftTable.tearouts}
              >
                WOOD
              </option>
              <option
                value='ALUM'
                selected={"ALUM" === data.leftTable.tearouts}
              >
                ALUM
              </option>
              <option
                value='VINYL'
                selected={"VINYL" === data.leftTable.tearouts}
              >
                VINYL
              </option>
              <option
                value='STEEL'
                selected={"STEEL" === data.leftTable.tearouts}
              >
                STEEL
              </option>
            </select>
          </div>
          <div>
            <label htmlFor='pockets'>TYPE OF WINDOW POCKET</label>
            <select id='pockets' onChange={(e) => handleChangeLeftSelect(e)}>
              <option>WOOD</option>
              <option>PLASTER</option>
              <option>DRYWALL</option>
            </select>
          </div>
          <div>
            <label htmlFor='cutbacks'>WINDOW CUTBACKS</label>
            <select id='cutbacks' onChange={(e) => handleChangeLeftSelect(e)}>
              <option>(-3/8” W)</option>
              <option>(-1/2” W) x (-1/2 H)</option>
            </select>
          </div>
          <button onClick={() => setOpenLeftModal(false)}>close</button>
        </Modal>
        <div className='msh__header__center flex-col-40 d-flex flex-direction-column justify-content-end'>
          <p className='m-0'>MEASURE SHEET (ORDER FORM)</p>
        </div>
        <div className='msh__header__right flex-col-30'>
          <div className='msh__header_contact d-flex flex-direction-column'>
            <div className='flex-col-100 bottom-borderd'>
              Customer: Jerry Smith Sales Rep: Nick Tisdale
            </div>
            <div className='flex-col-100 bottom-borderd'>
              PO # Date: 9/12/22
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <table
              className='msh__header__right-table'
              onClick={handleRightModalOpen}
            >
              <tr>
                <td className='text-right'>GRID STYLE</td>
                <td className='text-center'>{data.rightTable.grid}</td>
              </tr>
              <tr>
                <td className='text-right'>CAPPING STYLE</td>
                <td className='text-center'>{data.rightTable.capping}</td>
              </tr>
            </table>
          </div>
        </div>
        <Modal
          isOpen={openRightModal}
          style={customStyles.content}
          className='email-modal'
          overlayClassName='myoverlay'
          closeTimeoutMS={200}
        >
          <div>
            <label htmlFor='grid'>GRID STYLE</label>
            <select id='grid' onChange={(e) => handleChangeRightSelect(e)}>
              <option value='NO GRIDS'>NO GRIDS</option>
              <option value='Flat'>Flat</option>
              <option value='Sculptured'>Sculptured</option>
              <option value='SDL'>SDL</option>
            </select>
          </div>
          <div>
            <label htmlFor='capping'>CAPPING STYLE</label>
            <select id='capping' onChange={(e) => handleChangeRightSelect(e)}>
              <option value='BRICKMOLD'>BRICKMOLD</option>
              <option value='1x4'>1x4</option>
              <option value='1x6'>1x6</option>
              <option value='OTHER'>OTHER</option>
            </select>
          </div>
          <button onClick={() => setOpenRightModal(false)}>close</button>
        </Modal>
      </div>
      <div className='msh__body'>
        <table className='msh__body-table'>
          <TableHeader />
          <TableBody />
        </table>
      </div>
      <Modal
        isOpen={openTableModal}
        style={customStyles.table}
        className='email-modal'
        overlayClassName='myoverlay'
        closeTimeoutMS={200}
      >
        {measureSheet &&
          measureSheet.map(
            (val, index) =>
              val !== "No." && (
                <div key={index}>
                  <label htmlFor={val}>{val}</label>
                  <input
                    id={val}
                    defaultValue={tempObjRef.current[val]}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
              )
          )}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={() => setOpenTableModal(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default MeasureSheet;
