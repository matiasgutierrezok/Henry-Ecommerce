import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'
import SearchBar from '../searchbar/SearchBar.jsx'

 export default function NavBar ({handleKeyword}) {
    
      // var [keyword, setKeyword] = useState('');

     // function onSubmit(e) {
     //      e.preventDefault();
     //      handleKeyword(keyword);
     //      setKeyword('');
     //    };

    return (
      <div class="navbar-up">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" id="brand">Henry</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <Link to="/" class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/createproduct" aria-disabled="true">Vender</a>
              </li>
            <SearchBar handleKeyword={handleKeyword}/>
            </ul>
          </div>
          </nav>
      </div>    
    );
}
      //   <form id='formulario' className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
      //     <input className="form-control mr-sm-2" type="search" placeholder="Category filter..." value={filter} onChange={e => setFilter(e.target.value)}/>
      //     <button className="btn btn-outline-success my-2 my-sm-0" type='submit' >Buscar</button>
      //     <button className="btn btn-outline-success my-2 my-sm-0" onClick={noFilter} >Eliminar filtro</button>
      // </form>
      // </nav>