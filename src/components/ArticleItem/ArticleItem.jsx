import React from 'react';
import {
  ArticleAuthor,
  ArticleDescription,
  ArticleTitle,
  Image,
  ImageContainer,
  Item,
} from './ArticleItem.styled';

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
      <ArticleAuthor>
        <span style={{ color: '#a2add0' }}>Author: </span>{' '}
        {article.author || 'No author'}{' '}
      </ArticleAuthor>
      <ArticleTitle>
        <span style={{ color: '#b7c7c3' }}>Title: </span>
        {article.title || 'No title'}{' '}
      </ArticleTitle>
      <ArticleDescription>
        <span style={{ color: '#ad6d88' }}>Description: </span>
        {article.description || 'No description avalable'}{' '}
      </ArticleDescription>
    </Item>
  );
};
