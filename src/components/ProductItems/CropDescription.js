import React , {useState} from 'react'
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ProductCard from './ProductCard';
import Cardcomponent from "./Cardcomponent";
//import crops from '../data';
import { useEffect } from 'react';
import axios from 'axios';
import './CropDescription.css';

function CropDescription({ cartOpen, setCartOpen, addToCart }) {
  const [crop, setData] = useState([]);
  const [selectedCrop,setSelectedCrop]=useState({})
  const [relatedCrop, setrelatedCrop]=useState([]);
  const [slide, setSlide] = useState(0);

  const x = useParams();

  useEffect(() => {
    
      axios.get(`http://34.125.207.80:8500/api/v1/aarhti/crops`).then(response => {
        console.log("The response data of use effect is ",response.data);
        setData(response.data.crops);
        
        setSelectedCrop(response.data.crops.filter(crop => crop._id === x.id)[0]);
        setrelatedCrop(response.data.crops.filter(crop => crop._id !== x.id));
        
        
      }).catch(err => {
        console.log(err);
  });
    },[]);

  

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://34.125.207.80:8500/api/v1/aarhti/crops/${x.id}`);
        console.log(response.data.message);
        setData(response.data.message);
        console.log(selectedCrop);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, []); */

  // [relatedCrop, setrelatedCrop] = useState(null);
 console.log(selectedCrop);
  const nextSlide = () => {
    setSlide(slide === selectedCrop.image.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? selectedCrop.image.length - 1 : slide - 1);
  };
    
   console.log(Array.isArray(selectedCrop.image))
  return (
    <div>
    <div className='crop-container' >

      <div className="carousel" >
      {Array.isArray(selectedCrop.image) ? (
        //for multiple imgs
        <div>
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {selectedCrop.image.map((image, index) => (
              <img key={index} src={image.data} className= {slide === index ? "slide" : "slide slide-hidden"} />
            ))}
            <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className="arrow arrow-right"
                  />


          <span className="indicators">
                  {selectedCrop.image.map((_, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          slide === index ? "indicator" : "indicator indicator-inactive"
                        }
                        onClick={() => setSlide(index)}
                      ></button>
                    );
                  })}
                </span>
          </div>

          //for single image
        ):(<div>
          <img src={selectedCrop.image} className='Slider-img' />
        </div>) }
      </div>
     
      <div className='text-container' >
        <h2  style={{color:"green", fontFamily: "Montserrat,Helvetica,sans-serif", fontSize: "30px", paddingTop:"0px", fontWeight:"normal"}} 
        >{selectedCrop.name}</h2>

        <p style={{color:"rgb(91, 91, 91)", fontFamily: "Montserrat,Helvetica,sans-serif ", fontSize: "20px", paddingTop:"10px"}} 
        >Details: {selectedCrop.description}</p>

        <p style={{color:"Black", fontFamily: "Montserrat", fontSize: "21px" , paddingTop:"20px",fontWeight:"bold"}} 
        >Price per kg:  {selectedCrop.price} </p>
        <p style={{color:"Black", fontFamily: "Montserrat,Helvetica,sans-serif", fontSize: "21px",paddingTop:"19px"}} 
        >Area:  { selectedCrop.area}</p>
        <p style={{color:"Black", fontFamily: "Montserrat,Helvetica,sans-serif", fontSize: "21px",paddingTop:"16px", paddingBottom:"10px"}} 
        >Quantity available in kg:   {selectedCrop.quantity} </p>

        <div style={{ display: 'flex', gap: '1rem'}}>
          <button  onClick={() => {!cartOpen ? setCartOpen(true) : console.log('hello'); addToCart(selectedCrop); }} 
          className='link-no-underlined' >
            Add to Cart
          </button>

          <button className='link-no-underlined' style={{backgroundColor:'#007bff'}} >
          <Link to={'/buyer'} style={{ color: 'inherit', textDecoration: 'none' }}>Continue Shopping</Link>
          </button>
        </div>       
      </div>

    </div>


          <div style={{ marginLeft:"20px",}}>
           <h2 style={{padding:"20px", paddingLeft:"40px",marginLeft:"23px"}}> Related Products</h2>

          <div style={{marginLeft:"30px"}}> 
          
          {relatedCrop.map(crop => (
          <Cardcomponent
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
            addToCart={addToCart}
            key={crop._id}
            crop={crop}
          />
        ))}

      </div> 
      </div>
    </div>
  )
}

export default CropDescription;


