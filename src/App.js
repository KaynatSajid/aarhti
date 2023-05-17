import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Pages/Services';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Accounts from './components/Accounts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import Video from './components/Video';
import { AuthCredential } from 'firebase/auth';
import CropDescription from './components/ProductItems/CropDescription';
import CropDescriptionSeller from './components/ProductItems/CropDescriptionSeller';
import AddCartPage from './components/ProductItems/AddCartPage';
import BuyerSection from './components/BuyerSection';
import Billing from './components/ProductItems/Billing';
import OrderConfirmed from './components/ProductItems/OrderConfirmed';
import Seller from './components/Pages/Seller';
import ShowCrops from './components/Pages/ShowCrops';
import SellerCropForm from './components/SellerCropForm';
import SellCrops from './components/Pages/SellCrops';
import DisplayResults from './components/Pages/DisplayResults';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/index";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartitems'))
    setCartItems(items)
  }, [])
 
  const addToCart = (cropToAdd) => {
    console.log('all cart items',cartItems);
    console.log('crop id', cropToAdd);
    const existingCartItemIndex = cartItems.findIndex(
      (item) => {
        console.log('iterate item id', item.crop._id)
        return item.crop._id == `${cropToAdd._id}`
      }
    );
    console.log('already exists: ', existingCartItemIndex);
    if (existingCartItemIndex !== -1) {
      //we found the item so we update its qualntity
      const newCartItems = [...cartItems];
      if((newCartItems[existingCartItemIndex].quantity + 1) > cropToAdd.quantity)
        alert('Maximum '+ cropToAdd.quantity + ' items can be added')
      else newCartItems[existingCartItemIndex].quantity += 1;

      setCartItems(newCartItems);
    } else {
      //item not already present
      const newCartItem = { crop: cropToAdd, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };


  return (
    <>
      <Router>
        <Navbar  cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path='/signup-form' element={<SignupForm />} />
          <Route path='/buyer' element={<BuyerSection  cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart}  />} />
          <Route path='/addcartpage' element={<AddCartPage />} />
          <Route path='/video' element={<Video />} />
          <Route path="cropdescription/:id" element={<CropDescription cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} />} />
          <Route path="cropdescriptionseller/:id" element={<CropDescriptionSeller cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} />} />
          <Route path="/addcart" element={<AddCartPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
          <Route  path= '/seller'  element={<Seller />}/>
          <Route  path= '/seller/showcrops'  element={<ShowCrops />}/>
          <Route  path= '/seller/sellcrops'  element={<SellCrops />}/>
          <Route  path= '/seller/sellercropform'  element={<SellerCropForm />}/>
          <Route  path= '/seller/display-results'  element={<DisplayResults />}/>

        </Routes>
        <ToastContainer />
      </Router>

    </>
    
  );
}




export default App;
