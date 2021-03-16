import { useEffect, useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // create errors variable to control errors found in state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate user input
    setErrors(validate(values));
    //set loading
    setLoading(true);
  };

  //create a userEffect watcher that only gets triggered if errors appear
  useEffect(() => {
    if (Object.keys(errors).length === 0 && loading) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
