import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    deposit: '',
    balance: 0,
    cardholderName: '',
    visa: false,
    mc: false,
    amex: false,
    disc: false,
    cardNumber: '',
    expDate: '',
    expMonth: '',
    cvvMode: '',
    signDate: '',
    signature: '',
  },
};

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataCredit: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataCredit } = creditSlice.actions;

export default creditSlice.reducer;
