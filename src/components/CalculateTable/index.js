import React, { useEffect, useState } from 'react';

import GlassOptionTable from '../GlassOptionTable';
import PreBuiltTable from '../PreBuiltTable';
import VinylSlidingTable from '../VinylSlidingTable';
import WindowWorldTable from '../WindowWorldTable';
import WindowOptionTable from '../WindowOptionTable';
import MiscellenousTable from '../MiscellenousTable';
import RoundUpTable from '../RoundUpTable';
import Signature from '../Signature';

// import { windowWorldTableData } from './data';
// import { glassTableData } from './data';
// import { vinylslidingTableData } from './data';
// import { prebuiltTableData } from './data';
// import { windowOptionTableData } from './data';
// import { miscellaneousTableData } from './data';
// import { roundUpTableData } from './data';

import { data } from '../../mockup/data';

import './style.css';

const CalculateTable = () => {
  const {
    windowWorldTableData,
    glassTableData,
    vinylslidingTableData,
    prebuiltTableData,
    windowOptionTableData,
    miscellaneousTableData,
    roundUpTableData,
  } = data;

  const [contractSubTotal, setContractSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [disposalFee, setDisposalFee] = useState(200);
  const [measureFee, setMeasureFee] = useState(75);

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
    console.log(data);
    setWindowWorldPrice(data.price);
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
    console.log(data);
    setGlassOptionPrice(data.price);
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
    console.log(data);
    setVinylSlidingPrice(data.price);
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
    console.log(data);
    setPrebuiltPrice(data.price);
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
    console.log(data);
    setWindowOptionPrice(data.price);
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

  return (
    <div>
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
                <input className="bottom-outline width-50px" />
              </div>
              <div>
                <strong>(Outside Looking In)</strong> Door Handle
              </div>
            </div>
            <div className="wrapper">
              <div>
                <label>Initial</label>
                <Signature width={95} height={28} />
              </div>
              <div>
                <label>Initial</label>
                <Signature width={95} height={28} />
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
          <div className="wrapper">
            <div className="table-box width-50">
              <p>Financing</p>
            </div>
            <div className="table-box width-50">
              <p className="blue-text">
                <strong>10% DOWN PAYMENT</strong>
              </p>
              <input
                type="text"
                className="total-input blue-text bottom-outline width-50px"
                value={`$ ${Math.round(
                  (contractSubTotal + disposalFee + measureFee) / 10
                )}`}
                readOnly
              />
            </div>
          </div>
          <div className="wrapper">
            <div className="table-box width-50">
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={`$ ${Math.round(
                  ((contractSubTotal + disposalFee + measureFee) / 10) * 0.6
                )}`}
                readOnly
              />
              <label>/month</label>
              <p>15 MONTH (0%) SAME AS CASH</p>
            </div>
            <div className="table-box width-50">
              <input
                type="text"
                className="month-input bottom-outline width-50px"
                value={`$ ${Math.round(
                  ((contractSubTotal + disposalFee + measureFee) / 10) * 0.18
                )}`}
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
            <input
              type="text"
              className="bottom-outline black-text width-100px"
              value={contractSubTotal}
              readOnly
            />
          </div>
          <div>
            <label>
              Site set-up, Delivery, and Disposal fee (1-5 = $75, 6-10 = $150,
              11+ = $200) $
            </label>
            <input
              type="number"
              className="bottom-outline black-text width-100px"
              defaultValue={disposalFee}
            />
          </div>
          <div>
            <label>Measure Fee $</label>
            <input
              type="number"
              className="bottom-outline black-text width-100px"
              defaultValue={measureFee}
            />
          </div>
          <div>
            <label>Total Amount $</label>
            <input
              type="number"
              className="bottom-outline width-100px"
              value={contractSubTotal + disposalFee + measureFee}
              readOnly
            />
          </div>
          <div className="wrapper">
            <div>
              <label>Ck#</label>
              <input className="bottom-outline width-100px" />
            </div>
            <div>
              <label>Custom Order Deposit 50% $</label>
              <input className="bottom-outline width-100px" />
            </div>
          </div>
          <div>
            <label>Balance to be Paid to Installer $</label>
            <input className="bottom-outline width-100px" />
          </div>
          <div>
            <label>Amount Financed $ </label>
            <input className="bottom-outline width-100px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateTable;
