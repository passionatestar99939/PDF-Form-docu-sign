import { createSlice } from "@reduxjs/toolkit";

import { formatDate } from "../../utils/globals";

const initialState = {
  data: {
    salesConsultant: "Nick Tisdale",
    customer: "Smith, Jerry",
    date: formatDate(new Date()),
    salesRepNumber: 0,
    po: 0,
    account: "Kentukiana #348",
    repNumber: "005",
  },
};

export const salesInfoSlice = createSlice({
  name: "salesInfo",
  initialState,
  reducers: {
    updateSalesInfo: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSalesInfo } = salesInfoSlice.actions;

export default salesInfoSlice.reducer;
