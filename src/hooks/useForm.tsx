import { useState } from "react";
// import useLoginUser from "../contexts/usersContext/userHooks/useLoginUser";

const useForm = (callback: any) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    callback();

  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
