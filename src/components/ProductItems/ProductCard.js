import { color } from "@mui/system";
import React from "react";
import { useState } from 'react';
import Cardcomponent from "./Cardcomponent";
import axios from "axios";
import { useEffect } from "react";

function filterCropsByArea(crops, area) {
  if (!area) {
    return crops;
  }

  return crops.filter(crop => crop.area === area);
}

function ProductCard({ cartOpen, setCartOpen, addToCart }) {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedAreaFilter, setSelectedAreaFilter] = useState(null);
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8500/api/v1/aarhti/crops')
        .then(res => {setData(res.data.crops);
          console.log(res.data.crops)
          console.log(data)})
        .catch(error => console.error(error));
    }, []);
  


  return (
    
    <div style={{ paddingLeft: 60 }}>
      <h2 style={{ textAlign: 'left', margin: 30, paddingLeft: 10, color: '#623F1C' }}>Crops Available</h2>
      
      <div
    style={{
      backgroundColor: "green",
      display: "flex",
      alignItems: "center",
      marginRight: "100px",
      marginLeft:"25px",
      borderRadius: "20px",
      paddingLeft: "20px",
      width: "270px",
      marginBottom:"10px"
    }}
  >

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
  
    <span style={{ marginRight: "10px" , color:"white", padding:"10px"}}>Filter by area:</span>
    <select
      value={selectedAreaFilter}
      onChange={(e) => setSelectedAreaFilter(e.target.value)}
      style={{
        border: "none",
        background: "transparent",
        fontWeight: "bold",
        outline: "none",
        cursor: "pointer",
        color: "black",
        fontFamily: "inherit",
        padding:"5px",
        width:"100px",
        // paddingLeft:"10px", 
        marginLeft:'10px',
      }}
    >
 
      
      <option value={""} >All</option>
      <option value="Punjab">Punjab</option>
      <option value="Sindh">Sindh</option>
      <option value="Sargodha">Sargodha</option>
      
    </select>
  </div>
</div>

        {/* </div> */}
        {filterCropsByArea(data, selectedAreaFilter).map(data => (
          <Cardcomponent
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
            addToCart={addToCart}
            key={data._id}
            crop={data}
            onClick={() => setSelectedCrop(data)}
          />
        ))}
      </div>
    // </div>
  );
}

export default ProductCard;
