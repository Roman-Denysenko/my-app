import React from 'react';

import s from './Main.module.css';
import Header from '../../components/header';
import Aside from '../../components/aside';
import News from '../../components/news';
import Input from '../../components/input';
import { fetchNews } from '../../redux/news/newsAction';

const Main = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Aside />
        <div>
          <Input className={s.form} onActionSubmit={fetchNews} />
          <News />
        </div>
      </div>
    </>
  );
};

export default Main;
