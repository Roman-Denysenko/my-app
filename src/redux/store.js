import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsReducer';
import filmsReducer from './films/filmsReducer';

const store = configureStore({
  reducer: {
    newsValueSearch: newsReducer,
    filmsValueSearch: filmsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
