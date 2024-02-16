import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/acrticles/articlesSlice';

export const Searchbar = () => {
  const dispatch = useDispatch();

  //   const onFormSubmit = e => {
  //     e.preventDefault();
  //     dispatch(changeFilter(e.target.input.value));
  //     e.target.input.value = '';
  //   };

  return (
    <div>
      <input
        id="input"
        type="text"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};
