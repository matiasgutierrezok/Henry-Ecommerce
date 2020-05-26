import React from 'react';
import {Link} from "react-router-dom";

export default function ProductDetail({id, title, price, description, stock, category, img }) {
  

  return (
    <div >
        <div className="container">
          <h1 >{title}</h1>
          <div>
          	<div >
              <img src={img} width="80" height="80" alt="" />
            </div>
            <div >
              <span>Price: </span>
              <span>${price}</span>
            </div>
            <div >
              <span>Stock: </span>
              <span>{stock}</span>
            </div>
            <div >
              <span>Categorias: </span>
              <span>{category + " "}</span>
            </div>
            <div >
              <span>Description: </span>
              <span>{description}</span>
            </div>
            <div >
             
              <button > <Link to="/product">Return to products </Link></button>
              <button > <Link to={"/createproduct/" + id}>Modify product </Link></button>
            </div>
          </div>
        </div>
    </div>
  );
}
