import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    glassOptionInput1: '',
    glassOptionInput2: '',
  },
};

export const glassoptionSlice = createSlice({
  name: 'glassoption',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataGlassoption: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataGlassoption } = glassoptionSlice.actions;

export default glassoptionSlice.reducer;
