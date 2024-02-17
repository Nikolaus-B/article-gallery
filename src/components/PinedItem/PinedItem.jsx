import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deletePinnedArticle,
  pinArticle,
} from '../../redux/userArticle/userArticleSlice';
import {
  ButtonContainer,
  PinedAuthor,
  PinedDeleteButton,
  PinedDescription,
  PinedImage,
  PinedItem,
  PinedTitle,
  UnpinButton,
} from './PinedItem.styled';
import { MdOutlineDelete } from 'react-icons/md';
import { BsPin } from 'react-icons/bs';

export const PinnedItem = ({ pinedArticle }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <PinedItem key={pinedArticle.id}>
        <PinedImage src={pinedArticle.imageUrl} alt="" />
        <div>
          <PinedAuthor>
            <span>Author: </span>
            {pinedArticle.author}
          </PinedAuthor>
          <PinedTitle>
            <span>Title: </span>
            {pinedArticle.title}
          </PinedTitle>
          <PinedDescription>
            <span>Description: </span>
            {pinedArticle.description}
          </PinedDescription>
          <ButtonContainer>
            <UnpinButton
              type="button"
              onClick={() => {
                dispatch(pinArticle({}));
              }}
            >
              <BsPin size={'1.5em'} color={'#34495e'} />
            </UnpinButton>
            <PinedDeleteButton
              type="button"
              onClick={() => {
                dispatch(deletePinnedArticle(pinedArticle.id));
              }}
            >
              <MdOutlineDelete size={'1.8em'} color={'#34495e'} />
            </PinedDeleteButton>
          </ButtonContainer>
        </div>
      </PinedItem>
    </div>
  );
};
