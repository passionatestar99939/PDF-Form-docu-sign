import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateValue } from '../../store/slices/table23Slice';

import './style.css';

const Table2OfPage3 = ({ children }) => {
  const storeData = useSelector((state) => state.table23.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    if (viewMode !== 'homepage') return;
    dispatch(updateValue({ id: formId, value: value }));
  };

  return (
    <table className="Table2OfPage3">
      <tbody>
        <tr>
          <td>Type of Tear Ouot:</td>
          <td>
            <input
              type="checkbox"
              id="wood1"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'wood1' })
              }
              checked={storeData['wood1']}
            />
            <label for="wood1">Wood</label>
          </td>
          <td>
            <input
              type="checkbox"
              id="alum"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'alum' })
              }
              checked={storeData['alum']}
            />
            <label for="alum">Alum</label>
          </td>
          <td>
            <input
              type="checkbox"
              id="steel"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'steel' })
              }
              checked={storeData['steel']}
            />
            <label for="alum">Steel</label>
          </td>
          <td>
            <input
              type="checkbox"
              id="vinyl"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'vinyl' })
              }
              checked={storeData['vinyl']}
            />
            Vinyl
          </td>
        </tr>
        <tr>
          <td>Type of House:</td>
          <td>
            <input
              type="checkbox"
              id="brick"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'brick' })
              }
              checked={storeData['brick']}
            />
            Brick
          </td>
          <td>
            <input
              type="checkbox"
              id="frame"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'frame' })
              }
              checked={storeData['frame']}
            />
            Frame
          </td>
          <td>
            <input
              type="checkbox"
              id="siding"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'siding' })
              }
              checked={storeData['siding']}
            />
            Siding
          </td>
          <td>
            <input
              type="checkbox"
              id="stucco"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'stucco' })
              }
              checked={storeData['stucco']}
            />
            Stucco
          </td>
        </tr>
        <tr>
          <td>Type of Property:</td>
          <td>
            <input
              type="checkbox"
              id="business"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'business' })
              }
              checked={storeData['business']}
            />
            Business
          </td>
          <td>
            <input
              type="checkbox"
              id="rental"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'rental' })
              }
              checked={storeData['rental']}
            />
            Rental
          </td>
          <td>
            <input
              type="checkbox"
              id="empty"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'empty' })
              }
              checked={storeData['empty']}
            />
            Empty
          </td>
          <td>
            <input
              type="checkbox"
              id="own"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'own' })
              }
              checked={storeData['own']}
            />
            Own
          </td>
        </tr>
        <tr>
          <td>Type of Opening:</td>
          <td>
            <input
              type="checkbox"
              id="drywall"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'drywall' })
              }
              checked={storeData['drywall']}
            />
            Drywall
          </td>
          <td>
            <input
              type="checkbox"
              id="plaster"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'plaster' })
              }
              checked={storeData['plaster']}
            />
            Plaster
          </td>
          <td>
            <input
              type="checkbox"
              id="wood2"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'wood2' })
              }
              checked={storeData['wood2']}
            />
            Wood
          </td>
        </tr>
        <tr>
          <td>Style:</td>
          <td>
            <input
              type="checkbox"
              id="brickmold"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'brickmold' })
              }
              checked={storeData['brickmold']}
            />
            Brickmold
          </td>
          <td>
            <input
              type="checkbox"
              id="oneMulFour"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'oneMulFour' })
              }
              checked={storeData['oneMulFour']}
            />
            1x4
          </td>
          <td>
            <input
              type="checkbox"
              id="oneMulSix"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'oneMulSix' })
              }
              checked={storeData['oneMulSix']}
            />
            1x6
          </td>
          <td>
            <input
              type="checkbox"
              id="other"
              onChange={(e) =>
                handleChange(e.target.checked, { formId: 'disposalY' })
              }
              checked={storeData['disposalY']}
            />
            Other
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2OfPage3;
