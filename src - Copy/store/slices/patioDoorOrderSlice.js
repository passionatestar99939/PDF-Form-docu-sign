import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const patioDoorOrder = createSlice({
  name: 'patioDoorOrder',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataPatioDoor: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataPatioDoor } = patioDoorOrder.actions;

export default patioDoorOrder.reducer;
