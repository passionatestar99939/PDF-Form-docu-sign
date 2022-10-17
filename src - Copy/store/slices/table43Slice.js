import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    window: '',
    capping: '',
    doors: '',
    disposalY: false,
    disposalN: false,
    mullRemoval: '',
    rrRemoval: '',
    extraLabor: '',
    cont: '',
    name: 'Nick Tisdale      (502) 310-9454',
  },
};

export const table43Slice = createSlice({
  name: 'table43',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataTable43: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataTable43 } = table43Slice.actions;

export default table43Slice.reducer;
