import React from 'react'



export default function Product(props) {
  const {product , addToCart} = props  
  return (
    <div className="col-lg-10 col-md-9 mb-6 mb-lg-0" >
      <img src={product.image} className="w-100" alt={product.name} />
      <p><strong>{product.name}</strong></p>
      <p><strong>Cost:</strong> $us {product.cost} </p>
      <p><strong>InStock:</strong> {product.instock}</p> 
      <button name={product.id} onClick={() => addToCart(product)}>Add to Cart</button>           
    </div>
  )
}
