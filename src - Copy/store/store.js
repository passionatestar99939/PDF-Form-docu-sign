import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import optionReducer from "./slices/optionSlice";
import contactReducer from "./slices/contactSlice";
import operationReducer from "./slices/operationSlice";
import windowWorldReducer from "./slices/windowworldSlice";
import vinylslidingReducer from "./slices/vinylslidingSlice";
import glassoptionReducer from "./slices/glassoptionSlice";
import prebuiltReducer from "./slices/prebuiltSlice";
import windowoptionReducer from "./slices/windowoptionSlice";
import miscellenousReducer from "./slices/miscellenousSlice";
import roundupReducer from "./slices/roundupSlice";
import calculateReducer from "./slices/calculateSlice";
import salesmanReducer from "./slices/salesmanSlice";
import creditReducer from "./slices/creditSlice";
import jobinfoReducer from "./slices/jobinfoSlice";
import table43Reducer from "./slices/table43Slice";
import table23Reducer from "./slices/table23Slice";
import table33Reducer from "./slices/table33Slice";
import bottompage3Reducer from "./slices/bottompage3Slice";
import windowTableReducer from "./slices/windowtableSlice";
import salespersonReducer from "./slices/salespersonSlice";
import windoworderReducer from "./slices/windoworderSlice";
import patioDoorOrderReducer from "./slices/patioDoorOrderSlice";
import measuresheetReducer from "./slices/measuresheetSlice";
import salesInfoReducer from "./slices/salesInfoSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    operation: operationReducer,
    windowworld: windowWorldReducer,
    vinylsliding: vinylslidingReducer,
    glassoption: glassoptionReducer,
    prebuilt: prebuiltReducer,
    windowoption: windowoptionReducer,
    miscellenous: miscellenousReducer,
    roundup: roundupReducer,
    calculate: calculateReducer,
    salesman: salesmanReducer,
    credit: creditReducer,
    jobinfo: jobinfoReducer,
    table43: table43Reducer,
    table23: table23Reducer,
    table33: table33Reducer,
    bottompage3: bottompage3Reducer,
    windowtable: windowTableReducer,
    salesperson: salespersonReducer,
    option: optionReducer,
    windoworder: windoworderReducer,
    patiodoororder: patioDoorOrderReducer,
    measuresheet: measuresheetReducer,
    salesInfo: salesInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
