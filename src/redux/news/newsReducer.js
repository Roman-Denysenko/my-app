import { createReducer } from '@reduxjs/toolkit';
import { fetchNews } from './newsAction';

const newsReducer = createReducer('', {
  [fetchNews]: (_, payload) => payload,
});

export default newsReducer;
