import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    prebuiltInput1: '',
    prebuiltInput2: '',
    signature: '',
  },
};

export const prebuiltSlice = createSlice({
  name: 'prebuilt',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataPrebuilt: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataPrebuilt } = prebuiltSlice.actions;

export default prebuiltSlice.reducer;
