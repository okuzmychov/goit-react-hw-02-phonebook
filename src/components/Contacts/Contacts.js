import { Wrapper, ContactInfo, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contactInfo: { contacts }, onDeleteContact }) => {
  return (
    <div>
      <Wrapper>
        {contacts.map(contact => (
          <ContactInfo key={contact.id}>
            - {contact.name}: {contact.numbers.join(', ')}
            <ButtonDelete
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </ButtonDelete>
          </ContactInfo>
        ))}
      </Wrapper>
    </div>
  );
};
