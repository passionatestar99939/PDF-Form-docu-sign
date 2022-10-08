import { createSlice } from "@reduxjs/toolkit";
import { initDataOfMeasureSheet } from "../../constants/variables";

const initialState = {
  data: {
    windowTable: {},
    typeTable: {},
    mainTable: {},
  },
};

for (let i = 0; i < 20; i++) {
  initialState.data.mainTable[i] = { ...initDataOfMeasureSheet, no: i + 1 };
}

export const measuresheetSlice = createSlice({
  name: "measuresheet",
  initialState,
  reducers: {
    updateWindowTable: (state, action) => {
      state.data.windowTable = action.payload;
    },
    updateTypeTable: (state, action) => {
      state.data.typeTable = action.payload;
    },
    updateMainTable: (state, action) => {
      state.data.mainTable = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateWindowTable, updateTypeTable, updateMainTable } =
  measuresheetSlice.actions;

export default measuresheetSlice.reducer;
