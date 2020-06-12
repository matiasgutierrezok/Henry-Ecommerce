import React from 'react';
import { Link } from "react-router-dom";


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
          <button className="btnProdDetail"> <Link to="/product">Volver </Link> </button>
        </div>
          <h3>{title}</h3>
          <div>
            <p>Price: $ {price}</p>
            <p>Stock: {stock}</p>
            <p>Categorias: {category}</p>
            <p>Description: </p>
            <p>{description}</p>
            <hr />
            <div className="btnContainer">
              <button className="btnProdDetail" onClick={e => addToCart(e)}>Agregar al carrito </button>
              <button className="btnProdDetail"> <Link to={"/createproduct/" + id}>Modificar producto</Link></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
