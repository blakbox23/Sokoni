import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { colors } from "../constants/colors";

export function Market() {
  return (
    <div 
      style={{
        backgroundColor: colors.PRIMARY,
        height: "100vh",
        fontFamily: "Quicksand, sans-serif"
      }}
    >
      <div className="d-flex align-items-center"
        style={{
          height: "18%",
          backgroundImage: "url(../public/imgs/mktbanner2.jpg)",
          objectFit: "cover",
          backgroundPosition: "right",
          width: "100%",
          marginBottom: "3rem"
        }}
      ><p className="ms-5 text-white fs-3">Our Products</p></div>


      <Row xs={1} sm={2} md={3} lg={4} className="g-3 p-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
