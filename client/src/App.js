import React, {useState, useEffect} from 'react';
import './App.css';
import ProductDetail from './components/product/ProductDetail.jsx';
import Board from './components/board/Board.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import CreateProduct from './components/createproduct/CreateProduct.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import ModifyProduct from './components/modifyproduct/ModifyProduct.jsx';

var arr = [{id: 1, title: 'uno', price:'500', description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["zapatilla", "futbol"], img:'https://teorico.net/images/test-dgt-1.png'},
           {id: 2, title: 'dos', price:'1000',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["remera", "handball"], img:'https://teorico.net/images/test-dgt-1.png'},
           {id: 3, title: 'tres', price:'1500',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["pelota", "basquet"], img:'https://teorico.net/images/test-dgt-1.png'}];


function App() {
  var [todetail, setTodetail] = useState(null);
  var [array, setArray] = useState([]);


  function details (id){
    setTodetail(arr.filter((p) =>
     p.id === id)[0]
    )}

  useEffect(() => {
    fetch('http://localhost:3000/product', {
      method: 'GET'
    }).then(response =>
      response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  },[])

  function handleFilter (filtro){
    var array = arr.filter((p) => p.category.includes(filtro));
    if (array.length > 0) {
       setArray(array);
    }else{
       setArray(arr);
    }
  }

  function removeFilter(){
    setArray(arr);
  }

  return (
    <BrowserRouter>
      <div className='App-header'>
        <Route path="/">
          <NavBar  handleFilter={handleFilter} removeFilter={removeFilter} />
        </Route>
        <Route exact path="/product" >
          <Board products={array} details={details} />
        </Route>
        <Route path="/product/:id" >
          <ProductDetail {...todetail} />
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
