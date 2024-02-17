import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 400px;
  height: 450px;
  max-height: 400px;
  margin-left: 50px;
  margin-top: 40px;
  padding: 20px 30px;

  border-radius: 5px;
  box-shadow: 0px 0px 17px 8px rgba(0, 0, 0, 0.23);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  border: 1px solid #2e2f42;
`;

export const FormErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const FormButton = styled.button`
  margin-left: 10px;
  height: 40px;
  background-color: #e7e9fc;
  color: #34495e;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: #3498db;
    background-color: #34495e;
  }
`;
