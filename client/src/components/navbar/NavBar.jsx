import React, {useState} from 'react';
import {Link} from "react-router-dom";


export default function NavBar ({handleFilter, removeFilter}) {
    
    var [filter, setFilter] = useState('');
    
    function onSubmit (e){
      e.preventDefault();
      handleFilter(filter);
      setFilter('')
    }
    function noFilter (e){
      e.preventDefault();
      removeFilter()
    }
    

    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <h2>Henry - E-Comerce App</h2>
        </span>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Productos</Link>
          </li>
          <li>
            <Link to="/createproduct">Create product</Link>
          </li>
        </ul>
        <form id='formulario' className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Category filter..." value={filter} onChange={e => setFilter(e.target.value)}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type='submit' >Buscar</button>
          <button className="btn btn-outline-success my-2 my-sm-0" onClick={noFilter} >Eliminar filtro</button>
      </form>
      </nav>
    );
  
}


