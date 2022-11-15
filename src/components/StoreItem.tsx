import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  productQuant: string;
  category?: string;
};

export function StoreItem({ id, name, price, imgUrl, productQuant, category }: StoreItemProps) {
   
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()

      const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-baseline">
          <span className="fs-5">{name}</span>
          <span className="ms-2 text-muted">{productQuant}</span>
          </div>
          <div>{price}</div>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button style={{backgroundColor: "#288169", border: "none"}} className="w-100" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button style={{backgroundColor: "#288169", border: "none"}} onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-5 fw-bold text-muted">{quantity}</span> in cart
                </div>
                <Button style={{backgroundColor: "#00563E", border: "none"}} onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
