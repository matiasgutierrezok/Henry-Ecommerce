import React, {useState, useEffect} from 'react';

import CartProduct from '../cartproduct/CartProduct.jsx';


export default function Cart(props) {
  var [cart_products, setCart_products] = useState([]);
  var [cart_quantitys, setCart_quantitys] = useState([]);
  var [render, setRender] = useState(false);


  useEffect(() => {
      fetch(`http://localhost:4000/cart/${props.match.params.userId}`, {
        method: 'GET'
      }).then(response =>
        response.json())
        .then(results => {
          if (results === null){
            setCart_products(null);
          }else{
            setCart_products(results[0]);
            var arr = quickSort(results[1]).map(element => {return element.cant});
            setCart_quantitys(arr);
          }
         
        })
        .catch((error) => {
          console.error('Error:', error);
        })
    },[render])

  function toRender (){
    setRender(!render);
  }


    function handleNewQuantity (e, newValue, id){
      e.preventDefault();
      if(newValue >= 0){ 
      fetch(`http://localhost:4000/cart/${props.match.params.userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "productId": id,
          "quantity": newValue,
        }),
      })
      .then(response => toRender())
      .catch(error => {
          console.error(error);
      });
      }
    }

    function quickSort(array) {
      if( array.length <= 1) {
        return array;
      }
      var pivot = array[Math.floor(Math.random() * array.length)].productId;
      var left = [];
      var equal = [];
      var right = [];
      for (var i = 0; i < array.length ; i++) { 
        if (array[i].productId < pivot) {
          left.push(array[i]);
        } else if (array[i].productId  === pivot) {
          equal.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }
      return quickSort(left).concat(equal).concat(quickSort(right));
    }

    function handleRemove (e, Id){
      e.preventDefault();
      fetch(`http://localhost:4000/cart/${props.match.params.userId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "productId": Id
        })
      }).then(response => response.json())
        .then(results => {console.log(results); toRender()})
        .catch((error) => {
          console.error('Error:', error);
        })
        
    }

    function emptyCart (e){
      e.preventDefault();
      fetch(`http://localhost:4000/cart/deleteAll/${props.match.params.userId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(results => {console.log(results); toRender()})
        .catch((error) => {
          console.error('Error:', error);
        })
    }

    function toShow (){
      if (!cart_products){
        return <div>Your cart is empty</div>
      }else{
        return cart_products.map((cp, i) => {
          
          return <CartProduct 
                    id={cp.id}
                    title={cp.title}
                    price={cp.price}
                    quantity={cart_quantitys[i]}
                    handleNewQuantity={handleNewQuantity} 
                    handleRemove={handleRemove}
                />
        })
      }
    }

  return (
    <div >
      <h1>My Cart</h1>
      {toShow()}



      <button type="button" class="btn btn-lg btn-primary" onClick={e => emptyCart(e)}>Empty Cart</button>
      <button type="button" class="btn btn-lg btn-primary" disabled>Buy</button>
    </div>
  );
}