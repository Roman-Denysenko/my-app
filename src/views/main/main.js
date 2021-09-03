import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import s from './Main.module.css';
import Header from '../../components/header';
import Aside from '../../components/aside';
import News from '../../components/news';
import Films from '../../components/films';
import Home from '../../components/home';

const Main = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Aside />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/films" component={Films} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Main;
