import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    note: '',
    floor1: 'Floor 1',
    floor2: 'Floor 2',
    floor3: 'Floor 3',
  },
};

export const bottompage3Slice = createSlice({
  name: 'bottompage3',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataBottompage: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataBottompage } = bottompage3Slice.actions;

export default bottompage3Slice.reducer;
