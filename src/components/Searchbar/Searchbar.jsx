import React from 'react';
import {
  SearchbarContainer,
  SearchbarInput,
  SearchbarText,
} from './Searchbar.styled';

export const Searchbar = ({ changeFilter }) => {
  return (
    <SearchbarContainer>
      <SearchbarText>Find article</SearchbarText>
      <SearchbarInput
        id="input"
        type="text"
        onChange={e => {
          changeFilter(e.target.value);
        }}
      />
    </SearchbarContainer>
  );
};
