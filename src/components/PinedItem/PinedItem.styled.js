import styled from 'styled-components';

export const PinedItem = styled.li`
  display: flex;
  gap: 10px;

  width: 500px;
  border: 2px solid #ff8c00;
  border-radius: 5px;
`;

export const PinedImage = styled.img`
  width: 210px;
  height: 300px;
`;

export const PinedAuthor = styled.h3``;
export const PinedTitle = styled.h2``;
export const PinedDescription = styled.p``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const UnpinButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 2px solid #c0c0c0;
  border-radius: 50%;
  background-color: #e7e9fc;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #ff8c00;
  }
`;

export const PinedDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #c0c0c0;
  border-radius: 50%;
  background-color: #e7e9fc;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #ff0000;
  }
`;
