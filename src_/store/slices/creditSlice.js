import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    deposit: 0,
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
    signDate: formatDate(new Date()),
    signature: '',
  },
};

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/');
}


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
