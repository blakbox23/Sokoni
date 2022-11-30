import { useEffect } from "react";
import  useProductsContext from "./useProductsContext";

const useFetchProducts = () => {
  const {dispatch } = useProductsContext();

  useEffect (() => {
    fetch('https://sokoni.onrender.com/api/v1/products/')
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
