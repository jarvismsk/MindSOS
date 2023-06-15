import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
