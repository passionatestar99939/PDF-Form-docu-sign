import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateValue } from '../../store/slices/table33Slice';

import './style.css';

const Table3OfPage3 = ({ children }) => {
  const storeData = useSelector((state) => state.table33.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, value: value }));
  };

  return (
    <>
      <table className="Table3OfPage3">
        <thead>
          <tr>
            <td>Capping:</td>
            <td>
              <input
                type="checkbox"
                id="cappingY"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'cappingY' })
                }
                checked={storeData['cappingY']}
              />
              <label for="cappingY">Yes</label>
              <input
                type="checkbox"
                id="cappingN"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'cappingN' })
                }
                checked={storeData['cappingN']}
              />
              <label for="cappingN">No</label>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Color:</td>
            <td>
              <Input
                addClass="width-90"
                type={'text'}
                inputId="color"
                updateData={handleChange}
                inputVal={storeData['color']}
                readOnlyMode={viewMode !== 'homepage'}
              />
            </td>
            <td>
              <input
                type="checkbox"
                id="sm"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'sm' })
                }
                checked={storeData['sm']}
              />
              SM
            </td>
            <td>
              <input
                type="checkbox"
                id="pvc1"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'pvc1' })
                }
                checked={storeData['pvc1']}
              />
              PVC
            </td>
          </tr>
          <tr>
            <td>Interior Trim:</td>
            <td>
              <input
                type="checkbox"
                id="interiorY"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'interiorY' })
                }
                checked={storeData['interiorY']}
              />
              Yes
              <input
                type="checkbox"
                id="interiorN"
                onChange={(e) =>
                  handleChange(e.target.checked, { formId: 'interiorN' })
                }
                checked={storeData['interiorN']}
              />
              No
            </td>
          </tr>
        </tbody>
      </table>
      Qty:
      <Input
        addClass="width-10"
        type={'text'}
        inputId="qty"
        updateData={handleChange}
        inputVal={storeData['qty']}
        readOnlyMode={viewMode !== 'homepage'}
      />
      Style:
      <Input
        addClass="width-10"
        type={'text'}
        inputId="style"
        updateData={handleChange}
        inputVal={storeData['style']}
        readOnlyMode={viewMode !== 'homepage'}
      />
      <input
        type="checkbox"
        id="paint"
        onChange={(e) => handleChange(e.target.checked, { formId: 'paint' })}
        checked={storeData['paint']}
      />
      Paint
      <input
        type="checkbox"
        id="pvc2"
        onChange={(e) => handleChange(e.target.checked, { formId: 'pvc2' })}
        checked={storeData['pvc2']}
      />
      PVC
    </>
  );
};

export default Table3OfPage3;
