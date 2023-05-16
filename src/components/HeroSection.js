import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from './Video';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/main.mp4' autoPlay loop muted />
      <h1 color='white'>AARHTI</h1>
      <p>Crop Yield Estimation</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to ='/signup-form' className= 'link-no-underline'>GET STARTED </Link>
        </Button>
         
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        > 
         {/* icon */}
           <i className='far fa-play-circle' /> 
           
          <Link to ='/video' className= 'link-no-underline'>WATCH TRAILER</Link>
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;