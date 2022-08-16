import React from 'react';
import Input from '../Input';

import './style.css';

const FloorLayer = (props, { children }) => {
  return (
    <div class="FloorLayer">
      <div class="Floor">
        <div class="Rectangle"></div>
        <div class="InputOfFloor">
          <Input class=" RightDirection" value={'Floor' + 1} />
        </div>
      </div>
      <div class="Floor">
        <div class="Rectangle"></div>
        <div class="InputOfFloor">
          <Input class=" RightDirection" value={'Floor' + 2} />
        </div>
      </div>
      <div class="Floor">
        <div class="Rectangle"></div>
        <div class="InputOfFloor">
          <Input class=" RightDirection" value={'Floor' + 3} />
        </div>
      </div>
    </div>
  );
};

export default FloorLayer;
