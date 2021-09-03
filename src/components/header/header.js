import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <Link to="/" className={s.link}>
          home
        </Link>
        <Link to="/news" className={s.link}>
          news
        </Link>
        <Link to="/films" className={s.link}>
          films
        </Link>
      </nav>
    </header>
  );
};

export default Header;
