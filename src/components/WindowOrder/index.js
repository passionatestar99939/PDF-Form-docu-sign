import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import {
  initDataOfWindowOrder,
  interiorColor,
  exteriorColor,
  typeOfCheckBox,
} from '../../constants/variables';
import {
  updateMainTable,
  updateDrawingData,
} from '../../store/slices/windoworderSlice';

import './style.css';
import Checkbox from '../Checkbox';

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
      'obsc',
      'temp',
      'casementsL',
      'casementsR',
      'casementsPW',
    ];

    return (
      <tbody>
        {data.mainTable &&
          Object.values(windowOrderData.mainTable).map((ele, row_id) => (
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
          <label htmlFor="qty">QTY</label>
          <input
            id="qty"
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
          <input
            id="nailfin"
            value={tempObj['nailfin']}
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
          <label htmlFor="split">SASH SPLIT</label>
          <input
            id="split"
            value={tempObj['split']}
            onChange={(e) => handleChangeInput(e)}
          />
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
          <label htmlFor="grid">GRID</label>
          <input
            id="grid"
            value={tempObj['grid']}
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
          <label htmlFor="energy">ENERGY</label>
          <input
            id="energy"
            value={tempObj['energy']}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="p-line">
          <label htmlFor="obsc">Obsc</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['obsc']}
              checkId={'obsc'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
        </div>
        <div className="p-line">
          <label htmlFor="temp">Temp</label>
          <div className="window-order__check-box">
            <Checkbox
              checkVal={tempObj['temp']}
              checkId={'temp'}
              updateCheck={handleChangeCheckbox}
              isInputEnable={viewMode === 'homepage'}
              type={typeOfCheckBox.PatioDoorOrder}
            />
          </div>
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
