import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './slices/counterSlice';
import contactReducer from './slices/contactSlice';
import operationReducer from './slices/operationSlice';
import windowWorldReducer from './slices/windowworldSlice';
import vinylslidingReducer from './slices/vinylslidingSlice';
import glassoptionReducer from './slices/glassoptionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    operation: operationReducer,
    windowworld: windowWorldReducer,
    vinylsliding: vinylslidingReducer,
    glassoption: glassoptionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
