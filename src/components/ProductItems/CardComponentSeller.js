import React, { useState, useEffect } from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";
import axios from "axios";

function CardComponent(props) {
  const deleteItem = (crop_id) => {
    // code to delete the item
    // assuming the deletion was successful, display the message
    console.log("delete request gi");

    /* useEffect(() => {
      axios
        .delete(`http://localhost:8500/api/v1/aarhti/crops/${crop_id}`)
        .then((res) => {
          if (res.status == 200) {
            alert("Item has been deleted successfully.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, []); */
  };

  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);

  return (
    <div className="card-container">
      {/* <img className='img-container' src={props.crop.image} alt={props.crop.name} />
       */}

      <h3 style={{ color: "grey" }}>{props.crop.name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="area-container">{props.crop.area} </p>
        <p className="price-container">${props.crop.price}</p>
      </div>

      <p className="description-container">{props.crop.description}</p>

      <button className="button-outline">
        <Link to={`/cropdescriptionseller/${props.crop._id}`} className="link-no-underline">
          View
        </Link>
      </button>

      <button
        className="button-container"
        style={{ backgroundColor: "green", color: "white", marginLeft: "5px" }}
        onClick={(ev) => {
          axios.delete(`http://localhost:8500/api/v1/aarhti/crops/${props.crop._id}`).then((res) => {
            console.log("successfully deleted");
            
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default CardComponent;