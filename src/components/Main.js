import React from "react";
import Product from "./Product";

export default function Main(props) {
  const {products, addToCart} = props;
  return (
    <div className="card mb-4">
      <div className="card-header py-3">
            <h5 className="mb-0">Product - Items</h5>
      </div>
      <div className="card-body">
        <div className="row">
        {
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Product key={product.id} product={product} addToCart={addToCart} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}