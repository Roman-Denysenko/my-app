import React from 'react';

import CashRate from '../cashRate';
import s from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={s.aside}>
      <CashRate />
    </aside>
  );
};

export default Aside;
