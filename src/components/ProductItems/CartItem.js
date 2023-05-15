function CartItem({ cartItem, onRemove, onIncrement, onDecrement }) {
  const { crop, quantity } = cartItem;

  const handleIncrement = () => {
    console.log('sidebar', crop, quantity)
    if (crop.quantity > 0) {
      // Check if available quantity is greater than zero
      if (quantity < crop.quantity) {
        onIncrement();
        crop.available--; // Update the available quantity of the crop
      }
      else 
      alert('Maximum '+ crop.quantity + ' items can be added')
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onDecrement();
      crop.available++; // Update the available quantity of the crop
    }
  };

  return (
    <li className="shopping-cart-sidebar-item">
      <div className="shopping-cart-sidebar-item-image">
      {Array.isArray(crop.image) ? (
        <img src={crop.image[1]} alt={crop.name} /> ): (<img src={crop.image} alt={crop.name} />)}
      </div>
      <div className="shopping-cart-sidebar-item-details">
        <div style={{ display: 'flex', flexDirection: 'col' }}>
          <h4 className="shopping-cart-sidebar-item-name">{crop.name}</h4>
          <div className="shopping-cart-sidebar-item-price" style={{ marginLeft: '50%' }}>
            ${crop.price.toFixed(2)}
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="shopping-cart-sidebar-item-quantity">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div style={{ marginLeft: '10px', flexDirection: 'row' }}>
            <button className="shopping-cart-sidebar-item-remove" onClick={onRemove}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;


