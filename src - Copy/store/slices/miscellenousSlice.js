import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

for (let i = 0; i < 40; i++) {
  initialState.data[`miscellenousInput${i + 1}`] = '';
}

initialState.data['miscellenousInput16'] = 0;
initialState.data['miscellenousInput17'] = 0;
initialState.data['miscellenousInput18'] = 0;
initialState.data['miscellenousInput19'] = 0;

export const miscellenousSlice = createSlice({
  name: 'miscellenous',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.count;
    },
    updateDataMiscellenous: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataMiscellenous } =
  miscellenousSlice.actions;

export default miscellenousSlice.reducer;
