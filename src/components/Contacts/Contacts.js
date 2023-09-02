import { Wrapper, Label, ErrorMsg, Button } from './Contacts.styled';
import { Formik, Field } from 'formik';
import { useRef } from 'react';
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
    // .positive('Must be positive!')
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
          <Label>
            Name
            <Field name="name" type="text" />
            <ErrorMsg name="name" component="div" />
          </Label>

          <Label>
            Number
            <Field name="number" type="tel" />
            <ErrorMsg name="number" component="div" />
          </Label>
          
        <Button type="add-contact">Add contact</Button>
      </Wrapper>
    </Formik>
    </div>
  );
};
