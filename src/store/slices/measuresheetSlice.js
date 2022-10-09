import { createSlice } from '@reduxjs/toolkit';
import { initDataOfMeasureSheet } from '../../constants/variables';

const initialState = {
  data: {
    windowTable: {
      tearouts: 'WOOD',
      pockets: 'WOOD',
      cutbacks: '(-3/8") x (-1/2")',
    },
    typeTable: { grid: 'NO GRIDS', capping: 'BRICKMOLD' },
    mainTable: {},
  },
};

for (let i = 0; i < 20; i++) {
  initialState.data.mainTable[i] = { ...initDataOfMeasureSheet, no: i + 1 };
}

export const measuresheetSlice = createSlice({
  name: 'measuresheet',
  initialState,
  reducers: {
    updateWindowTable: (state, action) => {
      state.data.windowTable = { ...action.payload };
    },
    updateTypeTable: (state, action) => {
      state.data.typeTable = { ...action.payload };
    },
    updateMainTable: (state, action) => {
      state.data.mainTable = { ...action.payload };
    },
    updateDataMeasureSheet: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
  updateDataMeasureSheet,
} = measuresheetSlice.actions;

export default measuresheetSlice.reducer;
