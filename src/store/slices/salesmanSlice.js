import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    date1: '',
    salesman: 'Nick Tisdale',
    date2: '',
    owner: '',
    date3: '',
    email: '',
    signature: '',
  },
};

export const salesmanSlice = createSlice({
  name: 'salesman',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataSalesman: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataSalesman } = salesmanSlice.actions;

export default salesmanSlice.reducer;
