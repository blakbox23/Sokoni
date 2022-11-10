import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import { colors } from "../constants/colors";


export function Market() {
    return (
      <div style={{backgroundColor: colors.PRIMARY, height:"100vh", padding:"2rem 4rem"}}>
      <h2>Market</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
      </div>
    )
  }