import { createSlice } from '@reduxjs/toolkit';
import { initDataOfMeasureSheet } from '../../constants/variables';

const initialState = {
  data: {
    windowTable: {
      tearouts: 'WOOD',
      pockets: 'WOOD',
      cutbacks: { w: '-3/8' },
    },
    typeTable: { grid: 'NO GRIDS', capping: 'BRICKMOLD' },
    mainTable: {},
    drawingData: ['', '', ''],
  },
};

for (let i = 0; i < 17; i++) {
  initialState.data.mainTable[i] = {
    ...initDataOfMeasureSheet,
    no: i + 1,
    // room: 'LIVING ROOM',
    // intColor: 'Colonial Cherry - Laminated',
    // extColor: 'Almond - Extruded',
    // energy: 'LOE 340 SZONE SUNSHILD',
    // grids: '6/6',
    // roWidth: i,
    // categoryNum: i,
  };
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
    updateDrawingDataFunc: (state, action) => {
      state.data.drawingData[action.payload.index] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateWindowTable,
  updateTypeTable,
  updateMainTable,
  updateDataMeasureSheet,
  updateDrawingDataFunc,
} = measuresheetSlice.actions;

export default measuresheetSlice.reducer;
