import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import CheckBox from '../Checkbox';
import { updateValue } from '../../store/slices/windowtableSlice';

import './style.css';
import DropDownWrapper from '../DropDownWrapper';
import InputOfTable from '../InputOfTable';

const options = require('../../constants/options.json');

const WindowTable = (props) => {
  const storeData = useSelector((state) => state.windowtable.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  // alert('viewMode', viewMode);
  const dispatch = useDispatch();

  let rows = [];
  for (let i = 0; i < props.rowCount; i++) {
    rows.push({ [props.colNames[0]]: props.firstNoOfRow + i });
  }

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
  };

  return (
    <table className="WindowTable">
      <thead>
        <tr>
          {props.colNames.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((value, index) => (
          <tr key={index}>
            <td className="col-1">{value[props.colNames[0]]}</td>
            <td className="col-3">
              <DropDownWrapper
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`room${value[props.colNames[0]]}`]}
              >
                <select
                  className="table-select"
                  id={`room${value[props.colNames[0]]}`}
                  onChange={(e) => {
                    handleChange(e.target.value, {
                      formId: `room${value[props.colNames[0]]}`,
                    });
                  }}
                >
                  <option value=" "> </option>
                  {options.rooms.map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={
                        value === storeData[`room${value[props.colNames[0]]}`]
                      }
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </DropDownWrapper>
            </td>
            <td className="col-3">
              <DropDownWrapper
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`style${value[props.colNames[0]]}`]}
              >
                <select
                  className="table-select"
                  id={`style${value[props.colNames[0]]}`}
                  onChange={(e) =>
                    handleChange(e.target.value, {
                      formId: `style${value[props.colNames[0]]}`,
                    })
                  }
                >
                  <option value=" "> </option>
                  {options.styles.map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={
                        value === storeData[`style${value[props.colNames[0]]}`]
                      }
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </DropDownWrapper>
            </td>
            <td className="col-3">
              <InputOfTable
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`grids${value[props.colNames[0]]}`]}
              >
                <input
                  className="table-input"
                  id={`grids${value[props.colNames[0]]}`}
                  onChange={(e) =>
                    handleChange(e.target.value, {
                      formId: `grids${value[props.colNames[0]]}`,
                    })
                  }
                  value={storeData[`grids${value[props.colNames[0]]}`]}
                />
              </InputOfTable>
            </td>
            <td className="col-1">
              <CheckBox
                checkId={`le${value[props.colNames[0]]}`}
                updateCheck={handleChange}
                checkVal={storeData[`le${value[props.colNames[0]]}`]}
                isInputEnable={viewMode === 'homepage'}
              />
            </td>
            <td className="col-3">
              <InputOfTable
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`size${value[props.colNames[0]]}`]}
              >
                <input
                  className="table-input"
                  id={`size${value[props.colNames[0]]}`}
                  onChange={(e) =>
                    handleChange(e.target.value, {
                      formId: `size${value[props.colNames[0]]}`,
                    })
                  }
                  value={storeData[`size${value[props.colNames[0]]}`]}
                />
              </InputOfTable>
            </td>
            <td className="col-3">
              <InputOfTable
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`mull${value[props.colNames[0]]}`]}
              >
                <input
                  className="table-input"
                  id={`mull${value[props.colNames[0]]}`}
                  onChange={(e) =>
                    handleChange(e.target.value, {
                      formId: `mull${value[props.colNames[0]]}`,
                    })
                  }
                  value={storeData[`mull${value[props.colNames[0]]}`]}
                />
              </InputOfTable>
            </td>
            <td className="col-5">
              <InputOfTable
                isInputEnable={viewMode === 'homepage'}
                value={storeData[`windowNote${value[props.colNames[0]]}`]}
              >
                <input
                  className="table-input"
                  id={`windowNote${value[props.colNames[0]]}`}
                  onChange={(e) =>
                    handleChange(e.target.value, {
                      formId: `windowNote${value[props.colNames[0]]}`,
                    })
                  }
                  value={storeData[`windowNote${value[props.colNames[0]]}`]}
                />
              </InputOfTable>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(WindowTable);
