import React from 'react';
import './ProductCard.css';
import {Link} from "react-router-dom";

export default function ProductCard ({id, title, price, picture, details, stock, description}) {

    function alerta (e){
      e.preventDefault();
      details(id);
    }

    return (
      <div className="card" key={id}>
        <div className="card-body">

          <div >
            <div >
                <img className="iconoClima" src={picture} width="250" height="250" alt={title} />
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h4>Price: </h4>
              <p>$ {price}</p>
              <h4>Stock: </h4>
              <p>{stock}</p>
            </div>

            <h1 className="card-title">{{title} || 'Someitem'}</h1>

            <div className="col-sm-6 col-md-6 col-lg-6">
              <h4>Descripción: </h4>
              <p>{description}</p>
            </div>
            <form className="col-sm-6 col-md-6 col-lg-6">

                <button onClick={alerta}> <Link to={"/product/"+id}>Detalles </Link></button>

            </form>
          </div>
        </div>
      </div>
    );
};
