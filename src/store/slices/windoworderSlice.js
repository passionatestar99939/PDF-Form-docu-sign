import { createSlice } from '@reduxjs/toolkit';
import { initDataOfWindowOrder } from '../../constants/variables';

const initialState = {
  data: {
    mainTable: {},
    drawingData: '',
  },
};

for (let i = 0; i < 13; i++) {
  initialState.data.mainTable[i] = { ...initDataOfWindowOrder };
}

export const windoworderSlice = createSlice({
  name: 'windoworder',
  initialState,
  reducers: {
    updateMainTable: (state, action) => {
      state.data.mainTable = { ...action.payload };
    },
    updateDataWindowOrder: (state, action) => {
      state.data = { ...action.payload };
    },
    updateDrawingDataFunc: (state, action) => {
      // state.data.drawingData = action.payload;
      state.data.drawingData = {
        value: action.payload.value,
        style: JSON.stringify(action.payload.style),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMainTable, updateDataWindowOrder, updateDrawingDataFunc } =
  windoworderSlice.actions;

export default windoworderSlice.reducer;
