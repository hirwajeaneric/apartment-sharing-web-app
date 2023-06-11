import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
import rentRequestReducer from './features/rentRequestsSlice';
import joinRequestReducer from './features/joinRequestsSlice';

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    rentRequest: rentRequestReducer,
    joinRequest: joinRequestReducer,
  },
});
