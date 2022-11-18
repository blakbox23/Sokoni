import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
  }

export function CartItem({ id, quantity }: CartItemProps) {
const {removeFromCart } = useShoppingCart()
const item = storeItems.find(item => item.id === id)
if (item == null) return null

return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            // <span className="text-muted" style={{ fontSize: ".75rem" }}>
            //   x{quantity}
            // </span>
            <div>{quantity} units</div>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          @ KSH {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
         <i className="bi bi-trash"></i>
        
      </Button>
    
      
    </Stack>
  )
}