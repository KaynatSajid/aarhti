import React, {useState, useEffect} from 'react'
import './CardComponent.css';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';
import { useSelector } from 'react-redux';

function CardComponent({crop,cartOpen, setCartOpen, addToCart }) {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  const auth=useSelector(state =>state.auth )
  console.log(auth.name)
  

  return (
    <div className="card-container">
      {/* <img className='img-container' src={crop.image} alt={crop.name} />
       */}
      
      <h3 style={{color:'grey'}}>{crop.name}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className='area-container'>{crop.area} </p>
      <p className='price-container'>${crop.price}</p>
    </div>

      <p className='description-container'>{crop.description}</p>
     
      <div >
      <button className='button-outline' >
        <Link to ={`/cropdescription/${crop._id}`} className='link-no-underline'>View</Link>
      </button>

      
          <button className='button-outline' style={ {backgroundColor : "green", color:'white'}}
           onClick={() => {!cartOpen ? setCartOpen(true) : console.log('hello'); addToCart(crop); }}  >
            Add to Cart
          </button>
      </div>
    </div>
  );
}

export default CardComponent;



