import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { colors } from "../constants/colors";
export function Home() {
  return (
    <div style={{ fontFamily: "Quicksand, sans-serif" }}>
      <div
        className="d-flex"
        style={{
          backgroundColor: colors.PRIMARY,
          height: "55vh",
        }}
      >
        <div style={{ width: "50%" }}>
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src="../public/imgs/grocerybag.jpg"
          />
        </div>
        <div
          className="d-flex flex-column justify-content-around text-center p-3"
          style={{ width: "50%" }}
        >
          <h1 className="fs-2 mt-3" style={{ fontWeight: "600" }}>
            Sokoni! Get Fresh Groceries from Farm
          </h1>
          <p>From farm to shop hassle free</p>
          <p className="border w-100 align-self-center">some form</p>
        </div>
      </div>

      {/* After Hero section */}
      <div
        style={{
          backgroundImage: "linear-gradient(white, #FAF0DC)",
          padding: "3rem",
        }}
      >
        <Row className="gap-3 mb-3">
          <Col className="p-2" style={{ backgroundColor: colors.PRIMARY }}>
            <div className="w-50">
              <Badge pill bg="warning" text="light">
                Free delivery
              </Badge>{" "}
              <p className="fs-4 mt-1 mb-1">Shop and get cash back</p>
              <p style={{ fontWeight: 300, fontSize: ".9rem" }}>
                Shop 5000 worth of produce and get free delivery anywhere
              </p>
              <Button className="mt-2 mb-2" variant="secondary">
                Shop now
              </Button>{" "}
            </div>
          </Col>

          <Col className="p-2" style={{ backgroundColor: "#DFE5EC" }}>
            <div className="w-50">
              <Badge pill bg="warning" text="light">
                20% off
              </Badge>{" "}
              <p className="fs-4 mt-1 mb-1">Shop and get cash back</p>
              <p style={{ fontWeight: 300, fontSize: ".9rem" }}>
                Shop 5000 worth of produce and get free delivery anywhere
              </p>
              <Button className="mt-2 mb-2" variant="secondary">
                Shop now
              </Button>{" "}
            </div>
          </Col>
        </Row>

        {/* cards */}
        <div className="mt-5 text-center">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mt-2 mb-2" variant="secondary">
                    Shop now
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>

            <Col>
              {" "}
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mt-2 mb-2" variant="secondary">
                    Shop now
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="mt-2 mb-2" variant="secondary">
                    Shop now
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}
