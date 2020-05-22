import React, {useState} from 'react';
import './Board.css';


import ProductCard from '../product-card/ProductCard.jsx';

export default function Cards({products, details}) {
  


   

  return (
    <div className='cards'>
      
      {products.map(c => <ProductCard 
          id={c.id}
          title={c.title}
          price={c.price}
          img= {c.img}
          details= {details}
        />
      )}
    </div>
  );
}
