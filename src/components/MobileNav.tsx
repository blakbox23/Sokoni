import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import "../App.css";

function MobileNav() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="bg-white">
          <Container className="d-flex justify-content-between">
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="togle"
            />
            <div className="fw-bold fs-5">Sokoni</div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sokoni
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div style={{ margin: "auto" }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link to="/" as={NavLink}>
                      Home
                    </Nav.Link>
                    <Nav.Link to="/market" as={NavLink}>
                      Market
                    </Nav.Link>
                    <Nav.Link to="/about-us" as={NavLink}>
                      About
                    </Nav.Link>
                    <Nav.Link to="/contact-us" as={NavLink}>
                      Contact us
                    </Nav.Link>

                    <Nav.Link className={"d-md-none d-sm-none"} to="/login" as={NavLink}>
                      Login
                    </Nav.Link>


                  </Nav>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <NavLink
              className={"d-none d-sm-block p-2"}
              style={{ marginRight: "1rem", textDecoration: "none", fontFamily: "Quicksand, sans-serif" }}
              to="/login"
            >
              Login
            </NavLink>

            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-success"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#288169",
                  color: "white",
                  width: "1.2rem",
                  height: "1.2rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(5%, 10%)",
                  fontSize: "0.9rem",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MobileNav;
