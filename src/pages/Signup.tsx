import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import useUserContext from "../contexts/usersContext/userHooks/useUserContext";
import useForm from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Signup() {
  const { signvalues, handlesignChange, handleSubmit } = useForm(signup);
  const { dispatch } = useUserContext();
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

    const success = (msg: string) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    

  function signup() {
    const userSignupObject = {
      user: {
        ...signvalues,
      },
    };

    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      body: JSON.stringify(userSignupObject),

      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {


 
        if (res.errors) {
          res.errors.forEach((err: string)=>error(err))
        } else {
         
          // navigate('/login')
          success('Account created successfully')  

          setTimeout(()=>{
            success('Proceed to log in')
        }, 2000);

          dispatch({
            type: "signup",
            payload: res,
          });
         
        }
      });
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
          <h1 className="fs-4 fw-bold mb-3">Join our community</h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column w-75">
            <label className="mb-2">
              <p className="mb-1">Username</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                type="text"
                placeholder="Username"
                onChange={handlesignChange}
                value={signvalues.username}
                name="username"
                required
              />
            </label>
            <label className="mb-2">
              <p className="mb-1">Email</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                type="text"
                placeholder="Email"
                onChange={handlesignChange}
                value={signvalues.email}
                name="email"
                required
              />
            </label>
            <label className="mb-2">
              <p className="mb-1">Password</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                type="password"
                placeholder="Password"
                onChange={handlesignChange}
                value={signvalues.password}
                name="password"
                required
              />
            </label>
            <label className="mb-2">
              <p className="mb-1">Confirm password</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                type="password"
                placeholder="Password"
                onChange={handlesignChange}
                name="password_confirmation"
                value={signvalues.password_confirmation}
                required
              />
            </label>

            <Button type="submit" className="mt-3 mb-3" variant="secondary">
              Sign up
            </Button>

            <p className="mb-1">
              Already have an account?{" "}
              <NavLink
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#5c636a",
                }}
                to="/login"
              >
                Log in
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
