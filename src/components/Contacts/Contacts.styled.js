import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 12px;
  border-radius: 8px;
  width: 350px;
`;

export const ContactInfo = styled(Form)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDelete = styled.button`
  width: 80px;
  padding: 4px;
  border: none;
  border-radius: 5px;
  background-color: ${p => p.theme.colors.lightgreen};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.green};
  }
`;
