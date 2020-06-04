import React from 'react';
import {Link} from "react-router-dom";


import "./ProductDetail.css";

export default function ProductDetail({id, title, price, description, stock, category, picture }) {

  return (
    <div className="prodDetail">
        <div className="flex-container">
          <div className="flex-left">
            <img src={picture} alt={title} />
          </div>

          <div className="flex-right">
            <div className="btnContainer">
              <button className="btnProdDetail"> <Link to={"/createproduct/" + id}>Add to Cart</Link> </button>
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
