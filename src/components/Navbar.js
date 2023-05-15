import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { calculateCartTotal, calculateItemsCount } from '../utils';
import { Button } from './Button';
import CartItem from './ProductItems/CartItem';
import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function Navbar({ cartOpen, setCartOpen, cartItems, setCartItems }) {
  let auth= useSelector(state => state.auth);


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  console.log(auth);
  const getLocalCartData = () => {
    let localCartData = JSON.parse(localStorage.getItem("cartitems"));
    if (localCartData === []) { return []; }
    else { return localCartData; }
  };

  if(cartItems && cartItems.length === 0) cartItems = getLocalCartData();
  const cartItemsCount = calculateItemsCount(cartItems);
  const cartTotal = calculateCartTotal(cartItems);


  const removeCartItem = (cartItemIndex) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(cartItemIndex, 1);
    setCartItems(newCartItems);
    localStorage.setItem('cartitems', JSON.stringify(newCartItems))
  };

  const incrementCartItem = (cartItemIndex) => {
    const newCartItems = [...cartItems];
    newCartItems[cartItemIndex].quantity += 1;
    setCartItems(newCartItems);

  };

  const decrementCartItem = (cartItemIndex) => {
    const newCartItems = [...cartItems];
    const newQuantity = newCartItems[cartItemIndex].quantity - 1;
    if (newQuantity === 0) {
      newCartItems.splice(cartItemIndex, 1);
    } else {
      newCartItems[cartItemIndex].quantity = newQuantity;
    }
    setCartItems(newCartItems);
  };


  const handleClick = () => setClick(!click);
  const CloseMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    
  }, []);

  window.addEventListener('resize', showButton);


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //local storageeeeee
  useEffect(() => {
    if(!cartItems) cartItems = []
    localStorage.setItem("cartitems", JSON.stringify(cartItems));
  }, [cartItems]);

  const button_switch=()=>{
    if(auth.role ==='Seller'){
      return <div><Button buttonStyle='btn--outline' background-color='white' >
      <Link to='/buyer' style={{ color: 'inherit', textDecoration: 'none' }}> Switch to Buying  </Link> </Button></div>
    }
    else if (auth.role ==='Buyer') {
      return <div><Button buttonStyle='btn--outline' background-color='white'>
      <Link to ='/seller' style = {{color:'inherit', textDecoration: 'none'}}> Switch to Selling  </Link> </Button></div>
      
    }
    
    else return <div></div>
  }
  // cart= getLocalCartData();
  // console.log("hilelele",crops);

  return (

    <>
      <div className='navbar'>
        <Link to='/' className='logo-container' onClick={CloseMobileMenu} >

          <img src='./arhti-01.png' width={250} height={250} />
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <div className="nav__content">


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={CloseMobileMenu}>Home</Link>
            </li>

            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={CloseMobileMenu}>Services</Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={CloseMobileMenu}>Products</Link>
            </li>

            <li className='nav-item'>
              {(!isLoggedIn) ?
                <Link to='/login-form' className='nav-links' onClick={CloseMobileMenu}>Login</Link>
                :
                <Link to='/accounts' className='nav-links' onClick={CloseMobileMenu}>Account</Link>
              }
            </li>
              {/* <li className='nav-item'>
            <Link to='/login-form' className='nav-links' onClick={CloseMobileMenu}>Login</Link>
            </li>

            <li className='nav-item'>
            <Link to='/accounts' className='nav-links' onClick={CloseMobileMenu}>Account</Link>
            </li> */}

          </ul>

        </div>


        {auth.role ==='Buyer' || auth.role ==='Seller' && <div style={{ color: 'white' }} className="shopping-cart-toggle" onClick={() => setCartOpen(!cartOpen)}>
          <i className="fa fa-shopping-cart" ></i>
          <span className="shopping-cart-count">{cartItemsCount}</span>
        </div>}

        {button_switch()}
        {/* {auth.role ==='Seller' && <Button buttonStyle='btn--outline' background-color='white' >
          <Link to='/buyer' style={{ color: 'inherit', textDecoration: 'none' }}> Switch to Buying  </Link> </Button>
        } */}

          {/* {auth.role ==='Buyer' && <Button buttonStyle='btn--outline' background-color='white'>
          <Link to ='/seller' style = {{color:'inherit', textDecoration: 'none'}}> Switch to Selling  </Link> </Button>
          } */}

      </div>


      {
        auth.role ==='Buyer' ||  auth.role ==='Seller' && cartOpen && <div className="shopping-cart">
          <div style={{ color: 'green' }} className="shopping-cart-toggle" onClick={() => setCartOpen(!cartOpen)}>
            <i className="fa fa-shopping-cart" ></i>
            <span className="shopping-cart-count">{cartItemsCount}</span>
          </div>
          <div className={`shopping-cart-sidebar ${cartOpen ? 'open' : ''}`}>
            <div className="shopping-cart-sidebar-header">
              <h2 style={{ color: 'Green', marginLeft: '20px' }}>Cart</h2>
              <div
                className="shopping-cart-sidebar-close"
                onClick={() => setCartOpen(false)}
              >
                <i className="fa fa-close"></i>
              </div>
            </div>
            <div className="shopping-cart-sidebar-body" >
              {cartItems.length === 0 ? (
                <div className="shopping-cart-sidebar-empty">
                  Your shopping cart is empty.
                </div>
              ) : (
                <ul className="shopping-cart-sidebar-items" style={{ overflowY: 'auto', height: '500px', marginLeft: '10px' }}>
                  {cartItems.map((cartItem, index) => (
                    <CartItem
                      key={cartItem.crop.id}
                      cartItem={cartItem}
                      onRemove={() => removeCartItem(index)}
                      onIncrement={() => incrementCartItem(index)}
                      onDecrement={() => decrementCartItem(index)}
                    />
                  ))}
                </ul>
              )}
            </div>
            { cartItems.length > 0 && (
              <div className="shopping-cart-sidebar-footer">
                <div className="shopping-cart-sidebar-total" style={{ marginTop: '20px' }}>
                  Total: ${cartTotal.toFixed(2)}
                </div>
                <button className="checkout-button" style={{ backgroundColor: 'green', marginBottom: '10px', marginTop: '20px' }}
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <Link to="/Billing" className='link-no-underline'>Checkout</Link>
                </button>

                <button className="checkout-button"
                  onClick={() => setCartOpen(!cartOpen)} > Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      }
    </>

  );
}

export default Navbar
