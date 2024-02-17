import React from 'react';
import { Image, ImageContainer, Item } from './ArticleItem.styled';

export const ArticleItem = ({ article }) => {
  return (
    <Item>
      <ImageContainer>
        <Image
          src={
            article.urlToImage ||
            'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
          }
          alt="article title"
        />
      </ImageContainer>
      <h1>{article.author || 'No author'} </h1>
      <h2>{article.title || 'No title'} </h2>
      <p>{article.description || 'No description avalable'} </p>
    </Item>
  );
};
