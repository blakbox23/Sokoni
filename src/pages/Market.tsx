import { Button, ButtonGroup, Col, Dropdown, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { colors } from "../constants/colors";
import { Footer } from "../components/Footer";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import "../App.css";
import useProductsContext from "../contexts/productsContext/productsHooks/useProductsContext";
import useFetchProducts from "../contexts/productsContext/productsHooks/useFetchProducts";

export function Market() {
  const { state } = useProductsContext();
  const grocery = state.products;

  const [products, setProducts] = useState(grocery);
  const [selected, setSelected] = useState("Select a category");

  console.log("products");
  console.log(products);

  const filterItem = (category: string) => {
    const products = grocery.filter((item) => item.category === category);
    setProducts(products);
    setSelected(category);
  };

  const unfiltered = () => {
    setSelected("Select a category");
    setProducts(grocery);
  };

  return (
    <>
      <MobileNav />
      <div
        style={{
          backgroundColor: colors.PRIMARY,
          fontFamily: "Quicksand, sans-serif",
          paddingBottom: "3rem",
        }}
      >
        <div className="d-flex align-items-center market-banner">
          <p className="ms-5 text-white fs-3">Our Products</p>
        </div>

        <Dropdown
          as={ButtonGroup}
          className="d-flex mx-auto mb-3"
          style={{ width: "20rem" }}
        >
          <Button variant="light" className="border">
            {selected}
          </Button>

          <Dropdown.Toggle
            split
            variant="secondary"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => unfiltered()}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => filterItem("Vegetables")}>
              Vegetables
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItem("Dairy")}>
              Dairy
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItem("Fruits")}>
              Fruits
            </Dropdown.Item>

            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        {selected == "Select a category" ? null : (
          <p className="container fw-bold fs-6 text-muted">
            Category: {selected}
          </p>
        )}

        <Row xs={1} sm={2} md={3} lg={4} className="g-3 ps-5 pe-5">
          {products.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}
