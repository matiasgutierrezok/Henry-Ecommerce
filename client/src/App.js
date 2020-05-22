import React, {useState} from 'react';
import './App.css';
import Product from './components/product/Product.jsx';
import Board from './components/board/Board.jsx';
import NavBar from './components/navbar/NavBar.jsx';

function App() {
 
  
  var arr = [{id: 1, title: 'uno', price:'500', description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["zapatilla", "futbol"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 2, title: 'dos', price:'1000',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["remera", "handball"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 3, title: 'tres', price:'1500',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["pelota", "basquet"], img:'https://teorico.net/images/test-dgt-1.png'}];
  
 

  return (
    <div>
      <NavBar />
      <Product 
        id = {arr[0].id}
        title = {arr[0].title}
        price = {arr[0].price} 
        description = {arr[0].description} 
        stock = {arr[0].stock} 
        category = {arr[0].category} 
        img = {arr[0].img}
      />
      <Board products={arr} />
    </div>
  );
}

export default App;
