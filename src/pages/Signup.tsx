import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Signup() {
  return (
    <div
      style={{
        fontFamily: "Quicksand, sans-serif",
        height: "100vh",
        border: "1px solid black",
        display: "flex",
      }}
    >
      <div
        className="w-50 border h-100 d-none d-sm-flex login-banner"
     
      ></div>

<div className="d-flex p-4 border flex-column justify-content-center align-items-center mobile">
        <h1 className="fs-4 fw-bold mb-3">Join our community</h1>
        <form className="d-flex flex-column w-75">
          <label className="mb-2">
            <p className="mb-1">Email</p>
            <input
              className="p-2 ps-3 w-100 inpt"
              type="text"
              placeholder="Email"
              required
            />
          </label>
          <label className="mb-2">
            <p className="mb-1">Password</p>
            <input
              className="p-2 ps-3 w-100 inpt"
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <label className="mb-2">
            <p className="mb-1">Confirm password</p>
            <input
              className="p-2 ps-3 w-100 inpt"
              type="password"
              placeholder="Password"
              required
            />
          </label>

          <Button className="mt-3 mb-3" variant="secondary">
            Sign up
          </Button>

          <p className="mb-1">Already have an account? <NavLink style={{textDecoration:"none", fontWeight: "bold", color:"#5c636a"}} to="/login">Log in</NavLink> </p>
          <p className="mb-1">or</p>
          <p className="mb-1">Go <NavLink style={{textDecoration:"none", fontWeight: "bold", color:"#5c636a"}} to="/"> home</NavLink></p>
          
        </form>
      </div>
    </div>
  );
}
