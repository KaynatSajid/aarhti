import { color } from "@mui/system";
import React from "react";
import { useState } from 'react';
import CardComponentSeller from "./CardComponentSeller";
//import crops from "../dataseller";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function filterCropsByArea(crops, area) {
  if (!area) {
    return crops;
  }

  return crops.filter(crop => crop.area === area);
}

function ProductSellerCard({ cartOpen, setCartOpen, addToCart }) {
  const auth=useSelector(state=> state.auth);
  const sell_id=auth._id
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [selectedAreaFilter, setSelectedAreaFilter] = useState(null);
  const [data, setData] = useState([]);
  console.log(sell_id)

    useEffect(() => {
      axios.get('http://34.125.207.80:8500/api/v1/aarhti/crops')
        .then(res => {setData(res.data.crops);
          console.log(res.data)
          console.log(res.data.crops);
          console.log(res.data.crops.filter(crop => crop.seller_id === sell_id ));
          setSelectedCrop(res.data.crops.filter(crop => crop.seller_id === sell_id ));
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
  
    <span style={{ fontSize:'18px',marginRight: "10px" , color:"white", padding:"10px"}}>Filter by area:</span>
    <select 
      value={selectedAreaFilter}
      onChange={(e) => setSelectedAreaFilter(e.target.value)}
      style={{
        border: "none",
        background: "transparent",
        fontWeight: "bold",
        outline: "none",
        cursor: "pointer",
        color: "white",
        fontFamily: "inherit",
        fontSize:'18px',
        padding:"15px",
        width:"100px",
        // paddingLeft:"10px", 
        marginLeft:'10px',
        paddingRight:'20px',
      }}
    >
 
      
      <option style={{ width:'2500px',fontSize:'18px',marginRight: "10px" , color:"black", padding:"40px"}} value={""} >All</option>
      <option style={{ fontSize:'18px',marginRight: "10px" , color:"black", padding:"10px"}} value="Punjab">Punjab</option>
      <option style={{ fontSize:'18px',marginRight: "10px" , color:"black", padding:"10px"}} value="Sindh">Sindh</option>
      <option style={{ fontSize:'18px',marginRight: "10px" , color:"black", padding:"10px"}} value="Sargodha">Sargodha</option>
      
    </select>
  </div>
</div>

        {/* </div> */}
        {selectedCrop && filterCropsByArea(selectedCrop, selectedAreaFilter).map(data => (
          <CardComponentSeller
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


export default ProductSellerCard;
