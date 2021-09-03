import React, { useEffect, useState } from 'react';
import axios from 'axios';

import s from './CashRate.module.css';

const BASE_URL_PB =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const CashRate = () => {
  const [cash, setCash] = useState([]);

  useEffect(() => {
    async function fetchApiPB() {
      try {
        const response = await axios.get(BASE_URL_PB);
        await setCash([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApiPB();
  }, []);
  
  return (
    <div>
      <ul className={s.list}>
        {cash.map(el => {
          return (
            <li key={el.buy} className={s.item}>
              {el.ccy}-{el.base_ccy} : buy-{el.buy} sale{el.sale}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CashRate;
