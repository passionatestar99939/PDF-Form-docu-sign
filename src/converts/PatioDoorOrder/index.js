import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Checkbox from '../Checkbox';
import { updateValue } from '../../store/slices/patioDoorOrderSlice';
import { typeOfCheckBox } from '../../constants/variables';

import './style.css';

const PatioDoorOrder = () => {
  const [openTableModal, setOpenTableModal] = useState(false);
  const storeData = useSelector((state) => state.patiodoororder.data);
  const salesData = useSelector((state) => state.salesInfo.data);
  const dispatch = useDispatch();

  const checkIDs = [];

  for (let m = 0; m < 10; m++) {
    checkIDs.push(`patio-door-order__CheckBox-1-1-${m + 1}`);
  }
  for (let m = 0; m < 12; m++) {
    checkIDs.push(`patio-door-order__CheckBox-1-2-${m + 1}`);
  }
  for (let m = 0; m < 6; m++) {
    checkIDs.push(`patio-door-order__CheckBox-1-3-${m + 1}`);
  }
  for (let m = 0; m < 9; m++) {
    checkIDs.push(`patio-door-order__CheckBox-2-1-${m + 1}`);
  }
  for (let m = 0; m < 14; m++) {
    checkIDs.push(`patio-door-order__CheckBox-2-2-${m + 1}`);
  }
  for (let m = 0; m < 15; m++) {
    checkIDs.push(`patio-door-order__CheckBox-2-3-${m + 1}`);
  }
  for (let m = 0; m < 15; m++) {
    checkIDs.push(`patio-door-order__CheckBox-2-4-${m + 1}`);
  }
  for (let m = 0; m < 3; m++) {
    checkIDs.push(`patio-door-order__CheckBox-3-2-${m + 1}`);
  }

  let indexOfCheckIDs = 0;

  const pos = useRef({
    i: -1,
    j: -1,
  });

  const Component11 = () => {
    indexOfCheckIDs = 0;
    return (
      <div
        onClick={() => handleClick(1, 1)}
        className="col border component-i-j"
      >
        <div className="text-center underline bold">
          2 PANEL SIZES (XO,OX) - KD or SET-UP
        </div>
        <div className="flex space-between">
          <div className="col flex">
            <ul>
              <div className="text-center underline bold">QTY</div>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="space"></div>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <div className="space"></div>
              <li>5/0 X 6/8</li>
              <li>6/0 X 6/8</li>
              <li>8/0 X 6/8</li>
              <div className="space"></div>
              <li>5/0 X 8/0</li>
              <li>6/0 X 8/0</li>
              <li>8/0 X 8/0</li>
            </ul>
          </div>

          <div className="col flex">
            <ul>
              <div className="text-center underline bold">
                Exact Sizes of Stock
              </div>
              <li>58-7/8 X 79-1/2</li>
              <li>70-7/8 X 79-1/2</li>
              <li>94-1/2 X 79-1/2</li>
              <div className="space"></div>
              <li>58-7/8 X 95-1/2</li>
              <li>70-7/8 X 95-1/2</li>
              <li>94-1/2 X 95-1/2</li>
            </ul>
          </div>

          <div className="col">
            <div className="flex">
              <ul>
                <div className="space"></div>
                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>

                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>
              </ul>
              <ul>
                <div className="text-center underline bold">Handing</div>
                <li>OX</li>
                <li>XO</li>
              </ul>
            </div>
            <div className="space"></div>
            <div style={{ border: '3px solid black' }}>
              <div className="text-center underline bold">Must Select</div>
              <div className="flex">
                <ul>
                  <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                    <Checkbox
                      checkId={checkIDs[indexOfCheckIDs]}
                      updateCheck={handleChange}
                      checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                      isInputEnable={openTableModal}
                      type={typeOfCheckBox.PatioDoorOrder}
                    ></Checkbox>
                  </div>

                  <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                    <Checkbox
                      checkId={checkIDs[indexOfCheckIDs]}
                      updateCheck={handleChange}
                      checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                      isInputEnable={openTableModal}
                      type={typeOfCheckBox.PatioDoorOrder}
                    ></Checkbox>
                  </div>

                  <div className="space"></div>
                </ul>
                <ul>
                  <li>KD</li>
                  <li>SET-UP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Component12 = () => {
    indexOfCheckIDs = 10;

    return (
      <div
        onClick={() => handleClick(1, 2)}
        className="col border component-i-j"
      >
        <div className="text-center underline bold">
          3 PANEL SIZES (OXO) - KD ONLY
        </div>
        <div className="flex space-between">
          <div className="col flex">
            <ul>
              <div className="text-center underline bold">QTY</div>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <div className="space"></div>
              <li>9/0 X 6/8</li>
              <li>12/0 X 6/8</li>
              <li>9/0 X 8/0</li>
              <li>12/0 X 8/0</li>
            </ul>
          </div>

          <div className="col flex">
            <ul>
              <div className="text-center underline bold">
                Exact Sizes of Stock
              </div>
              <li>106-1/4 X 79-1/2</li>
              <li>141-11/16 X 79-1/2</li>
              <li>106-1/4 X 95-1/2</li>
              <li>141-11/16 X 95-1/2</li>
            </ul>
          </div>

          <div className="col">
            <div className="flex">
              <ul>
                <div className="space"></div>
                <div className="patio-door-order__CheckBox patio-door-order__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>

                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>
              </ul>
              <ul>
                <div className="text-center underline bold">Handing</div>
                <li>OXRO</li>
                <li>OXLO</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div className="text-center underline bold">
          3 PANEL SIZES (XOO, OOX)
        </div>
        <div className="flex">
          <div className="col flex">
            <ul>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <li>9/0 X 6/8</li>
              <li>12/0 X 6/8</li>
              <li>9/0 X 8/0</li>
              <li>12/0 X 8/0</li>
            </ul>
          </div>

          <div className="col flex">
            <ul>
              <li>103-1/2 X 79-1/2</li>
              <li>138-15/16 X 79-1/2</li>
              <li>103-1/2 X 95-1/2</li>
              <li>138-15/16 X 95-1/2</li>
            </ul>
          </div>

          <div className="col">
            <div className="flex">
              <ul>
                <div className="space"></div>
                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>

                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width1">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>
              </ul>
              <ul>
                <div className="text-center underline bold">Handing</div>
                <li>XOO</li>
                <li>OOX</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    );
  };
  const Component13 = () => {
    indexOfCheckIDs = 22;
    return (
      <div
        onClick={() => handleClick(1, 3)}
        className="col border component-i-j"
      >
        <div className="text-center underline bold">
          2 PANEL SIZES (XO,OX) - KD or SET-UP
        </div>
        <div className="flex">
          <div className="col flex">
            <ul>
              <div className="text-center underline bold">QTY</div>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="space"></div>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <div className="space"></div>
              <li>10/0 X 6/8</li>
              <li>12/0 X 6/8</li>
              <li>16/0 X 6/8</li>
              <div className="space"></div>
              <li>10/0 X 8/0</li>
              <li>12/0 X 8/0</li>
              <li>16/0 X 8/0</li>
            </ul>
          </div>

          <div className="col flex">
            <ul>
              <div className="text-center underline bold">
                Exact Sizes of Stock
              </div>
              <li>115-7/16 X 79-1/2</li>
              <li>139-7/16 X 79-1/2</li>
              <li>186-11/16 X 79-1/2</li>
              <div className="space"></div>
              <li>115-7/16 X 95-1/2</li>
              <li>139-7/16 X 95-1/2</li>
              <li>186-11/16 X 95-1/2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const Component21 = () => {
    indexOfCheckIDs = 28;

    return (
      <div
        onClick={() => handleClick(2, 1)}
        className="col border component-i-j"
        style={{ position: 'relative' }}
      >
        <div>
          <div className="text-center underline bold">INTERIOR COLOR KEYS</div>
          <div className="flex">
            <ul>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <li>WHITE - EXTRUDED</li>
              <li>ALMOND - EXTRUDED</li>
              <li>CLAY - EXTRUDED</li>
              <li>BLACK - PAINTED INT./BLACK EXT.</li>
              <div className="space"></div>
              <li>HILLSIDE OAK - LAMINATE</li>
              <li>NATURAL OAK - LAMINATE</li>
              <li>COLONIAL CHERRY - LAMINATE</li>
              <li className="italic-font">
                * Woodgrains not available with alm/clay
              </li>
              <li className="italic-font">
                extrusion; need to select alm/clay ext. paint
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-0">
          <div className="text-center underline bold">BLINDS BETWEEN GLASS</div>
          <div className="flex">
            <ul>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <li>AVAILABLE FOR 5/0 X 6/8, 6/0 X 6/8,</li>
              <li>9/0 X 6/8, 10/0 X 6/8, 12/0 X 6/8</li>
              <li>*HARD COAT LOW-E STANDARD</li>
              <li>*BLIND SHADES ARE WHITE</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const Component22 = () => {
    indexOfCheckIDs = 37;

    return (
      <div
        onClick={() => handleClick(2, 2)}
        className="col border component-i-j"
      >
        <div className="text-center underline bold">EXTERIOR COLOR KEYS</div>
        <div className="flex">
          <ul>
            <div
              checkId="patio-door-order__CheckBox-2-2-1"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-2"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-3"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div className="space"></div>
            <div
              checkId="patio-door-order__CheckBox-2-2-4"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-5"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-6"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-7"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-8"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-9"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-10"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-11"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-12"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-13"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
            <div
              checkId="patio-door-order__CheckBox-2-2-14"
              className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2"
            >
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>WHITE - EXTRUDED</li>
            <li>ALMOND - EXTRUDED</li>
            <li>CLAY - EXTRUDED</li>
            <div className="space"></div>
            <li>BLACK - LAMINATD</li>
            <li>BRONZE - LAMINATED</li>
            <li className="italic-font">*Ext Lamin with white int.</li>
            <li>ALMOND - PAINTED</li>
            <li>CLAY - PAINTED</li>
            <li>COCOA - PAINTED</li>
            <li>CREAM - PAINTED</li>
            <li>BLACK - PAINTED</li>
            <li>SILVER - PAINTED</li>
            <li>GREEN - PAINTED</li>
            <li>BRONZE - PAINTED</li>
            <li className="italic-font">*Ext Point with white or</li>
            <li className="italic-font">almond int; int. woodgrains</li>
          </ul>
        </div>
      </div>
    );
  };
  const Component23 = () => {
    indexOfCheckIDs = 51;

    return (
      <div
        onClick={() => handleClick(2, 3)}
        className="col border component-i-j"
      >
        <div className="text-center underline bold">HARDWARE</div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>2 POINT, NON-KEYED LOCK</li>
            <li>2 POINT, KEYED LOCK</li>
            <li>2 POINT, SS LOCK</li>
            <li>SS ROLLER HOUSING</li>
          </ul>
        </div>

        <div className="text-center underline bold">HARDWARE COLORS</div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>STANDARD (COLOR MATCHED)</li>
            <li>BRASS</li>
            <li>
              BLACK NICKEL
              <small className="italic-font">(Standard with block int.)</small>
            </li>
            <li>BRUSHED CHROME</li>
            <li>BRIGHT CHROME</li>
            <li>BLACK EXT/WHITE INT</li>
          </ul>
        </div>
        <div className="text-center underline bold">INSULATED GLASS UNITS</div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>CLEAR GLASS</li>
            <li>
              SOLARZONE <small>(7036)</small>
            </li>
            <li>
              SOLARZONE ELITE <small>(5527)</small>
            </li>
            <li>
              SOLARZONE SUNSHIELD <small>(CARD340)</small>
            </li>
            <li>
              SOLARZONE EXTREME <small>(TRPLGLAZED)</small>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  const Component24 = () => {
    indexOfCheckIDs = 66;

    return (
      <div
        onClick={() => handleClick(2, 4)}
        className="col border component-i-j"
      >
        <div className="text-center bold underline">SCREEN</div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>SCREEN</li>
          </ul>
        </div>
        <div className="space"></div>

        <div className="text-center bold underline">GRID TYPE</div>
        <div className="flex">
          <div className="flex">
            <ul>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <li>5/8"FLAT</li>
              <li>7/8"FLAT</li>
            </ul>
          </div>
          <div className="flex">
            <ul>
              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>

              <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                <Checkbox
                  checkId={checkIDs[indexOfCheckIDs]}
                  updateCheck={handleChange}
                  checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                  isInputEnable={openTableModal}
                  type={typeOfCheckBox.PatioDoorOrder}
                ></Checkbox>
              </div>
            </ul>
            <ul>
              <li>11/16"SCULP</li>
              <li>15/16"SCULP</li>
            </ul>
          </div>
        </div>

        <div className="text-center bold underline">GRID PATTERN</div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>COLONIAL</li>
            <li>PERIMETER BY PANEL</li>
            <li>PERIMETER BY DOOR</li>
            <li>DIAMOND</li>
            <li>CRAFTSMAN (QUEEN ANNE)</li>
          </ul>
        </div>

        <div className="text-center bold underline">
          FIELD APPLIED ACCESSORIES
        </div>
        <div className="flex">
          <ul>
            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>

            <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
              <Checkbox
                checkId={checkIDs[indexOfCheckIDs]}
                updateCheck={handleChange}
                checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                isInputEnable={openTableModal}
                type={typeOfCheckBox.PatioDoorOrder}
              ></Checkbox>
            </div>
          </ul>
          <ul>
            <li>JAMB COVER</li>
            <li>GROOVE COVER</li>
            <li>
              FOOTLOCK
              <small className="italic-font">Color matched</small>
            </li>
            <li>
              SECURITY BARD
              <small className="italic-font">(white only)</small>
            </li>
            <li>SLIDE-IN SEALING FIN</li>
          </ul>
        </div>
      </div>
    );
  };
  const Component31 = () => {
    return (
      <div className="width-70 connected-border">
        <div className="underline bold">
          ADDITIONAL INSTRUCTIONS: IF ORDERING A FIELD-MULLED TRANSOM OR
          SIDELIGHT, PLEASE LIST BELOW
        </div>
        <div className="space"></div>
        <div className="flex">
          <div className="col">
            <ul>
              <div className="space"></div>
              <div className="text-center underline bold">STOCK</div>
              <li>2/6 X 6/8</li>
              <li>3/0 X 6/8</li>
              <li>Custom</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <div className="text-center underline bold">Sidelites</div>
              <div className="text-center underline bold">
                EXACT SIZE OF STOCK
              </div>
              <li>32.3125 X 79.5</li>
              <li>38.3125 X 79.5</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const Component32 = () => {
    indexOfCheckIDs = 81;
    return (
      <div
        onClick={() => handleClick(3, 2)}
        className="width-30 connected-border component-i-j"
      >
        <div className="flex">
          <div>
            <div className="text-center bold underline">COASTAL UPGRADES</div>
            <div className="flex">
              <ul>
                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>

                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>

                <div className="patio-door-order_convert__CheckBox patio-door-order_convert__CheckBox-Width2">
                  <Checkbox
                    checkId={checkIDs[indexOfCheckIDs]}
                    updateCheck={handleChange}
                    checkVal={storeData[checkIDs[indexOfCheckIDs++]]}
                    isInputEnable={openTableModal}
                    type={typeOfCheckBox.PatioDoorOrder}
                  ></Checkbox>
                </div>
              </ul>
              <ul>
                <li>IMPACT</li>
                <li>DP50 UPGRADE</li>
                <li>LAMINATED</li>
              </ul>
            </div>
          </div>
          <div className="border-left"></div>
          <div>
            <div className="text-center bold underline">STANDARD FEATURES</div>
            <div className="flex">
              <ul>
                <li className="italic-font">*DUAL STRENGTH TEMPERED</li>
                <li className="italic-font">2 POINT BOLT STYLE</li>
                <li className="italic-font">BRUSHED CHROME ON PAINTED</li>
                <li className="italic-font">EXT. OR ON INT. LAMI</li>
                <li className="italic-font">ARGON FILLED</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
  };

  const handleClick = (i, j) => {
    pos.current = { i, j };
    setOpenTableModal(true);
  };

  return (
    <div class="patio-door-order_convert">
      <div className="Patio_Information">
        <table>
          <tr>
            <td>WW Location</td>
            <td>
              <div className="border-bottom big-font-convert blue-font Width300">
                {salesData.salesLocation}
              </div>
            </td>
          </tr>
          <tr>
            <td>WW Sales Rep</td>
            <td>
              <div className="border-bottom big-font-convert blue-font Width300">
                {salesData.salesConsultant.split(' ')[0] +
                  ' - ' +
                  salesData.repNumber}
              </div>
            </td>
          </tr>
          <tr>
            <td>WW Location Phone #</td>
            <td>
              <div className="border-bottom big-font-convert blue-font Width300">
                {salesData.salesPhone}
              </div>
            </td>
          </tr>
          <tr>
            <td>Today's Date</td>
            <td>
              <div className="border-bottom big-font-convert blue-font Width300">
                {salesData.date}
              </div>
            </td>
          </tr>
          <tr>
            <td>Purchase Order #</td>
            <td>
              <div className="border-bottom Height100 big-font-convert blue-font Width300"></div>
            </td>
          </tr>
          <tr>
            <td>Homeowner Name</td>
            <td>
              <div className="border-bottom big-font-convert blue-font blue-font">
                {salesData.customer}
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="main-table">
        <div className="text-center white-color">
          <img src="/images/black.png" width="100%" height="12px" alt="black" />
          <p style={{ marginTop: '-13px' }}>
            1615/1617 Series patio-door-order Door
          </p>
        </div>
        <div className="flex">
          <div className="width-35 connected-border">
            <Component11 />
          </div>
          <div className="width-35 connected-border">
            <Component12 />
          </div>
          <div className="width-30 connected-border">
            <Component13 />
          </div>
        </div>
        <div className="flex">
          <div className="width-35 connected-border">
            <div className="text-center underline bold">Custom Size:</div>
            {storeData.customSize1 && (
              <div className="text-center">{storeData.customSize1}</div>
            )}
            {!storeData.customSize1 && (
              <div>
                <div className="space"></div>
                <div className="space"></div>
              </div>
            )}
          </div>
          <div className="width-35 connected-border">
            <div className="text-center underline bold">Custom Size:</div>
            {storeData.customSize2 && (
              <div className="text-center">{storeData.customSize2}</div>
            )}
            {!storeData.customSize2 && (
              <div>
                <div className="space"></div>
                <div className="space"></div>
              </div>
            )}
          </div>
          <div className="width-30 connected-border">
            <div className="text-center underline bold">Custom Size:</div>
            {storeData.customSize3 && (
              <div className="text-center">{storeData.customSize3}</div>
            )}
            {!storeData.customSize3 && (
              <div>
                <div className="space"></div>
                <div className="space"></div>
              </div>
            )}
          </div>
        </div>
        <img src="/images/black.png" width="100%" height="12px" alt="black" />
        <div className="flex">
          <div className="width-70 connected-border flex">
            <Component21 />
            <Component22 />
            <Component23 />
          </div>
          <div className="width-30 connected-border flex flex__right-direction">
            <Component24 />
          </div>
        </div>
        <img src="/images/black.png" width="100%" height="12px" alt="black" />
        <div className="flex">
          <Component31 />
          <Component32 />
        </div>
        <img src="/images/black.png" width="100%" height="12px" alt="black" />
      </div>
    </div>
  );
};

export default PatioDoorOrder;
