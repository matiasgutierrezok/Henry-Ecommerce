import React from 'react';
import './ProductCard.css';
import { withRouter } from "react-router";

function ProductCard ({id, title, price, picture, details, stock, description, history}) {

    function alerta (e){
      e.preventDefault();
      details(id);
      history.push(`/product/${id}`)
    }

    return (
      <div className="card" key={id}>
        <div className="card-body">
          <div className="card-click" onClick={(e) => alerta(e)}>
            <div >
                <img className="pictureEdit" src={picture} width="250" height="250" alt={title }/>
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="col-sm-10 col-md-10 col-lg-10">
              <h6>Price: </h6>
              <span>$ {price}</span>
              <h6>Stock: </h6>
              <span>{stock}</span>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10">
              <h6>Descripción: </h6>
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default withRouter(ProductCard);
