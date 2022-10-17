import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    jobname: '',
    phone: '',
    address: '',
    insideColor: 'WHITE',
    outsideColor: 'WHITE',
  },
};

export const jobinfoSlice = createSlice({
  name: 'jobinfo',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataJobinfo: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataJobinfo } = jobinfoSlice.actions;

export default jobinfoSlice.reducer;
