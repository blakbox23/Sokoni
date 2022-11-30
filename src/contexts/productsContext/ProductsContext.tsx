import { createContext } from "react";
import { ProductsContextType } from "./ProductsProvider";

export type ProductType = {
    id: number
    name: string
    price: number
    productQuant: string
    imgUrl: string
    category: string
    updated_at: string
    created_at: string
  
  }
export type ProductsStateType = {
    products: ProductType[]
}

export const initialState: ProductsStateType = {
    products: []
  }

  const ProductsContext = createContext<ProductsContextType>({
    state: initialState,
    dispatch: () => undefined,
  });
  
  
  export default ProductsContext