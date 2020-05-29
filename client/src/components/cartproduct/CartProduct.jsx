import React, {useState} from 'react';
import './CartProduct.css';
import {Link} from "react-router-dom";

export default function CartProduct ({id, title, price, quantity}) {
    var [amount, setAmount] = useState(quantity)
    


    return (
      <div>
        <div className='product'>
          <div>
            <span>Title: </span>
            <span>{title}</span>
          </div>
          <div>
            <span>Price: $</span>
            <span>{price}</span>
          </div>
          <div>
            <button type="button" class="btn btn-outline-light" onClick={e => setAmount(amount - 1)}>-</button> 
            <span>{amount}</span>
            <button type="button" class="btn btn-outline-light" onClick={e => setAmount(amount + 1)}>+</button>        
          </div>
            <span>SubTotal: $</span>
            <span>{amount * price}</span>
          </div>
        
      </div>
    );
};
