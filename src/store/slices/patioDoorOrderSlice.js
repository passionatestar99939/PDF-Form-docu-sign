import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

// for (let i = 0; i < 60; i++) {
//   initialState.data[`le${i + 1}`] = false;
// }

// for (let i = 0; i < 3; i++) {
//   for(let j=0; j<4; j++){
//     for(let k=0; k<15; k++){

//     }
//   }
// }

export const patioDoorOrder = createSlice({
  name: 'patioDoorOrder',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.data[action.payload.id] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue, updateDataWindowtable } = patioDoorOrder.actions;

export default patioDoorOrder.reducer;
