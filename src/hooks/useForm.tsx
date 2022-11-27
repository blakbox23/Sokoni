import { useState } from 'react';

const useForm = (callback:any) => {

  const [values, setValues] = useState({email:"", password:""});

  const handleSubmit = (event: any) => {
   event.preventDefault();
      callback();
    //   setValues({email:"", password:""})
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;