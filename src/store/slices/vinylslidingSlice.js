import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

for (let i = 0; i < 40; i++) {
  initialState.data[`vinylSlidingInput${i + 1}`] = '';
}

export const vinylslidingSlice = createSlice({
  name: 'vinylsliding',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      console.log('state.data[action.payload.id]', action.payload);
      state.data[action.payload.id] = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue } = vinylslidingSlice.actions;

export default vinylslidingSlice.reducer;
