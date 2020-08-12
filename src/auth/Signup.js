import React , { useEffect }  from "react";
import { Formik, Field, } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "./../Layout/index";
import { connect} from 'react-redux'
import Input from "./../components/Ui/Input/Input";
import Button from "./../components/Ui/Button/Button";
import Heading from "./../components/Ui/Heading/Headings";
import MessageError from './../components/Ui/Message/Message';
import styled from 'styled-components'

import * as actions from './../store/actions'



const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Your first name is required.')
      .min(3, 'Too short.')
      .max(25, 'Too long.'),
    lastName: Yup.string()
      .required('Your last name is required.')
      .min(3, 'Too short.')
      .max(25, 'Too long.'),
    email: Yup.string()
      .email('Invalid email.')
      .required('The email is required.'),
    password: Yup.string().required('The passoword is required.')
       .min(8, 'The password is too short.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], `Password doesn't match`)
      .required('You need to confirm your password.'),
  });

  const SignUp = ({ signUp, loading, error, cleanUp }) => {
    useEffect(() => {
      return () => {
        cleanUp();
      };
    }, [cleanUp]);
  
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <FormWrapper>
            <Heading noMargin size="h1" color="white">
              Sign Up 
            </Heading>  <Heading noMargin size="h1" color="white">
            Fill out the form well
            </Heading>
          
          
            <StyledForm>
              <Field
                type="text"
                name="firstName"
                placeholder="First name"
                component={Input}
              />
             <Field
                type="text"
                name="lastName"
                placeholder="Last name"
                component={Input}
              />
              <Field
                type="email"
                name="email"
                placeholder="Your email"
                component={Input}
              />
              <Field
                type="password"
                name="password"
                placeholder="Your password"
                component={Input}
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Re-type your password"
                component={Input}
              />
              <Button
                disabled={!isValid || isSubmitting}
                loading={loading ? 'Signing up...' : null}
                type="submit"
              >
                Sign up
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

const mapStateToProps = ({auth}) =>({

loading: auth.loading,
error: auth.error,


})

const mapDispatchToProps = {

  signUp: actions.signUp,
  cleanUp: actions.clean,
  
}





export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp) ;