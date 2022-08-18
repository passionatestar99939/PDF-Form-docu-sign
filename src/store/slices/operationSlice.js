import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  loading: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk(
  'operation/fetchData',
  async (state) => {
    if (state.loading !== 'pending') return;
    const response = await axios.get('/data');
    return response.data;
  }
);

export const postData = createAsyncThunk(
  'operation/postData',
  async ({ data }) => await axios.post('/data', { data })
);

export const operationSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    customerAction: (state, action) => ({
      ...state,
      customer: action.payload,
    }),
  },
  extraReducers(bulider) {
    bulider
      .addCase(fetchData.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle';
          state.data = JSON.parse(action.payload);
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle';
          state.error = action.error;
        }
      });
  },
});

// Action creators are generated for each case reducer function
export const { customerAction } = operationSlice.actions;

export default operationSlice.reducer;
