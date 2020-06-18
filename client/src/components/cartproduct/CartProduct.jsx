import React, {useState} from 'react';
import './CartProduct.css';
import {Link} from "react-router-dom";

export default function CartProduct ({id, title, price, quantity, handleNewQuantity, handleRemove}) {
    
<<<<<<< HEAD
=======

  


>>>>>>> 787cf01638ffc1d25c7a54fd02be4636a7416950
    return (
      <div>
        <div className='product'>
          <div>
            <span>Title: </span>
            <span>{id}</span>
          </div>
          <div>
            <span>Price: $</span>
            <span>{price}</span>
          </div>
          <div>
            <button type="button" className="btn btn-outline-light" onClick={e => handleNewQuantity(e, quantity - 1, id)}>-</button> 
            <span>{quantity}</span>
            <button type="button" className="btn btn-outline-light" onClick={e => handleNewQuantity(e, quantity + 1, id)}>+</button> 
          </div>
           <div>
            <button type="button" className="btn btn-outline-light" onClick={e => handleRemove(e, id)}>Remove</button> 
          </div>

          <div>
            <span>SubTotal: $</span>
            <span>{quantity * price}</span>
          </div>
          </div>
        
      </div>
    );
};

