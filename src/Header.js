import React, {useContext} from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { Route, HashRouter as Router, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './Header.css'
import {DataContext, Dataprovider} from './Dataprovider'
import Payment from './pages/Payment';

export const Header = () => {
const value = useContext(DataContext)
const cart = value.cart
const counts = cart[0].length

    return (
      // <Dataprovider>
        <div class="">
      
          <Router>
       <nav class="navbar navbar-expand-md navbar-light mb-5 ">
       <div class=" navbar-brand mr-5 li-hover" href="#"><h3>Nike</h3></div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
         <span class="navbar-toggler-icon"></span>
        </button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
   <ul class="navbar-nav">
    <li class="nav-item mx-3">
    
    </li>
    <li class="nav-item mx-3">
     <Link class="nav-link li-hover" to="/">Home</Link>
    
    </li>
    <li class="nav-item mx-3">
    <Link class="nav-link li-hover" to="Products">Products</Link>
    
    </li>
    <li class="nav-item mx-3">
    <Link class="nav-link li-hover" to="Contact">Contact</Link>
   
    </li>
    <li class="nav-item mx-3">
    <Link class="nav-link li-hover" to="About">About</Link>
     
    </li>
    <li class="nav-item mx-3">
    <Link class="nav-link li-hover" to="Login">Login/Register</Link>
   
    </li>
    <li class="nav-item mx-3">
    <Link class="nav-link" to="Cart"><ShoppingCartIcon />{counts}</Link>
   
    </li>
  </ul>
</div>
 
</nav>
       <div> 
          <Route path="/" exact component={Home} /> 
          <Route path="/Products" exact component={Products} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/About" exact component={About} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Payment" exact component={Payment} />
       </div>
        </Router>
       
       </div>
  
    
    )
    
}
