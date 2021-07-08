import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <a>news</a>
      </nav>
    </header>
  );
};

export default Header;
