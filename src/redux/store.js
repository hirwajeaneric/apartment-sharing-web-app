import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
// import filterReducer from './features/filter/filterSlice';
// import responseReducer from './features/response/responseSlice';

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    // filter: filterReducer,
    // response: responseReducer,
  },
});
