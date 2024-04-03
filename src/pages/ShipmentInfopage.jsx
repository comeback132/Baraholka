import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { storeShipmentInfo } from '../app/shipmentInfoSlice';
import './ShipmentInfopage.css';

const ShipmentInfopage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(storeShipmentInfo(values)); // Dispatch only the form values
    navigate('/order');
    setSubmitting(false); // Manually set submitting state to false
  };

  return (
    <div className="shipment-info-page">
      <h1>Shipment information</h1>
      <Formik
        initialValues={{ address: '', apartment: '', city: '', country: '', state: '', zip: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.address) {
            errors.address = 'Required';
          }
          if (!values.city) {
            errors.city = 'Required';
          }
          if (!values.country) {
            errors.country = 'Required';
          }
          if (!values.state) {
            errors.state = 'Required';
          }
          if (!values.zip) {
            errors.zip = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="contact-form-wrap">
              <div className="top-fields">
                <div className="address wrap">
                  <label htmlFor="address">Address (No P.O. Boxes)</label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                  />
                  <ErrorMessage name="address" component="div" className="error-message" />
                </div>
                <div className="apartment wrap">
                  <label htmlFor="apartment">Apartment, suite etc. (optional)</label>
                  <Field
                    type="text"
                    name="apartment"
                    placeholder="Enter your apartment information"
                  />
                  <ErrorMessage name="apartment" component="div" className="error-message" />
                </div>
                <div className="city wrap">
                  <label htmlFor="city">City</label>
                  <Field
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                  />
                  <ErrorMessage name="city" component="div" className="error-message" />
                </div>
              </div>
              <div className="bottom-fields">
                <div className="country wrap">
                  <label htmlFor="country">Country/Region</label>
                  <Field as="select" name="country" className="select-field">
                    <option value="" disabled>Select your country/region</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                  </Field>
                  <ErrorMessage name="country" component="div" className="error-message" />
                </div>
                <div className="state wrap">
                  <label htmlFor="state">State</label>
                  <Field as="select" name="state" className="select-field">
                    <option value="" disabled>Select your state</option>
                    <option value="Kyivska">Kyivska</option>
                    <option value="Cherkaska">Cherkaska</option>
                    <option value="East Sussex">East Sussex</option>
                  </Field>
                  <ErrorMessage name="state" component="div" className="error-message" />
                </div>
                <div className="zip wrap">
                  <label htmlFor="zip">ZIP code</label>
                  <Field
                    type="text"
                    name="zip"
                    placeholder="Enter your ZIP code"
                  />
                  <ErrorMessage name="zip" component="div" className="error-message" />
                </div>
              </div>
            </div>
            <button
              className="next-step-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Submit order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShipmentInfopage;
