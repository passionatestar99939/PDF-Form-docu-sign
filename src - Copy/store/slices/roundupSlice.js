import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    roundupInput1: '',
    roundupInput2: '',
    roundupInput3: 0,
    roundupInput4: 0,
  },
};

export const roundupSlice = createSlice({
  name: 'roundup',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataRoundup: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataRoundup } = roundupSlice.actions;

export default roundupSlice.reducer;
