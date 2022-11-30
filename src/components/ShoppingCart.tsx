import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
// import storeItems from "../data/items.json";
import { CartItem } from "./CartItem";
import { NavLink } from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { formatCurrency } from "../utilities/formatCurrency";
import useProductsContext from "../contexts/productsContext/productsHooks/useProductsContext";

type ShoppingCartProps = {
  isOpen: boolean;
};



export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const {state} = useProductsContext();
  const storeitems = state.products

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
          <div className="ms-auto fw-bold fs-5 mb-3">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeitems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
        <div>
          {cartItems.length < 1 ? (
            "Your cart is empty"
          ) : (
            <Checkout/>
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
