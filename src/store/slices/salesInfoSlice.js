import { createSlice } from '@reduxjs/toolkit';

import { formatDate } from '../../utils/globals';

const initialState = {
  data: {
    salesConsultant: 'Nick Tisdale',
    customer: 'Smith, Jerry',
    date: formatDate(new Date()),
    salesRepNumber: 0,
    po: 0,
    account: 'Kentukiana #348',
    repNumber: '005',
    comm: 8,
    wwOrder: '#348',
    contractTotal: 0,
  },
};

export const salesInfoSlice = createSlice({
  name: 'salesInfo',
  initialState,
  reducers: {
    updateSalesInfo: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataSalesInfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSalesInfo, updateDataSalesInfo } = salesInfoSlice.actions;

export default salesInfoSlice.reducer;
