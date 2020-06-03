
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import ProductDetail from './components/product/ProductDetail.jsx';
import Board from './components/board/Board.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import CreateProduct from './components/createproduct/CreateProduct.jsx';
import ModifyProduct from './components/modifyproduct/ModifyProduct.jsx';
import Pagination from './components/pagination/pagination.jsx'


function App() {
  var [toDetail, setToDetail] = useState(null);
  var [array, setArray] = useState([]);
  var [page, setPage] = useState(1);
  var [totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
      fetch(`http://localhost:4000/product/paged/${page}`, {
        method: 'GET'
      }).then(response =>
        response.json())
        .then(results => {
          setArray(results.data);
          setPage(results.currentPage);
          setTotalPages(results.totalPages);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
    },[page]);

  //leer al final de ver que hace paginacion para mayor comprension.
  const paginate = pageNumber => setPage(pageNumber);

  function details (id){
    setToDetail(array.filter((p) =>
     p.id === id)[0]
    )}


  function handleFilter (filtro){
    let pivot = array.filter((p) => p.category.includes(filtro));
    if (pivot.length > 0) {
       setArray(pivot);
    }else{
       setArray(array);
    };
  }

  function removeFilter(){
    setArray(array);
  }

  return (
    <BrowserRouter>
      <div className='App-header'>
        <Route path="/">
          <NavBar handleFilter={handleFilter} removeFilter={removeFilter} />
        </Route>
        <Route exact path="/product" >
          <Pagination
            pageEnd= { totalPages }
            paginate = { paginate }/>
          <Board
            products={array}
            details={details}/>
        </Route>
        <Route path="/product/:id" >
          <ProductDetail {...toDetail} />
        </Route>
        <Route exact path="/createproduct" >
          <CreateProduct />
        </Route>
        <Route path="/createproduct/:id" component={ModifyProduct} />
      </div>
    </BrowserRouter>
  );
}

export default App;

