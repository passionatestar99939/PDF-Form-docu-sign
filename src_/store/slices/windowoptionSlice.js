import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

for (let i = 0; i < 20; i++) {
  initialState.data[`windowOptionInput${i + 1}`] = '';
}

initialState.data['windowOptionInput14'] = 'NO GRIDS';

export const windowoptionSlice = createSlice({
  name: 'windowoption',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataWindowoption: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataWindowoption } =
  windowoptionSlice.actions;

export default windowoptionSlice.reducer;
