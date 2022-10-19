import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    salesperson: '',
    signature: {},
  },
};

export const salespersonSlice = createSlice({
  name: 'salesperson',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataSalesperson: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataSalesperson } = salespersonSlice.actions;

export default salespersonSlice.reducer;
