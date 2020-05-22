import React, {useState} from 'react';
import './App.css';
import ProductDetail from './components/product/ProductDetail.jsx';
import Board from './components/board/Board.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import CreateProduct from './components/createproduct/CreateProduct.jsx';
import {BrowserRouter, Route, Link} from "react-router-dom";




function App() {
  var [todetail, setTodetail] = useState(null);
  var [arrfiltrado, setArrfiltrado] = useState(null);

  var arr = [{id: 1, title: 'uno', price:'500', description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["zapatilla", "futbol"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 2, title: 'dos', price:'1000',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["remera", "handball"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 3, title: 'tres', price:'1500',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["pelota", "basquet"], img:'https://teorico.net/images/test-dgt-1.png'}];
  
  function details (id){
    console.log('skksks');
    setTodetail(arr.filter((p) => p.id === id)[0]);
    
  }

  function handleFilter (filtro){
    var array = arr.filter((p) => p.category.includes(filtro));
    if (array.length > 0) {
       setArrfiltrado(array);
    }else{
       setArrfiltrado(null);
    }
  }

  function removeFilter(){
    setArrfiltrado(null);
  }

  return (
    <BrowserRouter>
      <div>
        
            <Route path="/">
              <NavBar handleFilter={handleFilter} removeFilter={removeFilter} />
            </Route>
  
            <Route path="/product" >
              {!arrfiltrado && <Board products={arr} details={details} />}
              {!!arrfiltrado && <Board products={arrfiltrado}  details={details} />}
            </Route>
              
            <Route path="/productdetail" >
              {todetail && <ProductDetail {...todetail} />}
            </Route>
            <Route path="/createproduct" >
               <CreateProduct />
            </Route>
        


      
  
      </div>
    </BrowserRouter>
  );
}

export default App;
