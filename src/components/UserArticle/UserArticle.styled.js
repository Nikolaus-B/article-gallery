import styled from 'styled-components';

export const UserArticleItem = styled.li`
  display: flex;
  gap: 10px;

  width: 500px;
  border: 2px solid #c0c0c0;
  border-radius: 5px;
`;

export const UserArticleImage = styled.img`
  width: 210px;
  height: 300px;
`;

export const UserArticleAuthor = styled.h3``;
export const UserArticleTitle = styled.h2``;
export const UserArticlDescription = styled.p``;

export const ArticleButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const PinButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 2px solid #c0c0c0;
  border-radius: 50%;
  color: #34495e;
  background-color: #e7e9fc;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #ff8c00;
  }
`;

export const DeleteArticleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #c0c0c0;
  border-radius: 50%;
  color: #34495e;
  background-color: #e7e9fc;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: #ff0000;
  }
`;
