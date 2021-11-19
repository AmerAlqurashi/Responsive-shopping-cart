import React, {useContext} from 'react'
import { DataContext } from '../Dataprovider'
import Posts from '../Posts'
import Dataprovider from '../Dataprovider'


const Products = () => {
    const value = useContext(DataContext)
    const products = value.products
    const addToCart = value.addToCart
// <Posts />
console.log(value.products)
    return (
        <div>
            <h1>Products</h1>
<div className="row">
            {products[0].map(item => (
     
        
            <div className="col-md-4 col-sm-6">
                <div className="post__container py-3 " key={item._id}>
                <div class="card rounded-sm " >
                  <img class="card-img-top img-responsive" src={item.src} alt="Card image" style={{width: "100%", height: "25rem"}} />
                 <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <h5 class="text-danger">${item.price}</h5>
                 <p class="card-text">{item.description}</p> 
                   <a href="#" class="btn btn-dark stretched-link d-flex justify-content-center" onClick={() => addToCart(item._id)}>Add to the cart</a>
                   </div>
               </div>
           </div>
       </div>
    
            ))}
 </div>
        </div>
    )
}

export default Products
