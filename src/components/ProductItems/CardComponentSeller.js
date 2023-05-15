import React, {useState, useEffect} from 'react'
import './CardComponent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CardComponent(props) {

    function deleteItem() {
        // code to delete the item
        // assuming the deletion was successful, display the message
        alert("Item has been deleted successfully.");
      }
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmationMessageVisible, setConfirmationMessageVisible] = useState(false);

  const handleDelete = async (cropId) => {
    if (confirmationMessageVisible) {
      setIsDeleting(true);
       
        
      
    } else {
      setConfirmationMessageVisible(true);
    }
  };

  const handleCancel = () => {
    setConfirmationMessageVisible(false);
  };

  return (
    <div className="card-container">
      {/* <img className='img-container' src={props.crop.image} alt={props.crop.name} />
       */}
      
      <h3 style={{color:'grey'}}>{props.crop.name}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p className='area-container'>{props.crop.area} </p>
      <p className='price-container'>${props.crop.price}</p>
    </div>

      <p className='description-container'>{props.crop.description}</p>
     

      <button className='button-outline' >
        <Link to ={`/cropdescriptionseller/${props.crop._id}`} className='link-no-underline'>View</Link>
      </button>

      <button className='button-container'
      style={ {backgroundColor : "green", color:'white', marginLeft:'5px'}}
      onClick={handleDelete} disabled={isDeleting}
      >
         {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
      {confirmationMessageVisible && (
        <div>
          <p>Are you sure you want to delete this crop?</p>
          <button onClick={handleDelete(props.crop._id)}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
}

export default CardComponent;



