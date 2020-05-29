import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'
import SearchBar from '../searchbar/SearchBar.jsx'

 export default function NavBar ({handleKeyword}) {


    return (
      <div class="navbar-up">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" id="brand">Henry</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mt-2 mt-lg-0">
              <li class="nav-item active">
                <Link to="/" class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/createproduct" aria-disabled="true">Vender</a>
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