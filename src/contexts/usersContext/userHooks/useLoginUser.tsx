import { useEffect, Dispatch } from "react";
import  useUserContext from "./useUserContext";


const useLoginUser = (fieldInput: object) => {
    const {dispatch } = useUserContext();


  useEffect (() => {
    fetch('https://sokoni-backend.onrender.com/api/v1/users/login',{
      method: 'POST',
      body: JSON.stringify(fieldInput),

      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res)=> {
      console.log(res)
        dispatch({
            type: 'login',
            payload: res
        })
    })
  }, [])

}

export default useLoginUser
