import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <Link to="/">home</Link>
        <Link to="/news">news</Link>
        <Link to="/films">films</Link>
      </nav>
    </header>
  );
};

export default Header;
