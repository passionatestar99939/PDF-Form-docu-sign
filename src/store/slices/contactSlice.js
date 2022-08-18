import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customer: '',
  installAddr: '',
  phone1: '',
  phone2: '',
  billAddr: '',
};

export const contactSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    sendAction: (state, action) => ({
      ...state,
      customer: action.payload,
    }),
    installAddrAction: (state, action) => ({
      ...state,
      installAddr: action.payload,
    }),
    phone1Action: (state, action) => ({
      ...state,
      phone1: action.payload,
    }),
    phone2Action: (state, action) => ({
      ...state,
      phone2: action.payload,
    }),
    billAddrAction: (state, action) => ({
      ...state,
      billAddr: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  customerAction,
  installAddrAction,
  phone1Action,
  phone2Action,
  billAddrAction,
} = contactSlice.actions;

export default contactSlice.reducer;
