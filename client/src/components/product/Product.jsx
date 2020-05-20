import React from 'react';


export default function Producto({title, price}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
}
