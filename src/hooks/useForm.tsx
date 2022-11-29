import { useState } from "react";

const useForm = (callback: any) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [signvalues, setsignValues] = useState({ username:"", email: "", password: "", password_confirmation:"" });


  const handleSubmit = (event: any) => {
    event.preventDefault();
    callback();
    setsignValues({ username:"", email: "", password: "", password_confirmation:"" })

  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handlesignChange = (event: any) => {
    event.persist();
    setsignValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handlesignChange,
    handleSubmit,
    values,
    signvalues
  };
};

export default useForm;
