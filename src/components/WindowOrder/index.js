import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  initDataOfWindowOrder,
  interiorColor,
  exteriorColor,
} from '../../constants/variables';
import {
  updateMainTable,
  updateDrawingData,
} from '../../store/slices/windoworderSlice';

import './style.css';

const data = {
  mainTable: {},
  drawingData: {},
};

for (let i = 0; i < 16; i++) {
  data.mainTable[i] = { ...initDataOfWindowOrder, no: i + 1 };
}

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
  const viewMode = useSelector((state) => state.option.data.viewMode);
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
              {/* <Signature
                width={333}
                height={50}
                signId="signature"
                updateSign={handleSign}
                setVal={storeData['signature']}
                signStatus={signStatus}
                viewMode={viewMode}
              /> */}
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
          <label htmlFor="qty">Quantity</label>
          <input
            id="qty"
            value={tempObj['qty']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="type">Type</label>
          <input
            id="type"
            value={tempObj['type']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="series">Series</label>
          <input
            id="series"
            value={tempObj['series']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="foamFrame">Foam Frame</label>
          <input
            id="foamFrame"
            value={tempObj['foamFrame']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="frame">Frame</label>
          <input
            id="frame"
            value={tempObj['frame']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="szWidth">Exact Size Width</label>
          <input
            id="szWidth"
            value={tempObj['szWidth']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="szHeight">Exact Size Height</label>
          <input
            id="szHeight"
            value={tempObj['szHeight']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="split">Sash Split</label>
          <input
            id="split"
            value={tempObj['split']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="intColor">Interior Color</label>
          <select id="intColor" onChange={(e) => handleChangeInput(e)}>
            {interiorColor.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="extColor">Exterior Color</label>
          <select id="extColor" onChange={(e) => handleChangeInput(e)}>
            {exteriorColor.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="screenHalf">Screen Half</label>
          <input
            id="screenHalf"
            value={tempObj['screenHalf']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="screenFull">Screen Full</label>
          <input
            id="screenFull"
            value={tempObj['screenFull']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="screenFlex">Screen Flex</label>
          <input
            id="screenFlex"
            value={tempObj['screenFlex']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="gridsFlat">Grids 5/8 Flat</label>
          <input
            id="gridsFlat"
            value={tempObj['gridsFlat']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="gridsSculp">Grids 11/16 sculp</label>
          <input
            id="gridsSculp"
            value={tempObj['gridsSculp']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="gridsSDL">Grids 1" SDL</label>
          <input
            id="gridsSDL"
            value={tempObj['gridsSDL']}
            onChange={(e) => handleChangeInput(e)}
          />
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
          <input
            id="blinds"
            value={tempObj['blinds']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="clear">Clear</label>
          <input
            id="clear"
            value={tempObj['clear']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="szone">LOE SZONE</label>
          <input
            id="szone"
            value={tempObj['szone']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="elite">HP-LOE SZONE Elite</label>
          <input
            id="elite"
            value={tempObj['elite']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="sunshld">LOE 340 SZONE SUNSHLD</label>
          <input
            id="sunshld"
            value={tempObj['sunshld']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="argon">TG2 Argon</label>
          <input
            id="argon"
            value={tempObj['argon']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="stc">P&Q STC</label>
          <input
            id="stc"
            value={tempObj['stc']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="impact">Impact 366</label>
          <input
            id="impact"
            value={tempObj['impact']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="obsc">Obsc</label>
          <input
            id="obsc"
            value={tempObj['obsc']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="rain">Rain</label>
          <input
            id="rain"
            value={tempObj['rain']}
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
          <label htmlFor="casementL">Casement L</label>
          <input
            id="casementL"
            value={tempObj['casementL']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="casementR">Casement R</label>
          <input
            id="casementR"
            value={tempObj['casementR']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="casementPW">Casement PW</label>
          <input
            id="casementPW"
            value={tempObj['casementPW']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="mullFLD">Mulls FLD</label>
          <input
            id="mullFLD"
            value={tempObj['mullFLD']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="mullFAC">Mulls FAC</label>
          <input
            id="mullFAC"
            value={tempObj['mullFAC']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="comment">Additional Comments</label>
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
