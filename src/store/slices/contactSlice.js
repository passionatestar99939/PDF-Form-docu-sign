import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    customer: '',
    installAddr: '',
    phone1: '',
    phone2: '',
    billAddr: '',
  },
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataContact: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataContact } = contactSlice.actions;

export default contactSlice.reducer;
