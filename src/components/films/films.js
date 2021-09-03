import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';

import s from './Films.module.css';
import { searchFilmsValue } from '../../redux/films/selector';
import Input from '../input';
import { fetchFilms } from '../../redux/films/filmsAction';

const API_KEY = '42e4f7e7a08186209560ab6d6e4df7d1';
const baseURL = `https://api.themoviedb.org`;

const Films = () => {
  const [films, setFilms] = useState([]);
  //   const inputFilmsValue = useSelector(searchFilmsValue);
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get(
          baseURL +
            `/3/search/movie?api_key=${API_KEY}&language=en-US&query=sport&page=1&include_adult=false`,
        );
        await console.log(response);
        await setFilms(() => [...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, []);

  return (
    <div>
      <Input onActionSubmit={fetchFilms} />
      <h1>Films</h1>
    </div>
  );
};

export default Films;
