import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 12px;
  border-radius: 5px;
  width: 450px;
`;

export const ContactInfo = styled.li`
  display: flex;
  flex-direction: row;
  gap: 15px;
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
