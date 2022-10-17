import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    cc_name: '',
    cc_deposit: 0,
    cc_address: '',
    cc_zip: '',
    cc_balance: 0,
    cc_phone: '',
    cc_cardholder_name: '',
    cc_visa: '',
    cc_mc: '',
    cc_amex: '',
    cc_dicover: '',
    cc_card_number: '',
    expDate: '',
    expMonth: '',
    cc_cvv_code: '',
    signature: '',
    signDate: formatDate(new Date()),
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
