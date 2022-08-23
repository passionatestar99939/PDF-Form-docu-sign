import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateValue } from '../../store/slices/bottompage3Slice';
import './style.css';

const BottomOfPage3 = ({ children }) => {
  const storeData = useSelector((state) => state.bottompage3.data);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const dispatch = useDispatch();

  const handleChange = (value, { formId }) => {
    dispatch(updateValue({ id: formId, value: value }));
  };
  return (
    <div>
      Notes:
      <div>
        <Input
          addClass="width-10"
          type={'text'}
          inputId="qty"
          updateData={handleChange}
          inputVal={storeData['qty']}
          readOnlyMode={viewMode !== 'homepage'}
        />
        <textarea
          id="note"
          className="Notes"
          value={storeData['note']}
          onChange={(e) => handleChange(e.target.value, { formId: 'note' })}
          readOnly={viewMode !== 'homepage'}
          placeholder="____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________"
        ></textarea>
      </div>
      <div className="FloorLayer">
        <div className="Floor">
          <div className="Rectangle"></div>
          <div className="InputOfFloor">
            <Input
              addClass="RightDirection"
              type={'text'}
              inputId="floor1"
              updateData={handleChange}
              inputVal={storeData['floor1']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div className="Floor">
          <div className="Rectangle"></div>
          <div className="InputOfFloor">
            <Input
              addClass="RightDirection"
              type={'text'}
              inputId="floor2"
              updateData={handleChange}
              inputVal={storeData['floor2']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
        <div className="Floor">
          <div className="Rectangle"></div>
          <div className="InputOfFloor">
            <Input
              addClass="RightDirection"
              type={'text'}
              inputId="floor3"
              updateData={handleChange}
              inputVal={storeData['floor3']}
              readOnlyMode={viewMode !== 'homepage'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomOfPage3;
