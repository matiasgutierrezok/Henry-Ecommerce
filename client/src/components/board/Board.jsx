import React from 'react';
import './Board.css';

import ProductCard from '../product-card/ProductCard.jsx';

export default function Cards({products, details}) {

  return (
      <div className='cards'>
        {products.map(c => <ProductCard
            key={c.id}
            id={c.id}
            title={c.title}
            price={c.price}
            stock={c.stock}
            picture= {c.picture}
            description= {c.description}
            details= {details}
          />)
        }
      </div>
  );
}
