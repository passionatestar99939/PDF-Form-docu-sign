import React, { useCallback, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { initDataOfWindowOrder, interiorColor, exteriorColor } from "../../constants/variables";
import {
  updateMainTable,
  updateDrawingData,
} from "../../store/slices/windoworderSlice";

import "./style.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th rowSpan='2'>No.</th>
        <th rowSpan='2'>Qty</th>
        <th rowSpan='2'>Type</th>
        <th rowSpan='2'>Series</th>
        <th rowSpan='2'>Foam Frame</th>
        <th>Frame</th>
        <th colSpan='3'>Exact Size</th>
        <th>Sash Split</th>
        <th colSpan='2'>Color</th>
        <th colSpan='3'>Screen</th>
        <th colSpan='3'>Grids</th>
        <th>Pattern</th>
        <th>Blinds</th>
        <th colSpan='10'>
          Glass Options T=Top B=Bottom A=Both / For P&Q STC-select type of Loe{" "}
        </th>
        <th colSpan='3'>Casement</th>
        <th colSpan='2'>Mulls</th>
        <th rowSpan={2}>Additional Comments</th>
      </tr>
      <tr>
        <th>Check box for nailing fin</th>
        <th>Width</th>
        <th>x</th>
        <th>Height</th>
        <th>Oriel (OR) or Cottage (COT)</th>
        <th>Interior</th>
        <th>Exterior</th>
        <th>Half</th>
        <th>Full</th>
        <th>Flex</th>
        <th>5/8 Flat</th>
        <th>11/16 sculp</th>
        <th>1" SDL</th>
        <th>Ex: 3x2/3x2</th>
        <th>Check box for blinds-WHT Standard</th>
        <th>Clear</th>
        <th>LOE SZONE</th>
        <th>HP-LOE SZONE Elite</th>
        <th>LOE 340 SZONE SUNSHLD</th>
        <th>TG2 Argon</th>
        <th>P&Q STC</th>
        <th>Impact 366</th>
        <th>Obsc</th>
        <th>Rain</th>
        <th>Temp</th>
        <th>L</th>
        <th>R</th>
        <th>PW</th>
        <th>FLD</th>
        <th>FAC</th>
      </tr>
    </thead>
  );
};

const data = {
  mainTable: {},
  drawingData: {},
};

for (let i = 0; i < 16; i++) {
  data.mainTable[i] = { ...initDataOfWindowOrder, no: i + 1 };
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
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
    setOpenTableModal(viewMode === "homepage");
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
          <td colSpan='36'>
            <div className='wof__body__footer'>
              <div>
                <p className='wof-text'>
                  Drawings or Additional Special Instructions
                </p>
              </div>
              <div className='wof__body__footer__right'>
                <table className='wof__body__footer__table'>
                  <thead>
                    <tr>
                      <th>Interior Color Keys</th>
                      <th>Exterior Color Keys</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className='wof__body__footer__table__p'>
                          1 White - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          2 Almond - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          3 Clay - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          4 Hillside Oak - Laminated
                        </p>
                        <p className='wof__body__footer__table__p'>
                          5 Natural Oak - Laminated
                        </p>
                        <p className='wof__body__footer__table__p'>
                          6 Colonial Cherry - Laminated
                        </p>
                        <p className='wof__body__footer__table__p'>
                          7 Black Interior - Painted
                        </p>
                        <br />
                        <br />
                        <br />
                        <p className='wof-text'>
                          * Clay extruded only avaialble on 4000 Series{" "}
                        </p>
                        <p className='wof-text'>
                          * Alm/Clay extruded not avaialble with interior
                          laminated; alm/clay paint only
                        </p>
                      </td>
                      <td>
                        <p className='wof__body__footer__table__p'>
                          **FlexScreen standard on all painted products**
                        </p>
                        <p className='wof__body__footer__table__p'>
                          1 White - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          2 Almond - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          3 Clay - Extruded
                        </p>
                        <p className='wof__body__footer__table__p'>
                          4 Almond - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          5 Clay - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          6 Cocoa - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          7 Black - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          8 Cream - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          9 Silver - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          10 Green - Painted
                        </p>
                        <p className='wof__body__footer__table__p'>
                          11 Bronze - Painted
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    );
  };

  return (
    <div className='wof-container'>
      <div className='wof__header'>
        <div className='wof__contact'>
          <table className='wof__contact__table'>
            <tbody>
              <tr>
                <td>
                  <p className='wof-top-left-text'>WW Location & Account #:</p>
                  <p className='wof__contact-text'>{salesInfo.account}</p>
                </td>
                <td>
                  <p className='wof-top-left-text'>WW Sales Rep Name:</p>
                  <p className='wof__contact-text'>Nick Tisdale</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className='wof-top-left-text'>Date:</p>
                  <p className='wof__contact-text'>9/18/2022</p>
                </td>
                <td>
                  <p className='wof-top-left-text'>WW Sales Rep Number:</p>
                  <p className='wof__contact-text'>005</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className='wof-top-left-text'>Homeowner Name:</p>
                  <p className='wof__contact-text'>Smith, Jerry</p>
                </td>
                <td>
                  <p className='wof-top-left-text'>WW PO #:</p>
                  <p className='wof__contact-text'> </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='wof__body'>
        <div className='d-flex'>
          <div className='flex-col-60'>
            <p className='wof-text text-center'>
              Color Options**See chart below
            </p>
          </div>
          <div className='flex-col-40'>
            <p className='wof-text text-center'>
              * Some products and/or options require additional lead times
            </p>
          </div>
        </div>
        <table className='wof__body-table'>
          <TableHeader />
          <TableBody />
          <TableFooter />
        </table>
      </div>
      <div className='wof__footer borderd'>
        <div className='wof__footer__col right-borderd'>
          <div className='d-flex bottom-borderd'>
            <div className='flex-grow-1'>
              <p className='wof__footer-text'>
                <b>Type: </b>
              </p>
              <p className='wof__footer-text'>DH = Double Hung</p>
              <p className='wof__footer-text'>DH2 = DH Twin</p>
              <p className='wof__footer-text'>DH3 = DH Triple</p>
              <p className='wof__footer-text'>SH = Single Hung</p>
              <p className='wof__footer-text'>AWN = Awning</p>
            </div>
            <div className='flex-grow-1'>
              <p className='wof__footer-text'>CAS = Casement</p>
              <p className='wof__footer-text'>CAS2 = 2 Lite Casement</p>
              <p className='wof__footer-text'>CAS3 = 3 Lite Casement</p>
              <p className='wof__footer-text'>CASPW = Casement Picture Wdw</p>
              <p className='wof__footer-text'>DHPW = Double-Hung Picture Wdw</p>
              <p className='wof__footer-text'>SHPW = Single-Hung Picture Wdw</p>
            </div>
            <div className='flex-grow-1'>
              <p className='wof__footer-text'>&nbsp;</p>
              <p className='wof__footer-text'>1LS = 1-Lite Slider</p>
              <p className='wof__footer-text'>2LS = 2 Lite Slider</p>
              <p className='wof__footer-text'>3LS = 3 Lite Slider</p>
              <p className='wof__footer-text'>BAS = Basement</p>
              <p className='wof__footer-text'>SP = Specialty</p>
            </div>
          </div>
          <div className='d-flex bottom-borderd'>
            <div className='flex-col-60 flex-grow-1 right-borderd'>
              <p className='wof__footer-text'>
                <b>Series Type Availability:</b>
              </p>
              <p className='wof__footer-text underline-text'>
                <b>Double Hung</b>
              </p>
            </div>
            <div className='flex-col-40 flex-grow-1'>
              <p className='wof__footer-text'>&nbsp;</p>
              <p className='wof__footer-text underline-text'>
                <b>Single Hung-PA Plant</b>
              </p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='flex-col-60 flex-grow-1 right-borderd'>
              <p className='wof__footer-text'>2000 Series-DH, PW</p>
              <p className='wof__footer-text'>
                4000 Series-DH,SL,SL3,AWN,CAS,PW, SP, BASE
              </p>
              <p className='wof__footer-text'>
                6000 Series - DH, SL, SL3, AWN, CAS, PW, SP
              </p>
            </div>
            <div className='flex-col-40 flex-grow-1'>
              <div className='bottom-borderd'>
                <p className='wof__footer-text'>1000 Series-1255 SH (2-7/8")</p>
                <p className='wof__footer-text'>1000 Series-1355 SH (3-1/4")</p>
              </div>
              <div className='bottom-borderd'>
                <p className='wof__footer-text underline-text'>
                  <b>Single Hung-TX</b>
                </p>
              </div>
              <div>
                <p className='wof__footer-text'>1000 Series-1255 SH (2-7/8")</p>
                <p className='wof__footer-text'>4000 Series-1620 SH (3-1/4")</p>
              </div>
            </div>
          </div>
        </div>

        <div className='wof__footer__col right-borderd'>
          <p className='wof__footer-text'>
            Grids: Standard grid patterns will be used unless customer specifies
            acceptable grid pattern.
          </p>
          <p className='wof__footer-text'>
            3-Lite sliders will default to 1/4, 1/2, 1/4 unless specified to be
            1/3, 1/3, 1/3.
          </p>
          <p className='wof__footer-text'>
            Please specify Top, Bottom, or Both when ordering Obscure or
            Tempered; Rain Both only.
          </p>
          <p className='wof__footer-text'>
            {" "}
            All DH triple units will be 1/3x1/3x1/3 unless otherwise specified.
          </p>
          <p className='wof__footer-text'>
            Mulled Units: Please order overall width on one line, when ordering
            twins or triple.
          </p>
          <p className='wof__footer-text'>
            {" "}
            Foam Enhanced Frame and Triple Pane Glass with Low E/Argon Standard
            on 6000 Series DH/PW/SP only.
          </p>
          <p className='wof__footer-text'>
            Casement twins will be hinge left/right standard unless otherwise
            specified.
          </p>
          <p className='wof__footer-text'>
            {" "}
            Please refer to min/max sheets for limitations and manufacturing
            increments.
          </p>
          <p className='wof__footer-text'>
            Blinds-between-the-glass will be raise, lower, tilt operation
            standard. Tilt only is optional.
          </p>
          <p className='wof__footer-text'>
            Blinds-between-the-glass color options: white, sand, espresso, tan,
            slate gray, silver moon.
          </p>
        </div>

        <div className='wof__footer__col'>
          <div className='bg-black p-5 bottom-borderd'>
            <p className='wof__footer-text'>
              *All Replacement Windows are custom made to your specifications.
            </p>
            <p className='wof__footer-text'>
              Once the order has been placed into production, no changes can be
              made and
            </p>
            <p className='wof__footer-text'>
              windows must be accepted. Please check your order for confirmation
              and accuracy.
            </p>
          </div>
          <div className='bottom-borderd'>
            <p className='wof__footer-text'>Order not valid unless signed</p>
            <br />
            <p className='wof__footer-text'>X</p>
          </div>
          <div className='bottom-borderd'>
            <p className='wof__footer-text'>Name: </p>
            <br />
            <br />
          </div>
          <div>
            <p className='wof__footer-text'>Date: </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openTableModal}
        className='wof__table_modal'
        overlayClassName='myoverlay'
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
              <option key={index} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="p-line">
          <label htmlFor="extColor">Exterior Color</label>
          <select id="extColor" onChange={(e) => handleChangeInput(e)}>
            {exteriorColor.map((value, index) => (
              <option key={index} value={value}>{value}</option>
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
          <button onClick={handleSave}>Save</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={() => setOpenTableModal(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default WindowOrder;
