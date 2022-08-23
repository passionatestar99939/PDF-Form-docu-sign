import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

for (let i = 0; i < 33; i++) {
  initialState.data[`windowWorldInput${i + 1}`] = '';
}

export const windowworldSlice = createSlice({
  name: 'windowworld',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      console.log('state.data[action.payload.id]', action.payload);
      state.data[action.payload.id] = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue } = windowworldSlice.actions;

export default windowworldSlice.reducer;
