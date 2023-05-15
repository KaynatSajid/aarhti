import './Cards.css'
import React from 'react'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get Accurate Yield Results!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./service.jpg'
              text='Get real time results by counting wheat head counts'
              label='Price Estimator'
              path='/services'
            />
            <CardItem
              src='./wheatcrop.JPG'
              text='Real time object detection through aerial imagery'
              label='Real Time Detection'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
          <CardItem
              src='./register.jpg'
              text='Farmer and Buyers register on the appand marks field.'
              label='Registration on Web-App'
              path='/services'
            />

            <CardItem
              src='./droneiot.jpg'
              text='Our artificial intelligence tech-stack creates actionable data, that is verified for accuracy.'
              label='AI Processing'
              path='/services'
            />
            <CardItem
              src='./report.jpeg'
              text='The customer is provided with reports straight to their mobile phone or desktop.'
              label='Data Report Sharing'             
              path='/products'
            />
            
          </ul>
        </div>
      </div>

      </div>
  )
}

export default Cards
