import React, {useState} from 'react';



export default function CreateProduct () {
    var [title, setTitle] = useState('');
    var [price, setPrice] = useState('');
    var [stock, setStock] = useState('');
    var [category, setCategory] = useState('');
    var [description, setDescription] = useState('');
    var [image, setImage] = useState('');

    function enviar (e){
      e.preventDefault();
      console.log(title, price, stock, category, description, image)
    }

    return (
      <div>
         <form name="myForm"  onSubmit={enviar} >
            Title: <input type="text" name="ftitle" value={title} onChange={e => setTitle(e.target.value)}/> <br/>
            Price: <input type="text" name="fprice" value={price} onChange={e => setPrice(e.target.value)}/> <br/>
            Stock: <input type="text" name="fstock" value={stock} onChange={e => setStock(e.target.value)}/> <br/>
            Category: <input type="text" name="fcategory" value={category} onChange={e => setCategory(e.target.value)}/> <br/>
            Description: <input type="text" name="fdescription" value={description} onChange={e => setDescription(e.target.value)}/> <br/>
            Image: <input type="text" name="fimage" value={image}  onChange={e => setImage(e.target.value)}/> <br/>
   
            <input type="submit" value="Submit" />
            </form> 
      </div>
    );
  
}