import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { data } from '../../mockup/data';
import { updateValue } from '../../store/slices/calculateSlice';
import { numberWithCommas, dollarNumberWithCommas } from '../../utils/globals';

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
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const windowTotal = useSelector(
    (state) => state.windowworld.data.windowTotal
  );
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

  let flag = useRef(false);

  const input1 = useRef();
  // const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();

  useEffect(() => {
    if (flag.current === false) {
      input1.current.value = dollarNumberWithCommas(
        storeData['calculateInput2']
      );
      // input2.current.value = dollarNumberWithCommas(storeData['calculateInput3']);
      input3.current.value = dollarNumberWithCommas(storeData['cc_deposit']);
      input4.current.value = dollarNumberWithCommas(storeData['cc_balance']);
      input5.current.value = dollarNumberWithCommas(
        storeData['calculateInput6']
      );
    }
  }, [storeData]);

  useEffect(() => {
    let fee = 0;
    if (windowTotal > 0 && windowTotal <= 5) {
      fee = 75;
      setDisposalFee(fee);
    }
    if (windowTotal > 5 && windowTotal <= 10) {
      fee = 150;
      setDisposalFee(fee);
    }
    if (windowTotal > 10) {
      fee = 200;
      setDisposalFee(fee);
    }
    dispatch(updateValue({ id: 'calculateInput1', count: fee }));
  }, [windowTotal]);

  const updateWindowTable = (data) => {
    setWindowWorldPrice(data.price);
    let subtotal =
      data.price +
      glassOptionPrice +
      vinylslidginPrice +
      prebuiltPrice +
      windowOptionPrice +
      miscellaneousPrice +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    let subtotal =
      windowWorldPrice +
      data.price +
      vinylslidginPrice +
      prebuiltPrice +
      windowOptionPrice +
      miscellaneousPrice +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    let subtotal =
      windowWorldPrice +
      glassOptionPrice +
      data.price +
      prebuiltPrice +
      windowOptionPrice +
      miscellaneousPrice +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    let subtotal =
      windowWorldPrice +
      glassOptionPrice +
      vinylslidginPrice +
      data.price +
      windowOptionPrice +
      miscellaneousPrice +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    let subtotal =
      windowWorldPrice +
      glassOptionPrice +
      vinylslidginPrice +
      prebuiltPrice +
      data.price +
      miscellaneousPrice +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    setMiscellaneousPrice(data.price);
    let subtotal =
      windowWorldPrice +
      glassOptionPrice +
      vinylslidginPrice +
      prebuiltPrice +
      windowOptionPrice +
      data.price +
      roundupPrice;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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
    setRoundupPrice(data.price);
    let subtotal =
      windowWorldPrice +
      glassOptionPrice +
      vinylslidginPrice +
      prebuiltPrice +
      windowOptionPrice +
      miscellaneousPrice +
      data.price;
    setContractSubTotal(subtotal);
    dispatch(updateValue({ id: 'contractsubtotal', count: subtotal }));
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

  const handleChange = (value, id) => {
    if (viewMode !== 'homepage') return;
    if (id === 'calculateInput1') setDisposalFee(value);
    if (id === 'calculateInput2') setMeasureFee(value);
    if (id === 'calculateInput3')
      dispatch(updateValue({ id: id, count: value }));
    else dispatch(updateValue({ id: id, count: Number(value) }));
  };

  const handleCheck = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, count: value }));
  };

  const handleSign1 = (value) => {
    dispatch(updateValue({ id: 'signature1', count: value }));
  };

  const handleSign2 = (value) => {
    dispatch(updateValue({ id: 'signature2', count: value }));
  };

  const handleDoorClick = (value) => {
    if (viewMode !== 'homepage') return;
    if (storeData[value] === '')
      dispatch(updateValue({ id: value, count: 'cross' }));
    else if (storeData[value] === 'cross')
      dispatch(updateValue({ id: value, count: 'circle' }));
    else dispatch(updateValue({ id: value, count: '' }));
  };

  const DoorHandle = ({ handleId }) => (
    <>
      {storeData[handleId] === 'cross' && (
        <img src="/images/cross.png" alt="cross" />
      )}
      {storeData[handleId] === 'circle' && (
        <img src="/images/circle.png" alt="circle" />
      )}
      {storeData[handleId] === '' && (
        <img src="/images/empty.png" alt="empty" />
      )}
    </>
  );

  const handleFocus = (e, id) => {
    e.target.type = 'number';
    e.target.value = storeData[id];
    flag.current = true;
  };

  const handleBlur = (e, id) => {
    e.target.type = 'text';
    e.target.value = '$ ' + numberWithCommas(Number(storeData[id]));
    flag.current = false;
  };

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
                <input
                  className="bottom-outline width-50px"
                  onChange={(e) =>
                    dispatch(
                      updateValue({ id: 'color', value: e.target.value })
                    )
                  }
                  value={storeData['color']}
                />
              </div>
              <div className="wrapper" style={{ width: '65%' }}>
                <p className="tbl-title">
                  <strong>(Outside Looking In)</strong>
                </p>
                <div>
                  <label for="doorhandle">Door Handle</label>
                  <input
                    id="doorhandle"
                    className="bottom-outline width-50px"
                    onChange={(e) =>
                      dispatch(
                        updateValue({ id: 'handle', value: e.target.value })
                      )
                    }
                    value={storeData['handle']}
                  />
                </div>
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
                  imgInfo={storeData.signature1.value}
                  style={storeData.signature1.style}
                  signStatus={signStatus}
                  viewMode={viewMode}
                />
              </div>
              <div className="wrapper-center" style={{ marginTop: '2px' }}>
                <div
                  className="handle-box"
                  onClick={() => handleDoorClick('handleBox1')}
                >
                  <DoorHandle handleId="handleBox1" />
                </div>
                <div
                  className="handle-box"
                  onClick={() => handleDoorClick('handleBox2')}
                >
                  <DoorHandle handleId="handleBox2" />
                </div>
              </div>

              <div className="wrapper-center" style={{ marginTop: '2px' }}>
                <div
                  className="handle-box"
                  onClick={() => handleDoorClick('handleBox3')}
                >
                  <DoorHandle handleId="handleBox3" />
                </div>
                <div
                  className="handle-box"
                  onClick={() => handleDoorClick('handleBox4')}
                >
                  <DoorHandle handleId="handleBox4" />
                </div>
                <div
                  className="handle-box"
                  onClick={() => handleDoorClick('handleBox5')}
                >
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
                  imgInfo={storeData.signature2.value}
                  style={storeData.signature2.style}
                  signStatus={signStatus}
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
      <div className="wrapper financing-area">
        <div className="financing-box width-40">
          <div className="wrapper payment-total">
            <div className="table-box width-50">
              <p className="financing" style={{ textAlign: 'center' }}>
                Financing
              </p>
            </div>
            <div className="table-box width-50" style={{ textAlign: 'center' }}>
              <p className="blue-text">
                <strong>10% DOWN PAYMENT</strong>
              </p>
              <input
                type="text"
                className="total-input blue-text bottom-outline width-50px"
                style={viewMode === 'convert-pdf' ? { width: '95%' } : {}}
                value={
                  props.isInputEnable
                    ? `$ ${numberWithCommas(
                        Math.round(
                          (Number(contractSubTotal) +
                            Number(disposalFee) +
                            Number(measureFee)) /
                            10
                        )
                      )}`
                    : `$ ${numberWithCommas(
                        Math.round(
                          (Number(storeData['contractsubtotal']) +
                            Number(storeData['calculateInput1']) +
                            Number(storeData['calculateInput2'])) /
                            10
                        )
                      )}`
                }
                readOnly
              />
            </div>
          </div>
          <div className="wrapper payment-total">
            <div className="table-box width-50" style={{ textAlign: 'center' }}>
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={
                  props.isInputEnable
                    ? `$ ${numberWithCommas(
                        Math.round(
                          ((Number(contractSubTotal) +
                            Number(disposalFee) +
                            Number(measureFee)) /
                            10) *
                            0.6
                        )
                      )}`
                    : `$ ${numberWithCommas(
                        Math.round(
                          ((Number(storeData['contractsubtotal']) +
                            Number(storeData['calculateInput1']) +
                            Number(storeData['calculateInput2'])) /
                            10) *
                            0.6
                        )
                      )}`
                }
                readOnly
              />
              <label style={{ fontSize: '10px' }}>/MONTH</label>
              <p style={{ textAlign: 'center' }}>15 MONTH (0%) SAME AS CASH</p>
            </div>
            <div
              className="table-box width-50"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={
                  props.isInputEnable
                    ? `$ ${numberWithCommas(
                        Math.round(
                          ((Number(contractSubTotal) +
                            Number(disposalFee) +
                            Number(measureFee)) /
                            10) *
                            0.18
                        )
                      )}`
                    : `$ ${numberWithCommas(
                        Math.round(
                          ((Number(storeData['contractsubtotal']) +
                            Number(storeData['calculateInput1']) +
                            Number(storeData['calculateInput2'])) /
                            10) *
                            0.18
                        )
                      )}`
                }
                readOnly
              />
              <label style={{ fontSize: '10px' }}>/MONTH</label>
              <p style={{ textAlign: 'center' }}>60 MONTHS (7.99%)</p>
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
              type={'text'}
              style={{ textAlign: 'right' }}
              inputId="contractsubtotal"
              inputVal={
                props.isInputEnable
                  ? `$ ${numberWithCommas(contractSubTotal)}`
                  : `$ ${numberWithCommas(
                      Number(storeData['contractsubtotal'])
                    )}`
              }
              readOnlyMode={true}
            />
          </div>
          <div>
            <label
              style={
                viewMode === 'convert-pdf'
                  ? { fontSize: '12px' }
                  : { fontSize: '16px' }
              }
            >
              Site set-up, Delivery, and Disposal fee (1-5 = $75, 6-10 = $150,
              11+ = $200) $
            </label>
            <input
              id="calculateInput1"
              className="bottom-outline black-text width-100px"
              type="text"
              style={{ textAlign: 'right' }}
              value={'$ ' + storeData['calculateInput1']}
              // onChange={(e) => handleChange(e, 'calculateInput1')}
              // onFocus={(e) => handleFocus(e, 'calculateInput1')}
              // onBlur={(e) => handleBlur(e, 'calculateInput1')}
              // readOnly={viewMode !== 'homepage'}
              readOnly={true}
            />
          </div>
          <div>
            <label>Measure Fee $</label>
            <input
              id="calculateInput2"
              className="bottom-outline black-text width-100px"
              type="text"
              style={{ textAlign: 'right' }}
              onChange={(e) => handleChange(e.target.value, 'calculateInput2')}
              onFocus={(e) => handleFocus(e, 'calculateInput2')}
              onBlur={(e) => handleBlur(e, 'calculateInput2')}
              ref={input1}
              defaultValue={
                '$ ' + numberWithCommas(Number(storeData['calculateInput2']))
              }
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div>
            <label>Total Amount $</label>
            <Input
              addClass="width-100px"
              type={'text'}
              style={{ color: 'blue', textAlign: 'right' }}
              inputId="amount"
              inputVal={
                props.isInputEnable
                  ? `$ ${numberWithCommas(
                      Number(contractSubTotal) +
                        Number(disposalFee) +
                        Number(measureFee)
                    )}`
                  : `$ ${numberWithCommas(
                      Number(storeData['contractsubtotal']) +
                        Number(storeData['calculateInput1']) +
                        Number(storeData['calculateInput2'])
                    )}`
              }
              readOnlyMode={true}
            />
          </div>
          <div className="wrapper">
            <div style={{ width: viewMode === 'convert-pdf' ? '40%' : '60%' }}>
              <label>Ck#</label>
              <input
                id="calculateInput3"
                className="bottom-outline"
                style={{ width: '60%', textAlign: 'left' }}
                type="text"
                onChange={(e) =>
                  handleChange(e.target.value, 'calculateInput3')
                }
                value={storeData['calculateInput3']}
                // onFocus={(e) => handleFocus(e, 'calculateInput3')}
                // onBlur={(e) => handleBlur(e, 'calculateInput3')}
                // // defaultValue={'$ ' + storeData['calculateInput3']}
                // ref={input2}
                readOnly={viewMode !== 'homepage'}
              />
            </div>
            <div>
              <label>Custom Order Deposit 50% $</label>
              <input
                id="cc_deposit"
                className="bottom-outline width-100px"
                type="text"
                style={{ textAlign: 'right' }}
                onChange={(e) => handleChange(e.target.value, 'cc_deposit')}
                onFocus={(e) => handleFocus(e, 'cc_deposit')}
                onBlur={(e) => handleBlur(e, 'cc_deposit')}
                // value={numberWithCommas(Number(storeData['cc_deposit']))}
                ref={input3}
                readOnly={viewMode !== 'homepage'}
              />
            </div>
          </div>
          <div>
            <label>Balance to be Paid to Installer $</label>
            <input
              id="cc_balance"
              className="bottom-outline width-100px"
              type="text"
              style={{ textAlign: 'right' }}
              onChange={(e) => handleChange(e.target.value, 'cc_balance')}
              onFocus={(e) => handleFocus(e, 'cc_balance')}
              onBlur={(e) => handleBlur(e, 'cc_balance')}
              ref={input4}
              readOnly={viewMode !== 'homepage'}
            />
          </div>
          <div className="wrapper">
            <div
              className="wrapper-space-between width-50"
              style={viewMode === 'convert-pdf' ? { fontSize: '12px' } : null}
            >
              <label>Payment Method</label>
              <input
                type="checkbox"
                id="cash"
                onChange={(e) =>
                  handleCheck(e.target.checked, { formId: 'cash' })
                }
                checked={storeData['cash']}
              />
              <label for="cash">CASH</label>
              <input
                type="checkbox"
                id="check"
                onChange={(e) =>
                  handleCheck(e.target.checked, { formId: 'check' })
                }
                checked={storeData['check']}
              />
              <label for="check">CHECK</label>
              <input
                type="checkbox"
                id="cc"
                onChange={(e) =>
                  handleCheck(e.target.checked, { formId: 'cc' })
                }
                checked={storeData['cc']}
              />
              <label for="cc">CC</label>
              <input
                type="checkbox"
                id="financing"
                onChange={(e) =>
                  handleCheck(e.target.checked, { formId: 'financing' })
                }
                checked={storeData['financing']}
              />
              <label for="financing">FINANCING</label>
            </div>
            <div>
              <label>Amount Financed $ </label>
              <input
                id="calculateInput6"
                className="bottom-outline width-100px"
                type="text"
                style={{ textAlign: 'right' }}
                onChange={(e) =>
                  handleChange(e.target.value, 'calculateInput6')
                }
                onFocus={(e) => handleFocus(e, 'calculateInput6')}
                onBlur={(e) => handleBlur(e, 'calculateInput6')}
                // value={numberWithCommas(Number(storeData['calculateInput6']))}
                ref={input5}
                readOnly={viewMode !== 'homepage'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateTable;
