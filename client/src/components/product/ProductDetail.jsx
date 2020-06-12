import React from 'react';
import {Link} from "react-router-dom";


import "./ProductDetail.css";

export default function ProductDetail({id, title, price, description, stock, category, picture, userId}) {

  function addToCart (e){
    e.preventDefault();
    fetch(`http://localhost:4000/cart/addProduct/${userId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "productId": id,
          "quantity": 1
        })
      }).then(response => response.json())
        .then(results => {if (results.id){alert('Product added to cart')}})
        .catch((error) => {
          console.error('Error:', error);
        })
  }






  return (
    <div className="prodDetail">
        <div className="flex-container">
          <div className="flex-left">
            <img src={picture} alt={title} />
          </div>

          <div className="flex-right">
            <div className="btnContainer">
              <button className="btnProdDetail" onClick={e => addToCart(e)} >Add to Cart</button>
              <button className="btnProdDetail"> <Link to="/product">Return to products </Link> </button>
              <button className="btnProdDetail"> <Link to={"/createproduct/" + id}>Modify product </Link></button>
            </div>
            <hr/>
            <h3>{title}</h3>
            <div>
              <h5>Price: $ {price}</h5>
              <h5>Stock: {stock}</h5>
              <h5>Categorias: {category}</h5>
              <h5>Description: </h5>
              <span>{description}</span>

            </div>
          </div>
        </div>
    </div>
  );
}
