import React from 'react';
import { Link } from "react-router-dom";


import "./ProductDetail.css";

export default function ProductDetail({ id, title, price, description, stock, category, picture }) {

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
              <button className="btnProdDetail"> <Link to={"/createproduct/" + id}>Agregar al carrito</Link> </button>
              <button className="btnProdDetail"> <Link to={"/createproduct/" + id}>Crear producto</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
