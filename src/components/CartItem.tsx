import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../contexts/ShoppingCartContext"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { formatCurrency } from "../utilities/formatCurrency";
import useProductsContext from "../contexts/productsContext/productsHooks/useProductsContext";


type CartItemProps = {
    id: number
    quantity: number
  }

export function CartItem({ id, quantity }: CartItemProps) {

  const {state} = useProductsContext();
  const storeitems = state.products
  
const {removeFromCart } = useShoppingCart()
const item = storeitems.find(item => item.id === id)
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