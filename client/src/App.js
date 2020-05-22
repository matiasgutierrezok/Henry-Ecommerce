import React, {useState} from 'react';
import './App.css';
import Product from './components/product/Product.jsx';
import Board from './components/board/Board.jsx';
import NavBar from './components/navbar/NavBar.jsx';

function App() {
  var [todetail, setTodetail] = useState(null);
  
  var arr = [{id: 1, title: 'uno', price:'500', description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["zapatilla", "futbol"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 2, title: 'dos', price:'1000',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["remera", "handball"], img:'https://teorico.net/images/test-dgt-1.png'},
             {id: 3, title: 'tres', price:'1500',description:"akjshakjsfkasbdmnabsdkjaskdjasmd,nb", stock:"23",category:["pelota", "basquet"], img:'https://teorico.net/images/test-dgt-1.png'}];
  
  function details (id){
    setTodetail(arr.filter((p) => p.id === id)[0]);
    
  }

  return (
    <div>
      <NavBar />
      
      <Board products={arr} details={details} />

      {todetail && <Product {...todetail} />}
    </div>
  );
}

export default App;
