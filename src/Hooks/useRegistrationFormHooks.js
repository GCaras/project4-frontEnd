import { useState } from 'react';

const useRegistrationForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleRegistrationSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleRegistrationChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleRegistrationChange,
    handleRegistrationSubmit,
    values,
  }
};

export default useRegistrationForm;