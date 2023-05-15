import React , {useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { Button } from '../Button';
import CartItem from './CartItem';
import addToCart from '../../utils';
import './CropDescription.css';
import axios from 'axios';
import { useEffect } from 'react';

function CropDescription({ cartOpen, setCartOpen, addToCart }) {

  /* const x = useParams();
  // console.log(x);
  const selectedCrop = crops.filter(crop => crop.id == x.id)[0];
  // console.log(selectedCrop); */

  const [crop, setData] = useState([]);
  const [selectedCrop,setSelectedCrop]=useState({})
  const [relatedCrop, setrelatedCrop]=useState([]);
  const [slide, setSlide] = useState(0);

  const x = useParams();

  useEffect(() => {
    
      axios.get(`http://localhost:8500/api/v1/aarhti/crops`).then(response => {
        console.log("The response data of use effect is ",response.data);
        setData(response.data.crops);
        setSelectedCrop(response.data.crops.filter(crop => crop._id === x.id)[0]);
        setrelatedCrop(response.data.crops.filter(crop => crop._id !== x.id));
        console.log(response.data.crops.filter(crop => crop._id === x.id))
        console.log(response.data.crops.filter(crop => crop._id === x.id)[0])
      }).catch(err => {
        console.log(err);
  });
    },[]);

  return (
    <div className='crop-container' >

      {/* //image slider to be added */}
      <div >
        <img classname="crop-image" src={selectedCrop.image} style={{ width: '100%', height: '300px' }} />
      </div>

      <div className='text-container'>
        <h2 className='crop-title'>{selectedCrop.name}</h2>
        <p className='crop-price'>Area: {selectedCrop.area}</p>
        <p className='crop-price'>Quantity available in kg:  {selectedCrop.quantity} </p>
        <p className='crop-price'>Price per kg:  {selectedCrop.price} </p>
        <p className='crop-description'>Details: {selectedCrop.description}</p>

        <div >

          <button className='link-no-underlined' style={{margin:"20px", backgroundColor:'#007bff'}} >
          <Link to={'/seller'} style={{ color: 'inherit', textDecoration: 'none' }}>Back</Link>
          </button>
        </div>

      </div>
    </div>
  )
}

export default CropDescription;


