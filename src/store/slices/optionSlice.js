import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    linkId: '',
    viewMode: '',
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
  },
});

// Action creators are generated for each case reducer function
export const { updateData } = optionSlice.actions;

export default optionSlice.reducer;
