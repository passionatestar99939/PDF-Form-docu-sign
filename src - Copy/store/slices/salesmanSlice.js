import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    date1: formatDate(new Date()),
    salesman: "Nick Tisdale",
    date2: formatDate(new Date()),
    owner: "",
    date3: formatDate(new Date()),
    email: "",
    signature: "",
  },
};

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("/");
}

export const salesmanSlice = createSlice({
  name: "salesman",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataSalesman: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataSalesman } = salesmanSlice.actions;

export default salesmanSlice.reducer;
