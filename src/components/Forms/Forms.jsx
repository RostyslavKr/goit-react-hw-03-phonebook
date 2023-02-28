import React from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  TitleInput,
  Input,
  Error,
  NameInput,
  Button,
} from './Forms.styled';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  number: Yup.string().required('*Required'),
});
export const Forms = ({ onSave }) => (
  <FormContainer>
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <TitleInput htmlFor="name">
          <NameInput>Name</NameInput>
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </TitleInput>
        <TitleInput htmlFor="number">
          <NameInput>Number</NameInput>
          <Input
            type="text"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            name="number"
          />
          <Error name="number" component="div" />
        </TitleInput>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  </FormContainer>
);

Form.propTypes = {
  onSave: PropTypes.func,
};
