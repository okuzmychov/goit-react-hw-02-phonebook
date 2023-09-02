import { Wrapper, Label, Button } from './Contacts.styled';
import { Formik, Field } from 'formik';
 import * as Yup from 'yup';

 const ContactSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string().email('Invalid email').required('Required'),
 });
 

export const Contacts = () => {
  return (
    <div>
  <Formik
      initialValues={{
        name: '',
        number: '',
        }}
        validationSchema={ContactSchema}
        onAddcontact={values => {
        console.log(values);
      }}
    >
        <Wrapper>
          <Label>
            Name
            <Field name="name" type="text" placeholder="Oleg" />
          </Label>

          <Label>
            Number
            <Field name="number" type="tel" placeholder="123-45-67" />
          </Label>
          
        <Button type="add-contact">Add contact</Button>
      </Wrapper>
    </Formik>
    </div>
  );
};
