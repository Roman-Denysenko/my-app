import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsReducer';

const store = configureStore({
  reducer: {
    newsValueSearch: newsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
