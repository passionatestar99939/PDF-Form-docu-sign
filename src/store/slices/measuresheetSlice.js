import { createSlice } from '@reduxjs/toolkit';
import {
  gridStyle,
  initDataOfMeasureSheet,
  cutbacks,
  texture,
} from '../../constants/variables';

const initialState = {
  data: {
    windowTable: {
      tearouts: 'WOOD',
      pockets: 'WOOD',
      // cutbacks: cutbacks.WOOD,
      cutbacksStr: '(-3/8") X (-3/8")',
      cutbacks: cutbacks['(-3/8") X (-3/8")'],
      // cutbacksStr: '(-1/4") X (-1/4")',
      // cutbacks: cutbacks['(-1/4") X (-1/4")'],
    },
    typeTable: {
      gridStyle: gridStyle.normalType[0],
      capping: 'BRICKMOLD',
      trimColor: '',
      texture: '',
    },
    // typeTable: {
    //   gridStyle: gridStyle.normalType[3],
    //   capping: 'BRICKMOLD',
    //   trimColor: 'TRIMCOLOR',
    //   texture: texture[1],
    // },
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
