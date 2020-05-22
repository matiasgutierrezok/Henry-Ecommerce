import React from 'react';
import './ProductCard.css';

export default function ProductCard ({id, title, price, img}) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="col-sm-3 col-md-3 col-lg-3">
              <img className="iconoClima" src={img} width="100" height="100" alt="" />
          </div>
          <div className="row">
            <h1 className="card-title">{title}</h1>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <span>Price: </span>
              <span>${price}</span>
            </div>
          </div>
        </div>
      </div>
    );
};
