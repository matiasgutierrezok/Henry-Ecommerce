import React from 'react';

import CartProduct from '../cartproduct/CartProduct.jsx';


export default function Cart({products, quantity}) {
  


  return (
    <div >
      <h1>My Cart</h1>
      {products.map(p => {
        return <CartProduct 
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  quantity={quantity}
        />
      })}
      <button type="button" class="btn btn-lg btn-primary" disabled>Empty Cart</button>
      <button type="button" class="btn btn-lg btn-primary" disabled>Save Cart</button>
      <button type="button" class="btn btn-lg btn-primary" disabled>Buy</button>
    </div>
  );
}