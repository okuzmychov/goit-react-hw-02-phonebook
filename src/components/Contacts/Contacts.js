import { Wrapper, ErrorMsg, StyleButton } from './Contacts.styled';
import { Formik, Field } from 'formik';
import { useRef } from 'react';
import { InputWrapper } from 'components/Input/Input';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    'Name may contain only letters, apostrophe, dash and spaces')
    .required('Required'),
    number: Yup.string().matches(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
)
    .required('Required'),
});

export const Contacts = ({ onAdd }) => {
  const buttonRef = useRef(null);

  return (
    <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          actions.resetForm();
            if (buttonRef.current) {
            buttonRef.current.blur();
          }
      }}
    >
        <Wrapper>
          <InputWrapper title="Name">
            <Field name="name" type="text" />
            <ErrorMsg name="name" component="div" />
          </InputWrapper>

          <InputWrapper title="Number">
            <Field name="number" type="tel" />
            <ErrorMsg name="number" component="div" />
          </InputWrapper>
          
        <StyleButton type="submit" ref={buttonRef}>Add contact</StyleButton>
      </Wrapper>
    </Formik>
    </div>
  );
};
