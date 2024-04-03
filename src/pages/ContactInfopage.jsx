import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeContactInfo } from '../app/contactInfoSlice';
import './ContactInfopage.css';

const ContactInfoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(storeContactInfo(values)); // Dispatch only the form values
    navigate('../shipment-info');
    setSubmitting(false); // Manually set submitting state to false
  };

  return (
    <div className="contact-info-page">
      <h1>Contact information</h1>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', phone: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.phone) {
            errors.phone = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="contact-form-wrap">
              <div className="top-fields">
                <div className="f-name wrap">
                  <label htmlFor="firstname">First name</label>
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname"
                  />
                  <ErrorMessage name="firstname">
                    {(errMsg) => (
                      <span className="error-message">{errMsg}</span>
                    )}
                  </ErrorMessage>
                </div>
                <div className="l-name wrap">
                  <label htmlFor="lastname">Last name</label>
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                  />
                  <ErrorMessage name="lastname">
                    {(errMsg) => (
                      <span className="error-message">{errMsg}</span>
                    )}
                  </ErrorMessage>
                </div>
              </div>
              <div className="bottom-fields">
                <div className="email wrap">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <ErrorMessage name="email">
                    {(errMsg) => (
                      <span className="error-message">{errMsg}</span>
                    )}
                  </ErrorMessage>
                </div>
                <div className="phone wrap">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="Enter your phone"
                  />
                  <ErrorMessage name="phone">
                    {(errMsg) => (
                      <span className="error-message">{errMsg}</span>
                    )}
                  </ErrorMessage>
                </div>
              </div>
            </div>

            <button
              className="next-step-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Next Step
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactInfoPage;
