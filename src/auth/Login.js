import React , { useEffect }  from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "./../Layout/index";

import Input from "./../components/Ui/Input/Input";
import Button from "./../components/Ui/Button/Button";
import Heading from "./../components/Ui/Heading/Headings";
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from './../store/actions';
import MessageError from './../components/Ui/Message/Message';


const MessageWrapper = styled.div`
  position: relative;
  bottom: 0;
`;


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The passoword is required.')
    .min(8, 'Too short.'),
});

const Login = ({ login, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Login 
          </Heading>
          <Heading bold size="h4" color="white">
            Fill in your details to login into your account
          </Heading>
          <StyledForm>
            <Field
            
              type="email"
              name="email"
              placeholder="email"
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="password"
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Logging in...' : null}
              type="submit"
            >
              Login
            </Button>
            <MessageWrapper>
              <MessageError error show={error}>
                {error}
              </MessageError>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
  cleanUp: actions.clean,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
