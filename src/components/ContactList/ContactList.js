import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledWrapper>
      {contacts.map(({ id, name, number }) => (
        <StyledLi key={id}>
          <p>
            {name}: {number}
            </p>
            <StyledButton type="button" id={id} onClick={e => onDelete(e.target.id)}>
            DELETE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledWrapper>
  );
};