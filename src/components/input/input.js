import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './Input.module.css';

const Input = ({ onActionSubmit }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleInputName = e => {
    setSearch(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (search === '') {
      return;
    }
    dispatch(onActionSubmit(search));
    resetForm();
  };

  const resetForm = () => {
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <label className={s.label}>
        Search
        <input
          className={s.input}
          type="text"
          name="search"
          value={search}
          onChange={handleInputName}
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Input;
