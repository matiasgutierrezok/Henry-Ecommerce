import React, { useState } from 'react';
import './CreateProduct.css'

export default function CreateProduct () {
    var [newProduct, setNewProduct] = useState({title: '', price: '', stock: '', category: '', description: '', picture: ''});

    function enviar (e){

      fetch('http://localhost:4000/product', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": newProduct.title,
          "price": newProduct.price,
          "stock": newProduct.stock,
          "category": newProduct.category,
          "description": newProduct.description,
          "picture": newProduct.picture
        }),
      })
      .then(response => response.json())
      .catch(error => {
          console.error(error);
      });
      e.preventDefault();
      resetFields();
    }

    function resetFields(){
      setNewProduct({
        title: '',
        price: '',
        stock: '',
        category: '',
        description: '',
        picture: ''
      });
    }

    return (
      <div className="form-container">
          <form className=''  onSubmit={enviar} >
            Title: <input type="text" name="ftitle" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})}/> <br/>
            Price: <input type="text" name="fprice" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})}/> <br/>
            Stock: <input type="text" name="fstock" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})}/> <br/>
            Category: <input type="text" name="fcategory" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}/> <br/>
            Description: <input type="text" name="fdescription" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})}/> <br/>
            Image: <input type="text" name="fimage" value={newProduct.picture}  onChange={e => setNewProduct({...newProduct, picture: e.target.value})}/> <br/>

            <input className='btnCreacteProduct' type="submit" value="Submit" />
          </form>
      </div>
    );

}
