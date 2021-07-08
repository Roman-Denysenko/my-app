import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';

import s from './News.module.css';
import { searchNewsValue } from '../../redux/news/selector';

const API_KEY = '212fe16f93d74cf489b7594d6a016e82';
const baseURL = `https://newsapi.org/v2/everything`;

const News = () => {
  const [news, setNews] = useState([]);
  const inputNewsValue = useSelector(searchNewsValue);
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.get(
          baseURL + `?q=${inputNewsValue}&apiKey=${API_KEY}`,
        );
        await setNews(() => [...response.data.articles]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, [inputNewsValue]);

  const NewsItem = ({ publishedAt, title, url, urlToImage }) => {
    return (
      <li key={publishedAt} className={s.item}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} alt={title} className={s.img}></img>
          {title}
        </a>
      </li>
    );
  };

  return (
    <div className={s.container}>
      <ul>{news.map(NewsItem)}</ul>
    </div>
  );
};

News.propTypes = {
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
};

export default News;
