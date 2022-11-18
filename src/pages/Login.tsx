import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Login() {
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
        className="w-50 border h-100 d-none d-sm-flex "
        style={{
          backgroundColor: "#87e387",
          backgroundImage: "url(../public/imgs/logins-removebg-preview.png)",
          backgroundSize: "70%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="d-flex p-4 border flex-column justify-content-center align-items-center mobile">
        <h1 className="fs-4 fw-bold mb-3">Log in</h1>
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

          <Button className="mt-3 mb-3" variant="secondary">
            Log in
          </Button>

          <p className="mb-1">Don't have an account? <NavLink style={{textDecoration:"none", fontWeight: "bold", color:"#5c636a"}} to="/sign-up">Sign up</NavLink> </p>
          <p className="mb-1">or</p>
          <p className="mb-1">Go <NavLink style={{textDecoration:"none", fontWeight: "bold", color:"#5c636a"}} to="/"> home</NavLink></p>
          
        </form>
      </div>
    </div>
  );
}
