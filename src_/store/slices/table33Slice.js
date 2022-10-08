import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    cappingY: false,
    cappingN: false,
    color: 'WHITE',
    sm: false,
    pvc1: false,
    interiorY: '',
    interiorN: '',
    style: '',
    qty: '',
    paint: false,
    pvc2: false,
  },
};

export const table33Slice = createSlice({
  name: 'table33',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataTable33: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataTable33 } = table33Slice.actions;

export default table33Slice.reducer;
