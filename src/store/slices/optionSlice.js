import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    linkId: '',
    viewMode: '',
    signStatus: false,
  },
};

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    updateLinkId: (state, action) => {
      state.data.linkId = action.payload;
    },
    updateData: (state, action) => {
      state.data[action.payload.dataKey] = action.payload.data;
    },
    updateSignStatus: (state, action) => {
      state.data.signStatus = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateData, updateSignStatus } = optionSlice.actions;

export default optionSlice.reducer;
