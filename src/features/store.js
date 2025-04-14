import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';
import orderSlice from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    orderSlice,
    counterSlice,
    userSlice
  },
})