import React from 'react';
import { useSelector } from 'react-redux';

import Input from '../Input';

import './style.css';

const FloorLayer = (props, { children }) => {
  const viewMode = useSelector((state) => state.option.data.viewMode);
  return (
    <div className="FloorLayer">
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input
            addClass=" RightDirection"
            inputVal={'Floor' + 1}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input
            addClass=" RightDirection"
            inputVal={'Floor' + 2}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input
            addClass=" RightDirection"
            inputVal={'Floor' + 3}
            readOnlyMode={viewMode !== 'homepage'}
          />
        </div>
      </div>
    </div>
  );
};

export default FloorLayer;
