import React, {createContext, useContext, useState, useEffect } from 'react'

export const DataContext = createContext();

 export const Dataprovider = props => {

    const [products, setProducts] = useState([
                {
                    "_id": "1",
                    "title": "Nike Shoes 01",
                    "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.png",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 23,
                    "colors": ["red", "black", "crimson", "teal"],
                    "count": 1
                },
                {
                    "_id": "2",
                    "title": "Nike Shoes 02",
                    "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5438d49b-250e-4d01-bf85-a8ad353e889a/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.png",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 19,
                    "colors": ["red", "crimson", "teal"],
                    "count": 1
                },
                {
                    "_id": "3",
                    "title": "Nike Shoes 03",
                    "src": "https://static.sneakerjagers.com/products/660x660/185110.jpg",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 50,
                    "colors": ["lightblue", "white", "crimson", "teal"],
                    "count": 1
                },
                {
                    "_id": "4",
                    "title": "Nike Shoes 04",
                    "src": "https://images.squarespace-cdn.com/content/v1/59aa18678fd4d28748fdc362/1582234001660-F0S8MPSOXU2TFPKTLT9L/ke17ZwdGBToddI8pDm48kIIWdAnyBSrZ5E6Gv7JXlDh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO_pbVb0jdkjHmk-MhSr8npod9fyhKaF6iH64GfT8sX2GQ/IMG_9272.jpg",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 15,
                    "colors": ["orange", "black", "crimson", "teal"],
                    "count": 1
                },
                {
                    "_id": "5",
                    "title": "Nike Shoes 05",
                    "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 10,
                    "colors": ["orange", "black", "crimson", "teal"],
                    "count": 1
                },
                {
                    "_id": "6",
                    "title": "Nike Shoes 06",
                    "src": "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2314919/2019/8/16/3a8048a1-d018-4d5e-91db-effc48e9ab801565946523938-Nike-Men-White--Black-BENASSI-JDI-Printed-Flip-Flops-7081565-1.jpg",
                    "description": "UI/UX designing, html css tutorials",
                    "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                    "price": 17,
                    "colors": ["orange", "black", "crimson", "teal"],
                    "count": 1
                }
            ])
          
           
        
 // const check = cart.every(item => {
                //     // اذا فيه مشابه معناه انه flase
                //     // etha mafe moshabh m3nah enno true
                //      return item._id !== id
                //  })
                // if(check){
                //     const data = products.filter(product =>{
                //         return product._id === id
                //     })
                //     setCart([...cart, ...data])
                //   }else{
                //      alert("The product has been added to cart.")
                //   }
                // // const data = products.filter(product =>{
                // //    return product._id === id 
                // // })
                // // setCart([...cart ,...data])

                useEffect(()=>{

    const data = localStorage.getItem('data')
     return data ?  setCart(JSON.parse(data)) : []
   
    }, [])
    
  useEffect(()=>{
      
      localStorage.setItem('data' , JSON.stringify(cart) )
   
    })

            const addToCart = (id) =>{
                const check = cart.every(item =>{
                    return item._id !== id
                })
                if(check){
                    const data = products.filter(product =>{
                        return product._id === id
                    })
                    setCart([...cart, ...data])
                }else{
                    alert("The product has been added to cart.")
                }
            }
const [cart, setCart] = useState([])

/*
            useEffect(()=>{

                const data = localStorage.getItem('data') 
                return data ?  setCart(JSON.parse(data)) : [];
                
              
                      console.log(data)
                        
                //if(data) setCart(cart)
                }, [])
                
              useEffect(()=>{
                  
                  localStorage.setItem('data' , JSON.stringify(cart) )
               
                })
*/


           const value = {
            products: [products, setProducts],
            cart: [cart, setCart],
            addToCart: addToCart
           }
    return (
            <div>
              <DataContext.Provider value={value}> 
                {props.children}
             </DataContext.Provider>
           </div>
    )
}





// const Dataprovider = (props) => {
  
//     const [products, setProducts] = useState([
//         {
//             "_id": "1",
//             "title": "Nike Shoes 01",
//             "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.png",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 23,
//             "colors": ["red", "black", "crimson", "teal"],
//             "count": 1
//         },
//         {
//             "_id": "2",
//             "title": "Nike Shoes 02",
//             "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5438d49b-250e-4d01-bf85-a8ad353e889a/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.png",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 19,
//             "colors": ["red", "crimson", "teal"],
//             "count": 1
//         },
//         {
//             "_id": "3",
//             "title": "Nike Shoes 03",
//             "src": "https://static.sneakerjagers.com/products/660x660/185110.jpg",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 50,
//             "colors": ["lightblue", "white", "crimson", "teal"],
//             "count": 1
//         },
//         {
//             "_id": "4",
//             "title": "Nike Shoes 04",
//             "src": "https://images.squarespace-cdn.com/content/v1/59aa18678fd4d28748fdc362/1582234001660-F0S8MPSOXU2TFPKTLT9L/ke17ZwdGBToddI8pDm48kIIWdAnyBSrZ5E6Gv7JXlDh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO_pbVb0jdkjHmk-MhSr8npod9fyhKaF6iH64GfT8sX2GQ/IMG_9272.jpg",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 15,
//             "colors": ["orange", "black", "crimson", "teal"],
//             "count": 1
//         },
//         {
//             "_id": "5",
//             "title": "Nike Shoes 05",
//             "src": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 10,
//             "colors": ["orange", "black", "crimson", "teal"],
//             "count": 1
//         },
//         {
//             "_id": "6",
//             "title": "Nike Shoes 06",
//             "src": "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2314919/2019/8/16/3a8048a1-d018-4d5e-91db-effc48e9ab801565946523938-Nike-Men-White--Black-BENASSI-JDI-Printed-Flip-Flops-7081565-1.jpg",
//             "description": "UI/UX designing, html css tutorials",
//             "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//             "price": 17,
//             "colors": ["orange", "black", "crimson", "teal"],
//             "count": 1
//         }
//     ])
//     // object-fit,  
    
//     // const styles = {
//     //     width:"100%",
//     //     object-fit: "cover"
//     // }
//    const [cart, setCart] = useState([])

//     const addToCart = (id) =>{
//         const check = cart.every(item =>{
//             return item._id !== id
//         })
//         if(check){
//             const data = products.filter(product =>{
//                 return product._id === id
//             })
//             setCart([...cart, ...data])
//         }else{
//             alert("The product has been added to cart.")
//         }
//     }
//    const value = {
//     products: [products, setProducts],
//     cart: [cart, setCart],
//     addToCart: addToCart
//    }
//     return (
//         <div>
//             <DataContext.Provider value={value}> 
//                 {props.Childeren}
//             </DataContext.Provider>
               
           
//         </div>
//     )
// }

// export default Dataprovider
