import { Wrapper, ContactInfo, ButtonDelete } from './Contacts.styled';
 import { Formik, Field, Form } from 'formik';

export const Contacts = () => {
  return (
    <div>
  <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onAddcontact={values => {
        console.log(values);
      }}
    >
        <Wrapper>
          <ContactInfo>
            Name
            <Field name="name" type="text" placeholder="Oleg" />
          </ContactInfo>

          <ContactInfo>
            Number
            <Field name="number" type="number" placeholder="123-45-67" />
          </ContactInfo>
          
        <button type="add-contact">Add contact</button>
      </Wrapper>
    </Formik>
    </div>
  );
};
