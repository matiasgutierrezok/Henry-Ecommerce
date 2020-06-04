import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'
import SearchBar from '../searchbar/SearchBar.jsx'

 export default function NavBar ({handleKeyword}) {
    return (
      <div className="navbar-up">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <a href="#"className="navbar-brand" id="brand">Henry</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/createproduct" aria-disabled="true">Crear Producto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart" aria-disabled="true">My Cart</a>
              </li>
              <li id="asd">
            <SearchBar handleKeyword={handleKeyword}/>
            </li>
            </ul>
          </div>
          </nav>
      </div>
    );
}
