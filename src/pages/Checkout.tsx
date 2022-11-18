import { Button } from "react-bootstrap";


export function Checkout (){
    return(
    <>
    <hr />
    <p className="text-center text-muted fs-4 fw-bold mb-2">Checkout</p>
    <div className="p-2">
    <form className="d-flex flex-column w-75 m-auto">
          <label className="mb-3" >
            <p style={{fontSize:"0.6rem", fontWeight: "bold", marginBottom:"-1px", color:"grey"}}>PHONE NUMBER</p>
            <input
              className="w-100 border-0 border-bottom outline-0 outline-bottom"
              type="text"
              placeholder="07XX"
              required
            />
          </label>
          <label >
            <p style={{fontSize:"0.6rem", fontWeight: "bold", marginBottom:"-1px", color:"grey"}}>PICK UP STATION</p>
            <input
              className="w-100 border-0 border-bottom outline-0 outline-bottom"
              type="text"
              placeholder="Deleivered to..."
              required
            />
          </label>

          <Button className="mt-4 mb-3" variant="secondary">
            PAY NOW
          </Button>

   
        </form>
    </div>
    
    </>)
}