import React from 'react';
import {Link} from "react-router-dom";

export default function ProductDetail({id, title, price, description, stock, category, img }) {
  return (
    <div >
        <div className="container">
          <h1 >{title}</h1>
          <div>
          	<div className="col-sm-2 col-md-4 col-lg-4">
              <img src={img} width="80" height="80" alt="" />
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <span>Price: </span>
              <span>${price}</span>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <span>Stock: </span>
              <span>{stock}</span>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <span>Categorias: </span>
              <span>{category + " "}</span>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
              <span>Description: </span>
              <span>{description}</span>
            </div>
            <div className="col-sm-2 col-md-2 col-lg-2">
             
              <button > <Link to="/product">Return to products </Link></button>
            </div>
          </div>
        </div>
    </div>
  );
}
