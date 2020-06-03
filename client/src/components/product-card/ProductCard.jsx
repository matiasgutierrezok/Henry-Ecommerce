import React from 'react';
import './ProductCard.css';
import {Link} from "react-router-dom";

export default function ProductCard ({id, title, price, img, details}) {

    function alerta (e){
      e.preventDefault();
      details(id);
    }

    return (
      <div className="card">
        <div className="card-body">

          <div >

            <div >
                <img className="iconoClima" src={img} width="250" height="250" alt="" />
            </div>
            <h1 className="card-title">{{title} || 'Someitem'}</h1>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <span>Price: </span>
              <span>${price}</span>
            </div>
            <form className="col-sm-6 col-md-6 col-lg-6">

                <button onClick={alerta}> <Link to={"/product/"+id}>Detalles </Link></button>

            </form>
          </div>
        </div>
      </div>
    );
};
