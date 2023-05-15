import React, { useState } from 'react';

const CropCartList = ({ carts }) => {
  const [areaFilter, setAreaFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const filteredCarts = carts.filter(cart => {
    if (areaFilter && cart.area < areaFilter) {
      return false;
    }
    if (priceFilter && cart.price > priceFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <input
        type="number"
        placeholder="Enter area"
        value={areaFilter || ''}
        onChange={e => setAreaFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter price"
        value={priceFilter || ''}
        onChange={e => setPriceFilter(e.target.value)}
      />
      {filteredCarts.map(cart => (
        <div key={cart.id}>
          <h2>{cart.name}</h2>
          <p>Area: {cart.area}</p>
          <p>Price: {cart.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CropCartList;
