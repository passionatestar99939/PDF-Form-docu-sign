import { createSlice } from '@reduxjs/toolkit';
import { initDataOfWindowOrder } from '../../constants/variables';

const initialState = {
  data: {
    mainTable: {},
    drawingData: {},
  },
};

for (let i = 0; i < 16; i++) {
  initialState.data.mainTable[i] = { ...initDataOfWindowOrder };
}

export const windoworderSlice = createSlice({
  name: 'windoworder',
  initialState,
  reducers: {
    updateMainTable: (state, action) => {
      state.data.mainTable = action.payload;
    },
    updateDrawingData: (state, action) => {
      state.data.drawingData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMainTable, updateDrawingData } = windoworderSlice.actions;

export default windoworderSlice.reducer;
