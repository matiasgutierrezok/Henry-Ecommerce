import React, {useState} from 'react';
import './ModifyProduct.css'


export default function ModifyProduct (props) {
    var [newProduct, setNewProduct] = useState({title: '', price: '', stock: '', category: '', description: '', image: ''})

 
    function enviar (e){
      e.preventDefault();
      console.log(newProduct)
    }

    return (
      <div>
          <form className='myform' name="myForm"  onSubmit={enviar} >
            Title: <input type="text" name="ftitle" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})}/> <br/>
            Price: <input type="text" name="fprice" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})}/> <br/>
            Stock: <input type="text" name="fstock" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})}/> <br/>
            Category: <input type="text" name="fcategory" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}/> <br/>
            Description: <input type="text" name="fdescription" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})}/> <br/>
            Image: <input type="text" name="fimage" value={newProduct.image}  onChange={e => setNewProduct({...newProduct, image: e.target.value})}/> <br/>
   
            <input type="submit" value="Submit" />
          </form> 
      </div>
    );
  
}