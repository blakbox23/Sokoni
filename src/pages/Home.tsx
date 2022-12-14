import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { colors } from "../constants/colors";
import "../App.css";
import MobileNav from "../components/MobileNav";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <MobileNav />
      <div style={{ fontFamily: "Quicksand, sans-serif" }}>
        <div
          className="d-flex hero"
          style={{
            backgroundColor: colors.PRIMARY,
            height: "55vh",
          }}
        >
          <div className="d-flex justify-content-center align-items-center w-50 h-100 hero-img home-banner"></div>

          <div
            className="d-flex flex-column justify-content-around text-center p-3 hero-text"
            style={{ width: "50%" }}
          >
            <h1 className="fs-2 mt-3" style={{ fontWeight: "600" }}>
              Sokoni! Get Fresh Groceries from Farm
            </h1>
            <p>From farm to shop hassle free</p>
            <NavLink to="/market">
              <Button
                className="mt-4 mb-4 w-50  mx-auto fw-bold"
                variant="outline-secondary"
                href="/market"
              >
                Shop now
              </Button>{" "}
            </NavLink>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "linear-gradient(white, #FAF0DC)",
            padding: "3rem",
          }}
        >
          <Row className="gap-3 mb-3 cta-row">
            <Col
              className="p-2 cta-col"
              style={{
                backgroundColor: colors.PRIMARY,
                backgroundImage: "url(../imgs/person-removebg-preview.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50%",
                backgroundPosition: "right",
              }}
            >
              <div className="cta-div" style={{ width: "50%" }}>
                <Badge pill bg="warning" text="light">
                  Free delivery
                </Badge>{" "}
                <p className="fs-4 mt-1 mb-1">Shop and get cash back</p>
                <p style={{ fontWeight: 300, fontSize: ".9rem" }}>
                  Shop 5000 worth of produce and get free delivery anywhere
                </p>
                <NavLink to="/market">
                  <Button className="mt-4 mb-4" variant="secondary">
                    Shop now
                  </Button>{" "}
                </NavLink>
              </div>
            </Col>

            <Col
              className="p-2 cta-col"
              style={{
                backgroundColor: "#DFE5EC",
                backgroundImage: "url(../imgs/basket-removebg-preview.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50%",
                backgroundPosition: "right",
              }}
            >
              <div className="cta-div" style={{ width: "50%" }}>
                <Badge pill bg="warning" text="light">
                  20% off
                </Badge>{" "}
                <p className="fs-4 mt-1 mb-1">Get 20% off</p>
                <p style={{ fontWeight: 300, fontSize: ".9rem" }}>
                  Shop 5000 worth of produce and get free delivery anywhere
                </p>
                <NavLink to="/market">
                  <Button className="mt-4 mb-4" variant="secondary">
                    Shop now
                  </Button>{" "}
                </NavLink>
              </div>
            </Col>
          </Row>

          <p className="fw-bold text-center mt-5 mb-5">Let's do it together</p>

          {/* cards */}
          <div className="mt-3 text-center">
            <Row xs={1} sm={2} md={3} className="g-3">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title className="mt-3 mb-3 fw-bold">
                      Become a partner
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mt-2 mb-2" variant="secondary">
                      Join us
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                {" "}
                <Card>
                  <Card.Body>
                    <Card.Title className="mt-3 mb-3 fw-bold">
                      Delivery services
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mt-2 mb-2" variant="secondary">
                      Join us
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title className="mt-3 mb-3 fw-bold">
                      Our careers
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button className="mt-2 mb-2" variant="secondary">
                      Join us
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
