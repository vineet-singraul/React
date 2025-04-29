import { configureStore } from '@reduxjs/toolkit';
import userReducer from './nameSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;