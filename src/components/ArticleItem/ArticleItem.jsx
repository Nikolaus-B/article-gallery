import React from 'react';
import { Image, Item } from './ArticleItem.styled';

export const ArticleItem = ({ article }) => {
  return (
    <Item>
      <Image src={article.urlToImage} alt="article title" />
      <h1>{article.author || 'No author'} </h1>
      <h2>{article.title || 'No title'} </h2>
      <p>{article.description || 'No description avalable'} </p>
    </Item>
  );
};
