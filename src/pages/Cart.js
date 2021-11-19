import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from '../Dataprovider'
import './Cart.css';
import { Link } from 'react-router-dom'


const Cart = () => {
const value = useContext(DataContext)
const [cart, setCart] = value.cart


const [total, setTotal] = useState(0)

useEffect(() => {
   const getTotal = () => {
      const res = cart.reduce((prev, ind) => {
          return prev + (ind.price * ind.count)
      },0)
      setTotal(res)
   }
   getTotal()
}, [cart])



const Dec = (id) => {
    cart.forEach(item => {
        if(item._id === id){
            //  cart.count == 1 ? item.count = 1 : item.count -= 1; 
            item.count -= 1
        }
      
    })
    setCart([...cart])
}


const Inc = (id) => {
    cart.forEach(item => {
        if(id === item._id){
            //   cart.count == 1 ? item.count = 1 : item.count += 1; 
            item.count += 1
        }
      
    })
    setCart([...cart])
}

const Remove = (id) => {

// cart.forEach((item, index) => {
//     if(item._id === id){
//         cart.splice(index, 1)
//     }
// })
// setCart([...cart])

cart.forEach((item, index) => {
    if(id === item._id){
    cart.splice(index, 1)
    }
})
setCart([...cart])

    //  cart.filter(item => (
     
    //  item._id !== id 
     
    //  ))
    // const data = cart.filter(product =>{
    //     return product._id !== id
    // })
   

 //setCart([...cart])

}

/*
    
useEffect(()=>{

    const data = localStorage.getItem('data')
     return data ?  setCart(JSON.parse(data)) : [];
    //if(data) setCart(cart)
    }, [])
    
  useEffect(()=>{
      
      localStorage.setItem('data' , JSON.stringify(cart) )
   
    })
  
*/

    return (
        <div>
         <h1>Cart</h1>
         <div class="row">
         {cart.map(item => (
     
    <div class="">
             <div className="post__container py-3" key={item._id}>
               
             <div class="card rounded-sm card__wh"  >
               <img class="card-img-top img-responsive " src={item.src} alt="Card image" style={{width: "100%", height: "40rem"}}></img>
              <div class="card-body">
               <h3 class="card-title">{item.title}</h3>
               <h5 class="text-danger">${item.price}</h5>
              <h5 class="card-text">{item.description}</h5> 
              <p class="card-text">{item.content}</p> 
                <div>
                    <span class="d-flex justify-content-space-around">
                        <button class="btn btn-outline-success mx-3" onClick={()=> Inc(item._id)}><h4>+</h4></button>
                       <h2>{item.count}</h2> 
                     {item.count > 1 ? <div><button class="btn btn-outline-danger mx-3" onClick={()=> Dec(item._id)}><h4>-</h4></button></div> : null}
                    </span>
                
                </div>
                <div class="float-right">
                    <button class="btn btn-danger" onClick={() => Remove(item._id)}>Remove it</button>
                </div>
                </div>
            </div>
        </div>
   
         </div>
         ))}
         
         </div>
         <div>
            <h4>total: ${total}</h4> 
            <Link to="Payment"><button class="btn bg-dark text-white mb-3 mt-2"><h3>Payment</h3></button></Link>
         </div>
        </div>
    )
}

export default Cart
