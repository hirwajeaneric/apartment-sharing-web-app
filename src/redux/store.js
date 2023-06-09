import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
import rentRequestReducer from './features/rentRequestsSlice';
import responseAndProgressReducer from './features/responseAndProgressSlice';

export const store = configureStore({
  reducer: {
    property: propertyReducer,
    rentRequest: rentRequestReducer,
    responseAndProgress: responseAndProgressReducer,
  },
});
