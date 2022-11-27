import { useReducer, Dispatch, ReactNode  } from "react";
import ProductsContext, { initialState, ProductsStateType } from "./ProductsContext";

type ProductsProviderProps = {
    children: ReactNode;
  };

  export type ProductsActionType =
   {
      type: 'get_products'
      payload: any
    }
 

  export type ProductsContextType = {
    state: ProductsStateType
    dispatch: Dispatch<ProductsActionType>
  }


function productsContextReducer(state: ProductsStateType, action: ProductsActionType): ProductsStateType {
  switch (action.type) {
    case "get_products":
      return {...state, products: action.payload}
     
    default:
      return state;
  }
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(productsContextReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
};
