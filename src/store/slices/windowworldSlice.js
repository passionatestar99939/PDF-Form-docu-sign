import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    windowTotal: 0,
    amount: 0,
    signature: '',
  },
};

for (let i = 0; i < 33; i++) {
  initialState.data[`windowWorldInput${i + 1}`] = 0;
}

export const windowworldSlice = createSlice({
  name: 'windowworld',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
    updateDataWindowworld: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataWindowworld } = windowworldSlice.actions;

export default windowworldSlice.reducer;
