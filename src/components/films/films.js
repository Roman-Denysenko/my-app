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
  const inputFilmsValue = useSelector(searchFilmsValue);
  useEffect(() => {
    async function fetchApi() {
      try {
        if (!inputFilmsValue) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
          );
          await setFilms(() => [...response.data.results]);
        } else {
          const response = await axios.get(
            baseURL +
              `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputFilmsValue}&page=1&include_adult=false`,
          );
          await setFilms(() => [...response.data.results]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, [inputFilmsValue]);

  const FilmsItem = ({ id, title, overview, poster_path }) => {
    return (
      <li key={id} className={s.item}>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
          className={s.img}
        ></img>
        <p>{title}</p>
        <p>{overview}</p>
      </li>
    );
  };

  return (
    <div>
      <Input onActionSubmit={fetchFilms} />
      <div className={s.container}>
        <ul>{films.map(FilmsItem)}</ul>
      </div>
    </div>
  );
};

Films.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  overview: PropTypes.string,
};

export default Films;
