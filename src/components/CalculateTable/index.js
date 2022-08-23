import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { data } from '../../mockup/data';
import { updateValue } from '../../store/slices/calculateSlice';
import { updateData } from '../../store/slices/optionSlice';

import Input from '../Input';
import Signature from '../Signature';
import RoundUpTable from '../RoundUpTable';
import PreBuiltTable from '../PreBuiltTable';
import GlassOptionTable from '../GlassOptionTable';
import WindowWorldTable from '../WindowWorldTable';
import VinylSlidingTable from '../VinylSlidingTable';
import WindowOptionTable from '../WindowOptionTable';
import MiscellenousTable from '../MiscellenousTable';

import './style.css';

const CalculateTable = (props) => {
  const {
    windowWorldTableData,
    glassTableData,
    vinylslidingTableData,
    prebuiltTableData,
    windowOptionTableData,
    miscellaneousTableData,
    roundUpTableData,
  } = data;

  const storeData = useSelector((state) => state.calculate.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const [contractSubTotal, setContractSubTotal] = useState(
    storeData['contractsubtotal']
  );
  const [disposalFee, setDisposalFee] = useState(storeData['calculateInput1']);
  const [measureFee, setMeasureFee] = useState(storeData['calculateInput2']);
  const [monthlyCash, setMonthlyCash] = useState(storeData['monthly1']);
  const [monthly, setMonthly] = useState(storeData['monthly2']);

  const [windowWorldPrice, setWindowWorldPrice] = useState(0);
  const [glassOptionPrice, setGlassOptionPrice] = useState(0);
  const [vinylslidginPrice, setVinylSlidingPrice] = useState(0);
  const [prebuiltPrice, setPrebuiltPrice] = useState(0);
  const [windowOptionPrice, setWindowOptionPrice] = useState(0);
  const [miscellaneousPrice, setMiscellaneousPrice] = useState(0);
  const [roundupPrice, setRoundupPrice] = useState(0);

  const [windowTableState, setWindowTableState] =
    useState(windowWorldTableData);
  const [glassTableState, setGlassTableState] = useState(glassTableData);
  const [vinylTableState, setVinylTableState] = useState(vinylslidingTableData);
  const [prebuiltTableState, setPrebuiltTableState] =
    useState(prebuiltTableData);
  const [windowOptionTableState, setWindowOptionTableState] = useState(
    windowOptionTableData
  );
  const [miscellaneousTableState, setMiscellaneousTableState] = useState(
    miscellaneousTableData
  );
  const [roundupTableState, setRoundupTableState] = useState(roundUpTableData);

  const updateWindowTable = (data) => {
    setWindowWorldPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));

    setWindowTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updateGlassTable = (data) => {
    setGlassOptionPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setGlassTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updateVinylTable = (data) => {
    setVinylSlidingPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setVinylTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updatePrebuiltTable = (data) => {
    setPrebuiltPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setPrebuiltTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updateWindowOptionTable = (data) => {
    setWindowOptionPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setWindowOptionTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updateMiscellaneousTable = (data) => {
    console.log(data);
    setMiscellaneousPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setMiscellaneousTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  const updateRoundUpTable = (data) => {
    console.log(data);
    setRoundupPrice(data.price);
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
    dispatch(updateValue({ id: 'contractsubtotal', count: contractSubTotal }));
    dispatch(updateValue({ id: 'calculateInput1', count: disposalFee }));
    dispatch(updateValue({ id: 'calculateInput2', count: measureFee }));
    dispatch(updateValue({ id: 'monthly1', count: monthlyCash }));
    dispatch(updateValue({ id: 'monthly2', count: monthly }));
    setRoundupTableState((state) => {
      return state.map((item) => {
        if (item.id === data.id) {
          return { ...item, count: data.count };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    setContractSubTotal(
      windowWorldPrice +
        glassOptionPrice +
        vinylslidginPrice +
        prebuiltPrice +
        windowOptionPrice +
        miscellaneousPrice +
        roundupPrice
    );
  }, [
    windowWorldPrice,
    glassOptionPrice,
    vinylslidginPrice,
    prebuiltPrice,
    windowOptionPrice,
    miscellaneousPrice,
    roundupPrice,
    disposalFee,
    measureFee,
  ]);

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, count: value }));
  };

  const handleSign1 = (value) => {
    dispatch(updateValue({ id: 'signature1', count: value }));
  };

  const handleSign2 = (value) => {
    dispatch(updateValue({ id: 'signature2', count: value }));
  };

  const handleDoorClick = (value) => {
    if (storeData[value] === '') dispatch(updateValue({ id: value, count: 'cross' }));
    else if (storeData[value] === 'cross') dispatch(updateValue({ id: value, count: 'circle' }));
    else dispatch(updateValue({ id: value, count: '' }));
  };

  const DoorHandle = ({ handleId }) => (
    <>
      {storeData[handleId] === 'cross' && <img src="/images/cross.png" alt="cross" />}
      {storeData[handleId] === 'circle' && <img src="/images/circle.png" alt="circle" />}
      {storeData[handleId] === '' && <img src="/images/empty.png" alt="empty" />}
    </>
  );

  return (
    <div className="bold-letter">
      <div className="calculatetable box font-14">
        <div className="main-table table-box width-50">
          <WindowWorldTable
            data={windowTableState}
            updateWindowTable={updateWindowTable}
          />

          <VinylSlidingTable
            data={vinylTableState}
            updateVinylTable={updateVinylTable}
          />
          <div className="outsidelooking">
            <div className="wrapper">
              <div>
                <label>Color</label>
                <input className="bottom-outline width-50px" onChange={(e) => dispatch(updateValue({ id: 'color', value: e.target.value }))} value={storeData['color']} />
              </div>
              <div className="table-title">
                <strong>(Outside Looking In)</strong> Door Handle
                <input className="bottom-outline width-50px" onChange={(e) => dispatch(updateValue({ id: 'handle', value: e.target.value }))} value={storeData['handle']} />
              </div>
            </div>
            <div className="wrapper">
              <div>
                <label>Initial</label>
                <Signature
                  width={95}
                  height={28}
                  signId="signature1"
                  updateSign={handleSign1}
                  setVal={storeData['signature1']}
                  viewMode={viewMode}
                />
              </div>
              <div className="wrapper-center" style={{ marginTop: "2px" }}>
                <div className="handle-box" onClick={() => handleDoorClick('handleBox1')}>
                  <DoorHandle handleId="handleBox1" />
                </div>
                <div className="handle-box" onClick={() => handleDoorClick('handleBox2')}>
                  <DoorHandle handleId="handleBox2" />
                </div>
              </div>

              <div className="wrapper-center" style={{ marginTop: "2px" }}>
                <div className="handle-box" onClick={() => handleDoorClick('handleBox3')}>
                  <DoorHandle handleId="handleBox3" />
                </div>
                <div className="handle-box" onClick={() => handleDoorClick('handleBox4')}>
                  <DoorHandle handleId="handleBox4" />
                </div>
                <div className="handle-box" onClick={() => handleDoorClick('handleBox5')}>
                  <DoorHandle handleId="handleBox5" />
                </div>
              </div>
              <div>
                <label>Initial</label>
                <Signature
                  width={95}
                  height={28}
                  signId="signature2"
                  updateSign={handleSign2}
                  setVal={storeData['signature2']}
                  viewMode={viewMode}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-table table-box width-50">
          <GlassOptionTable
            data={glassTableState}
            updateGlassTable={updateGlassTable}
          />
          <PreBuiltTable
            data={prebuiltTableState}
            updatePrebuiltTable={updatePrebuiltTable}
          />
          <WindowOptionTable
            data={windowOptionTableState}
            updateWindowOptionTable={updateWindowOptionTable}
          />
          <MiscellenousTable
            data={miscellaneousTableState}
            updateMiscellaneousTable={updateMiscellaneousTable}
          />
          <RoundUpTable
            data={roundupTableState}
            updateRoundUpTable={updateRoundUpTable}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="financing-box width-40">
          <div className="wrapper payment-total">
            <div className="table-box width-50">
              <p className="financing">Financing</p>
            </div>
            <div className="table-box width-50">
              <p className="blue-text">
                <strong>10% DOWN PAYMENT</strong>
              </p>
              <input
                type="text"
                className="total-input blue-text bottom-outline width-50px"
                value={
                  props.isInputEnable
                    ? `$ ${Math.round(
                        (contractSubTotal + disposalFee + measureFee) / 10
                      )}`
                    : Math.round(
                        (storeData['contractsubtotal'] +
                          storeData['calculateInput1'] +
                          storeData['calculateInput2']) /
                          10
                      )
                }
                readOnly
              />
            </div>
          </div>
          <div className="wrapper payment-total">
            <div className="table-box width-50">
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={
                  props.isInputEnable
                    ? `$ ${Math.round(
                        ((contractSubTotal + disposalFee + measureFee) / 10) *
                          0.6
                      )}`
                    : Math.round(
                        ((storeData['contractsubtotal'] +
                          storeData['calculateInput1'] +
                          storeData['calculateInput2']) /
                          10) *
                          0.6
                      )
                }
                readOnly
              />
              <label>/month</label>
              <p>15 MONTH (0%) SAME AS CASH</p>
            </div>
            <div className="table-box width-50">
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={
                  props.isInputEnable
                    ? `$ ${Math.round(
                        ((contractSubTotal + disposalFee + measureFee) / 10) *
                          0.18
                      )}`
                    : Math.round(
                        ((storeData['contractsubtotal'] +
                          storeData['calculateInput1'] +
                          storeData['calculateInput2']) /
                          10) *
                          0.18
                      )
                }
                readOnly
              />
              <label>/month</label>
              <p>60 MONTHS (7.99%)</p>
            </div>
          </div>
        </div>
        <div className="total-form width-60">
          <div>
            <p>
              I am Authorized to sign and agree to the terms of payment as
              follows:
            </p>
          </div>
          <div>
            <label>Contract Sub total $</label>
            <Input
              addClass="black-text width-100px"
              type={'number'}
              inputId="contractsubtotal"
              updateData={handleChange}
              inputVal={
                props.isInputEnable
                  ? contractSubTotal
                  : storeData['contractsubtotal']
              }
              readOnlyMode={true}
            />
          </div>
          <div>
            <label style={{ fontSize: '13px' }}>
              Site set-up, Delivery, and Disposal fee (1-5 = $75, 6-10 = $150,
              11+ = $200) $
            </label>
            <Input
              addClass="black-text width-100px"
              type={'number'}
              inputId="calculateInput1"
              updateData={handleChange}
              inputVal={storeData['calculateInput1']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>Measure Fee $</label>
            <Input
              addClass=" black-text width-100px"
              type={'number'}
              inputId="calculateInput2"
              updateData={handleChange}
              inputVal={storeData['calculateInput2']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>Total Amount $</label>
            <Input
              addClass=" black-text black-text width-100px"
              type={'number'}
              inputId="amount"
              updateData={handleChange}
              inputVal={
                props.isInputEnable
                  ? contractSubTotal + disposalFee + measureFee
                  : storeData['contractsubtotal'] +
                    storeData['calculateInput1'] +
                    storeData['calculateInput2']
              }
              readOnlyMode={true}
            />
          </div>
          <div className="wrapper">
            <div>
              <label>Ck#</label>
              <Input
                addClass="width-100px"
                style={{ width: "410px" }}
                type={'text'}
                inputId="calculateInput3"
                updateData={handleChange}
                inputVal={storeData['calculateInput3']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
            <div>
              <label>Custom Order Deposit 50% $</label>
              <Input
                addClass="width-100px"
                type={'number'}
                inputId="calculateInput4"
                updateData={handleChange}
                inputVal={storeData['calculateInput4']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </div>
          </div>
          <div>
            <label>Balance to be Paid to Installer $</label>
            <Input
              addClass="width-100px"
              type={'number'}
              inputId="calculateInput5"
              updateData={handleChange}
              inputVal={storeData['calculateInput5']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>Amount Financed $ </label>
            <Input
              addClass="width-100px"
              type={'number'}
              inputId="calculateInput6"
              updateData={handleChange}
              inputVal={storeData['calculateInput6']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateTable;
