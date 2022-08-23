import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    calculateInput1: 200,
    calculateInput2: 75,
    calculateInput3: 0,
    calculateInput4: 0,
    calculateInput5: 0,
    calculateInput6: 0,
    signature1: '',
    signature2: '',
    contractsubtotal: 0,
    amount: 275,
    downpayment: 28,
    monthly1: 17,
    monthly2: 5,
    color: '',
    handle: '',
    handleBox1: '',
    handleBox2: '',
    handleBox3: '',
    handleBox4: '',
    handleBox5: '',
  },
};

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataCalculate: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataCalculate } = calculateSlice.actions;

export default calculateSlice.reducer;
