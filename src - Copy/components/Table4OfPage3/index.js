import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateValue } from '../../store/slices/table43Slice';

import './style.css';

const Table4OfPage3 = ({ children }) => {
  const storeData = useSelector((state) => state.table43.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, value: value }));
  };

  return (
    <>
      <table className="Table4OfPage3">
        <tbody>
          <tr>
            <td>Windows</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="window"
                updateData={handleChange}
                inputVal={storeData['window']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>capping</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="capping"
                updateData={handleChange}
                inputVal={storeData['capping']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>Doors (hardware shutters/ other)</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="doors"
                updateData={handleChange}
                inputVal={storeData['doors']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>Disposal by Cust</td>
            <td>
              <input
                type="checkbox"
                id="disposalY"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'disposalY' })
                }
                checked={storeData['disposalY']}
              />
              <label for="disposalY">Yes</label>
              <input
                type="checkbox"
                id="disposalN"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'disposalN' })
                }
                checked={storeData['disposalN']}
              />
              <label for="disposalY">No</label>
            </td>
          </tr>
          <tr>
            <td>Mull Removals</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="mullRemoval"
                updateData={handleChange}
                inputVal={storeData['mullRemoval']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>R&R Removals</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="rrRemoval"
                updateData={handleChange}
                inputVal={storeData['rrRemoval']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>Extra Labor?</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="extraLabor"
                updateData={handleChange}
                inputVal={storeData['extraLabor']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
          <tr>
            <td>Cont.</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="cont"
                updateData={handleChange}
                inputVal={storeData['cont']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Input
        addClass="width-100"
        type={'text'}
        inputId="name"
        updateData={handleChange}
        inputVal={storeData['name']}
        readOnlyMode={viewMode !== 'homepage'}
      />
    </>
  );
};

export default Table4OfPage3;
