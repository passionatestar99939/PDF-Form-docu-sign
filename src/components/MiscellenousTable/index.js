import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateValue } from "../../store/slices/miscellenousSlice";
import { updateValue as updateColor } from "../../store/slices/table33Slice";
import { numberWithCommas, dollarNumberWithCommas } from "../../utils/globals";

const MiscellenousTable = (props) => {
  const storeData = useSelector((state) => state.miscellenous.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const color = useSelector((state) => state.table33.data.color);
  const dispatch = useDispatch();

  let flag = useRef(false);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  useEffect(() => {
    if (flag.current === false) {
      input1.current.value = dollarNumberWithCommas(
        storeData["miscellenousInput16"]
      );
      input2.current.value = dollarNumberWithCommas(
        storeData["miscellenousInput17"]
      );
      input3.current.value = dollarNumberWithCommas(
        storeData["miscellenousInput18"]
      );
      input4.current.value = dollarNumberWithCommas(
        storeData["miscellenousInput19"]
      );
    }
  }, [storeData]);

  const handleChange = (e, { id, formId }) => {
    if (formId === "miscellenousInput40") {
      dispatch(updateColor({ id: "color", value: e.target.value }));
      return;
    }
    if (Number(formId.substr(17, 2)) > 19) {
      dispatch(updateValue({ id: formId, count: e.target.value }));
      return;
    }

    let price = 0;
    props.data.map((item) => {
      let temp = item.id === id ? e.target.value : item.count;
      price += Number(temp) * item.unitPrice;
    });

    if (
      Number(formId.substr(17, 2)) > 15 &&
      Number(formId.substr(17, 2)) < 20
    ) {
      dispatch(updateValue({ id: formId, count: Number(e.target.value) }));
    } else dispatch(updateValue({ id: formId, count: e.target.value }));

    props.updateMiscellaneousTable({
      id: id,
      count: e.target.value,
      price: price,
    });
  };

  const handleFocus = (e, id) => {
    e.target.type = "number";
    e.target.value = storeData[id];
    flag.current = true;
  };

  const handleBlur = (e, id) => {
    e.target.type = "text";
    e.target.value = dollarNumberWithCommas(Number(storeData[id]));
    flag.current = false;
  };

  return (
    <div className='table-bottom table-font table-padding'>
      <div className='table-title-big'>
        <strong>MISCELLANEOUS</strong>
      </div>
      <div>
        {props.data.map((item, index) => {
          if (index < 15)
            return (
              <div className='wrapper' key={index}>
                <div
                  style={
                    index === 12
                      ? { width: "75%" }
                      : index === 0
                      ? { width: "74%" }
                      : {}
                  }
                >
                  <input
                    id={`miscellenousInput${index + 1}`}
                    type='number'
                    className='bottom-outline width-80px medium-input'
                    onChange={(e) =>
                      handleChange(e, {
                        id: item.id,
                        formId: `miscellenousInput${index + 1}`,
                      })
                    }
                    value={storeData[`miscellenousInput${index + 1}`]}
                    readOnly={viewMode !== "homepage"}
                  />
                  <label style={index === 12 ? { fontSize: "20px" } : {}}>
                    {item.label}
                  </label>
                  {index === 0 && (
                    <input
                      type='text'
                      className='bottom-outline input-box medium-input'
                      style={
                        viewMode === "convert-pdf"
                          ? { width: "35%" }
                          : { width: "42%" }
                      }
                      id='miscellenousInput40'
                      onChange={(e) =>
                        handleChange(e, { formId: "miscellenousInput40" })
                      }
                      value={color}
                      readOnly={viewMode !== "homepage"}
                    />
                  )}
                </div>
                <div>
                  <label>{`$${item.unitPrice}`}</label>
                  <input
                    type='text'
                    style={
                      viewMode === "convert-pdf"
                        ? { width: "75px" }
                        : { width: "90px" }
                    }
                    className='bottom-outline width-80px medium-input'
                    value={`$ ${numberWithCommas(
                      Number(
                        storeData[`miscellenousInput${index + 1}`] *
                          item.unitPrice
                      )
                    )}`}
                    readOnly
                  />
                </div>
              </div>
            );
        })}
        <div className='wrapper'>
          <div>
            <input
              className='bottom-outline width-80px medium-input'
              type='number'
              id='miscellenousInput20'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput20" })
              }
              value={storeData["miscellenousInput20"]}
              readOnly={viewMode !== "homepage"}
            />
            <label>Lift Rental $650 Daily</label>
          </div>
          <div>
            <label>$</label>
            <input
              id='miscellenousInput16'
              className='bottom-outline width-80px medium-input'
              type='text'
              style={
                viewMode === "convert-pdf"
                  ? { width: "75px" }
                  : { width: "90px" }
              }
              onChange={(e) =>
                handleChange(e, {
                  id: 16,
                  formId: "miscellenousInput16",
                })
              }
              ref={input1}
              onFocus={(e) => handleFocus(e, "miscellenousInput16")}
              onBlur={(e) => handleBlur(e, "miscellenousInput16")}
              // value={numberWithCommas(Number(storeData['miscellenousInput16']))}
              readOnly={viewMode !== "homepage"}
            />
          </div>
        </div>
        <div className='wrapper'>
          <div className='flex-input' style={{ width: "70%" }}>
            <input
              className='bottom-outline width-80px input-box medium-input'
              type='number'
              id='miscellenousInput21'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput21" })
              }
              value={storeData["miscellenousInput21"]}
              readOnly={viewMode !== "homepage"}
            />
            <label>Extra Labor</label>
            <input
              className='bottom-outline input-box medium-input'
              style={
                viewMode === "convert-pdf" ? { width: "55%" } : { width: "56%" }
              }
              type='text'
              id='miscellenousInput22'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput22" })
              }
              value={storeData["miscellenousInput22"]}
              readOnly={viewMode !== "homepage"}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id='miscellenousInput17'
              className='bottom-outline width-80px medium-input'
              type='text'
              style={
                viewMode === "convert-pdf"
                  ? { width: "75px" }
                  : { width: "90px" }
              }
              onChange={(e) =>
                handleChange(e, {
                  id: 17,
                  formId: "miscellenousInput17",
                })
              }
              ref={input2}
              onFocus={(e) => handleFocus(e, "miscellenousInput17")}
              onBlur={(e) => handleBlur(e, "miscellenousInput17")}
              // value={numberWithCommas(Number(storeData['miscellenousInput17']))}
              readOnly={viewMode !== "homepage"}
            />
          </div>
        </div>
        <div className='wrapper'>
          <div className='flex-input' style={{ width: "70%" }}>
            <input
              className='bottom-outline width-80px medium-input'
              type='number'
              id='miscellenousInput23'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput23" })
              }
              value={storeData["miscellenousInput23"]}
              readOnly={viewMode !== "homepage"}
            />
            <input
              className='bottom-outline width-80px width-70 medium-input'
              style={{ width: "89%" }}
              type='text'
              id='miscellenousInput24'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput24" })
              }
              value={storeData["miscellenousInput24"]}
              readOnly={viewMode !== "homepage"}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id='miscellenousInput18'
              className='bottom-outline width-80px medium-input'
              type='text'
              style={
                viewMode === "convert-pdf"
                  ? { width: "75px" }
                  : { width: "90px" }
              }
              onChange={(e) =>
                handleChange(e, {
                  id: 18,
                  formId: "miscellenousInput18",
                })
              }
              ref={input3}
              onFocus={(e) => handleFocus(e, "miscellenousInput18")}
              onBlur={(e) => handleBlur(e, "miscellenousInput18")}
              // value={numberWithCommas(Number(storeData['miscellenousInput18']))}
              readOnly={viewMode !== "homepage"}
            />
          </div>
        </div>
        <div className='wrapper'>
          <div className='flex-input' style={{ width: "70%" }}>
            <input
              className='bottom-outline width-80px medium-input'
              type='number'
              id='miscellenousInput25'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput25" })
              }
              value={storeData["miscellenousInput25"]}
              readOnly={viewMode !== "homepage"}
            />
            <input
              className='bottom-outline width-70 medium-input'
              style={{ width: "89%" }}
              type='text'
              id='miscellenousInput26'
              onChange={(e) =>
                handleChange(e, { formId: "miscellenousInput26" })
              }
              value={storeData["miscellenousInput26"]}
              readOnly={viewMode !== "homepage"}
            />
          </div>
          <div>
            <label>$</label>
            <input
              id='miscellenousInput19'
              className='bottom-outline width-80px medium-input'
              type='text'
              style={
                viewMode === "convert-pdf"
                  ? { width: "75px" }
                  : { width: "90px" }
              }
              onChange={(e) =>
                handleChange(e, {
                  id: 19,
                  formId: "miscellenousInput19",
                })
              }
              ref={input4}
              onFocus={(e) => handleFocus(e, "miscellenousInput19")}
              onBlur={(e) => handleBlur(e, "miscellenousInput19")}
              // value={numberWithCommas(Number(storeData['miscellenousInput19']))}
              readOnly={viewMode !== "homepage"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellenousTable;
