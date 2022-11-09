import { createSlice } from '@reduxjs/toolkit';
import {
  gridStyle,
  initDataOfMeasureSheet,
  cutbacks,
} from '../../constants/variables';

const initialState = {
  data: {
    windowTable: {
      tearouts: 'WOOD',
      pockets: 'WOOD',
      cutbacks: cutbacks.WOOD,
    },
    typeTable: {
      gridStyle: gridStyle.normalType[0],
      capping: 'BRICKMOLD',
      trimColor: '',
      texture: '',
    },
    mainTable: {},
    drawingData: [{}, {}, {}],
  },
};

for (let i = 0; i < 40; i++) {
  initialState.data.mainTable[i] = {
    ...initDataOfMeasureSheet,
    no: i + 1,
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
    // updateDrawingDataFunc: (state, action) => {
    //   state.data.drawingData[action.payload.index] = { ...action.payload };
    // },
    updateDrawingDataFunc: (state, action) => {
      state.data.drawingData[action.payload.index] = {
        value: action.payload.value,
        // style: JSON.stringify(action.payload.style),
        style: action.payload.style,
      };
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
