import { useEffect, useState } from "react";
import { Dispatch } from "react";
import { Button } from "react-bootstrap";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import useLoginUser from "../contexts/usersContext/userHooks/useLoginUser";
import useUserContext from "../contexts/usersContext/userHooks/useUserContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useForm from "../hooks/useForm";

export function Login() {
  const { values, handleChange, handleSubmit } = useForm(login);
  const {dispatch } = useUserContext();
  const navigate = useNavigate()

  const error = (msg: string) =>
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  function login() {

    let token = "";
    let user

    fetch('http://localhost:3000/api/v1/users/login',{
      method: 'POST',
      body: JSON.stringify(values),

      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res)=> {
      token=res.auth_token
      console.log('res')
      console.log(res.error)

      if(res.error){
        error(res.error)
      }

        dispatch({
            type: 'login',
            payload: res
        })

        token?navigate('/') : null

    })

  }

  return (
    <>
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <div
      style={{
        fontFamily: "Quicksand, sans-serif",
        height: "100vh",
        border: "1px solid black",
        display: "flex",
      }}
    >
      <div className="w-50 border h-100 d-none d-sm-flex login-banner"></div>

      <div className="d-flex p-4 border flex-column justify-content-center align-items-center mobile">
        <h1 className="fs-4 fw-bold mb-3">Log in</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column w-75">
          <label className="mb-2">
            <p className="mb-1">Email</p>
            <input
              className="p-2 ps-3 w-100 inpt"
              type="text"
              placeholder="Email"
              required
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label className="mb-2">
            <p className="mb-1">Password</p>
            <input
              className="p-2 ps-3 w-100 inpt"
              type="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={handleChange}
              name="password"
            />
          </label>

          <Button type="submit" className="mt-3 mb-3" variant="secondary">
            Log in
          </Button>

          <p className="mb-1">
            Don't have an account?{" "}
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#5c636a",
              }}
              to="/sign-up"
            >
              Sign up
            </NavLink>{" "}
          </p>
          <p className="mb-1">or</p>
          <p className="mb-1">
            Go{" "}
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#5c636a",
              }}
              to="/"
            >
              {" "}
              home
            </NavLink>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}
