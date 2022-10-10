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
import Signature from '../Signature';
import { updateValue } from '../../store/slices/salesmanSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

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
    dispatch(updateValue({ id: 'signature', value: value }));
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
    </div>
  );
};

export default WindowOrder;
