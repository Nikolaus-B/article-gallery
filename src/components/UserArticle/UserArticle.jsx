import React from 'react';
import {
  deleteArticle,
  pinArticle,
} from '../../redux/userArticle/userArticleSlice';
import { useDispatch } from 'react-redux';
import {
  ArticleButtonContainer,
  DeleteArticleButton,
  PinButton,
  UserArticlDescription,
  UserArticleAuthor,
  UserArticleImage,
  UserArticleItem,
  UserArticleTitle,
} from './UserArticle.styled';
import { BsPinAngle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

export const UserArticle = ({ article }) => {
  const dispatch = useDispatch();
  return (
    <UserArticleItem>
      <UserArticleImage src={article.imageUrl} alt="" />
      <div>
        <UserArticleAuthor>
          <span>Author: </span>
          {article.author}
        </UserArticleAuthor>
        <UserArticleTitle>
          <span>Titile: </span>
          {article.title}
        </UserArticleTitle>
        <UserArticlDescription>
          <span>Description: </span>
          {article.description}
        </UserArticlDescription>
        <ArticleButtonContainer>
          <PinButton
            type="button"
            onClick={() => {
              dispatch(pinArticle(article));
            }}
          >
            <BsPinAngle size={'1.5em'} color={'#34495e'} />
          </PinButton>
          <DeleteArticleButton
            type="button"
            onClick={() => {
              dispatch(deleteArticle(article.id));
            }}
          >
            <MdOutlineDelete size={'1.8em'} color={'#34495e'} />
          </DeleteArticleButton>
        </ArticleButtonContainer>
      </div>
    </UserArticleItem>
  );
};
