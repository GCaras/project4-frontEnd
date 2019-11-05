import { useState } from 'react';

const useNewBlogPostForm = (initialValues, callback) => {

  const [values, setValues] = useState(initialValues);

  const handleNewBlogPostSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleNewBlogPostChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleNewBlogPostChange,
    handleNewBlogPostSubmit,
    values,
  }
};

export default useNewBlogPostForm;