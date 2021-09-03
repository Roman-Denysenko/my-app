import { createReducer } from '@reduxjs/toolkit';
import { fetchFilms } from './filmsAction';

const filmsReducer = createReducer('', {
  [fetchFilms]: (_, payload) => payload,
});

export default filmsReducer;
