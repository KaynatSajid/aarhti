
import React, { useState ,useEffect, Link} from 'react';
import crops from '../data';
import CartItem from './CartItem';
import './AddCartPage.css';

function AddCartPage() 
{
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  console.log(crops);

  const addToCart = (crops) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.crops._id === crops._id
    );
    if (existingCartItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      const newCartItem = { crops, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeCartItem = (cartItemIndex) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(cartItemIndex, 1);
    setCartItems(newCartItems);
  };

  const incrementCartItem = (cartItemIndex) => {
    const allCartItems = JSON.parse(localStorage.getItem('cartitems'))
    const newCartItems = [...cartItems];
    // allCartItems
    newCartItems[cartItemIndex].quantity += 1;
    console.log('hi',newCartItems);
    setCartItems(newCartItems);
    
    // if(quantity > newCartItems.quantity){
    //   quantity= newCartItems.max;
    // }
    
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

  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.crop.price * item.quantity,
    0
  );
  return (
    
    <div className="shopping-cart">
      <div className="shopping-cart-toggle" onClick={() => setCartOpen(!cartOpen)}>
        <i className="fa fa-shopping-cart"></i>
        <span className="shopping-cart-count">{cartItemsCount}</span>
      </div>
      <div className={`shopping-cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="shopping-cart-sidebar-header">
          <h3>Cart</h3>
          <div
            className="shopping-cart-sidebar-close"
            onClick={() => setCartOpen(false)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="shopping-cart-sidebar-body">
          {cartItems.length === 0 ? (
            <div className="shopping-cart-sidebar-empty">
              Your shopping cart is empty.
            </div>
          ) : (
            <ul className="shopping-cart-sidebar-items">
              {cartItems.map((cartItem, index) => (
                <CartItem
                  key={cartItem.crop._id}
                  cartItem={cartItem}
                  onRemove={() => removeCartItem(index)}
                  onIncrement={() => incrementCartItem(index)}
                  onDecrement={() => decrementCartItem(index)}
                />
              ))}
            </ul>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="shopping-cart-sidebar-footer">
            <div className="shopping-cart-sidebar-total">
              Total: ${cartTotal.toFixed(2)}
            </div>
            <button className="shopping-cart-sidebar-checkout-button">
              
              Checkout
            </button>
        
          </div>
          
        )}
     </div>
     </div> 
  )
}
     export default AddCartPage;