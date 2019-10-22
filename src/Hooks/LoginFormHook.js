import { useState } from 'react';

const useForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleLoginSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleLoginChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleLoginChange,
    handleLoginSubmit,
    values,
  }
};

export default useForm;
