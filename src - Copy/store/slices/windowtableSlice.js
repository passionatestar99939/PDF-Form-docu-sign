import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

for (let i = 0; i < 60; i++) {
  initialState.data[`le${i + 1}`] = false;
}

export const windowtableSlice = createSlice({
  name: 'windowtable',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataWindowtable: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataWindowtable } = windowtableSlice.actions;

export default windowtableSlice.reducer;
