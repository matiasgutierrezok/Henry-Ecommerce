import React, {useState} from 'react';
import './Board.css';

import ProductCard from '../product-card/ProductCard.jsx';

export default function Cards({products}) {
  var [filter, setFilter] = useState('');

    
    function onSubmit (e) {
        e.preventDefault(); 
        
        
    }

  return (
    <div className='cards'>
      <form id='formulario' className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Category filter..." value={filter} onChange={e => setFilter(e.target.value)}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type='submit' >Buscar</button>
      </form>
      {!filter && products.map(c => <ProductCard 
          id={c.id}
          title={c.title}
          price={c.price}
          img= {c.img}
        />
      )}
      {filter && products.filter((prod) => prod.category.includes(filter)).map(c => <ProductCard 
          id={c.id}
          title={c.title}
          price={c.price}
          img= {c.img}
        />
      )}
    </div>
  );
}
