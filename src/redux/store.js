import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
import rentRequestReducer from './features/rentRequestsSlice';

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    rentRequest: rentRequestReducer,
  },
});
