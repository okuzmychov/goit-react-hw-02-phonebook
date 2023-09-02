import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Button = styled(Form)`
  display: flex;
  width: 100%;
  padding: 4px;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  justify-content: center;
  background-color: ${p => p.theme.colors.lightgreen};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.green};
  }
`;
