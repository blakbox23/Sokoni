import { useEffect } from "react";
import  useProductsContext from "./useProductsContext";

const useFetchProducts = () => {
  const {dispatch } = useProductsContext();

  useEffect (() => {
    fetch('http://localhost:3000/api/v1/products')
    .then((res) => res.json())
    .then((res)=> {
        dispatch({
            type: 'get_products',
            payload: res
        })
    })
  }, [])
};

export default useFetchProducts
