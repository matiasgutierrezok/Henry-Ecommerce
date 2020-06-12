import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import SearchBar from '../searchbar/SearchBar.jsx'

export default function NavBar({ handleKeyword }) {
  return (
    <div className="navbar-up">
      <nav className="navbar navbar-expand-lg">
        <a href="/" className="navbar-brand" id="brand"><h1>Henry</h1></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/home" className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></Link>

            </li>
            <li className="">
              <a className="nav-link" href="/user">Registrate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">Compra</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/createproduct" aria-disabled="true">Vende</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart" aria-disabled="true">Mi orden</a>
            </li>
            <li className="nav-item" id="search">
              <SearchBar handleKeyword={handleKeyword} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
