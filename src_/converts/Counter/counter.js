import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
  inputAction,
} from '../../store/slices/counterSlice';

import Input from '../Input';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const inputVal = useSelector((state) => state.counter.inputVal);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <Input updateValue={(value) => dispatch(inputAction(value))} />
        <span>{count}</span>
        <span>{inputVal}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="IncrementBy3"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
