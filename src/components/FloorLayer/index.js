import React from 'react';
import Input from '../Input';

import './style.css';

const FloorLayer = (props, { children }) => {
  return (
    <div className="FloorLayer">
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input addClass=" RightDirection" value={'Floor' + 1} />
        </div>
      </div>
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input addClass=" RightDirection" value={'Floor' + 2} />
        </div>
      </div>
      <div className="Floor">
        <div className="Rectangle"></div>
        <div className="InputOfFloor">
          <Input addClass=" RightDirection" value={'Floor' + 3} />
        </div>
      </div>
    </div>
  );
};

export default FloorLayer;
