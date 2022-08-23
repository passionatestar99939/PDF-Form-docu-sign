import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    wood1: false,
    alum: false,
    steel: false,
    vinyl: false,
    brick: false,
    frame: false,
    siding: false,
    stucco: false,
    business: false,
    rental: false,
    empty: false,
    own: false,
    drywall: false,
    plaster: false,
    wood2: false,
    brickmold: false,
    onnMulFour: false,
    oneMulSix: false,
    other: false,
  },
};

export const table23Slice = createSlice({
  name: 'table23',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataTable23: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataTable23 } = table23Slice.actions;

export default table23Slice.reducer;
