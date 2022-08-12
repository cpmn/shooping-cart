import React from "react";

export default function Cart(props) {
  const {cartItems, removeItem } = props;
  return (
    <div className="card mb-4">
      <div className="card-header py-3">
          <h5 className="mb-0">Shooping Card Items - Checkout</h5>
      </div>
      <div className="card-body">
        {cartItems.length === 0 && <div className="row" >Cart Is Empty</div>}
        {
          cartItems.map((item) => 
          <div className="row" key={item.id}> 
            <div className="col-2">{item.name}</div>
            <div className="col-2"><button onClick={()=>removeItem(item)} className="remove">-</button></div>
            <div className="col-2 text-right">{item.qty} x ${item.cost.toFixed(2)}</div>
            <div className="col-2 text-right">${(item.qty * item.cost).toFixed(2)}</div>            
          </div>         

          ) 
        }
        <div className="row"> 
        <div className="col-6 text-right"><strong>TOTAL PRICE:</strong></div>
        <div className="col-2 text-right"><strong>${(cartItems.reduce((a, c)=> a + c.cost * c.qty, 0)).toFixed(2)}</strong></div>
        
        </div>

      </div>
      
      
        
      </div>    
  );
}