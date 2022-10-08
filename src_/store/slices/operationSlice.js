import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FileDownload from 'js-file-download';
import axios from 'axios';
import { toast } from 'react-toastify';

import { API_URL } from '../../constants';

export const postDataAsync1 = (data, url) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/${url}`, data);
  } catch (err) {
    throw new Error(err);
  }
};

export const downloadAsync = (linkId) => async (dispatch) => {
  try {
    const response = await axios({
      url: `${API_URL}/download/${linkId}`,
      method: 'GET',
      responseType: 'blob',
    });
    FileDownload(response.data, 'contract.pdf');
  } catch (err) {
    throw new Error(err);
  }
};

export const requestDownloadAsync = createAsyncThunk(
  'operation/requestDownload',
  async (data, thunkAPI) => {
    const response = await axios({
      url: `${API_URL}/download`,
      method: 'POST',
      data: data,
      responseType: 'blob',
    });
    FileDownload(response.data, 'contract.pdf');
  }
);

export const requestSignAsync = createAsyncThunk(
  'operation/requestSign',
  async (data, thunkAPI) => {
    const response = await axios.post();
  }
);

export const fetchDataAsync = createAsyncThunk(
  'operation/fetchData',
  async (linkId, thunkAPI) => {
    const response = await axios.get(`${API_URL}/contract/${linkId}`);
    return JSON.parse(response.data.contract_info);
  }
);

export const postDataAsync = createAsyncThunk(
  'operation/postDataAsync',
  async (data, thunkAPI) => {
    const response = await axios.post(`${API_URL}/${data.url}`, data.data);
  }
);

const initialState = {
  data: {},
  loading: 'idle',
  error: null,
  contractId: '',
};

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    postData: (state, action) => (dispatch) => {
      state.data.push(action.payload);
    },
    fetchData: (state, action) => {
      state.data = [action.payload];
    },
    getContractId: (state, action) => {
      state.contractId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.loading = 'success';
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.loading = 'error';
        state.error = action.error;
      })
      .addCase(postDataAsync.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(postDataAsync.fulfilled, (state, action) => {
        state.loading = 'success';
        state.error = null;
        toast.success('Success!');
      })
      .addCase(postDataAsync.rejected, (state, action) => {
        state.loading = 'error';
        if (action.payload) {
          state.error = { message: action.payload.message };
        } else {
          state.error = action.error;
        }
        toast.warn('Something went wrong!');
      })
      .addCase(requestDownloadAsync.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(requestDownloadAsync.fulfilled, (state, action) => {
        state.loading = 'success';
        state.error = null;
      })
      .addCase(requestDownloadAsync.rejected, (state, action) => {
        state.loading = 'error';
        if (action.payload) {
          state.error = { message: action.payload.message };
        } else {
          state.error = action.error;
        }
        toast.warn('Something went wrong!');
      });
  },
});

// Action creators are generated for each case reducer function
export const { postData, fetchData, getContractId } = operationSlice.actions;

export default operationSlice.reducer;
