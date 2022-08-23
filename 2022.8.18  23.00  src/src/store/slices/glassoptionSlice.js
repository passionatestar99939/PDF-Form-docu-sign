import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    glassOptionInput1: 0,
    glassOptionInput2: 0,
  },
};

export const glassoptionSlice = createSlice({
  name: 'glassOption',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      console.log('state.data[action.payload.id]', action.payload);
      state.data[action.payload.id] = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue } = glassoptionSlice.actions;

export default glassoptionSlice.reducer;
