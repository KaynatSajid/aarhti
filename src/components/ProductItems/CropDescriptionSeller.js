import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../Button";
import crops from "../data";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import CartItem from "./CartItem";
import addToCart from "../../utils";
import "./CropDescription.css";
import { useEffect } from "react";

function CropDescription({ cartOpen, setCartOpen, addToCart }) {
  const x = useParams();
  // console.log(x);
  //const selectedCrop = crops.filter(crop => crop._id == x.id)[0];

  const [slide, setSlide] = useState(0);
  const [crop, setData] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState({});

  const nextSlide = () => {
    setSlide(slide === selectedCrop.image.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? selectedCrop.image.length - 1 : slide - 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8500/api/v1/aarhti/crops`)
      .then((response) => {
        console.log("The response data of use effect is ", response.data);
        setData(response.data.crops);
        setSelectedCrop(response.data.crops.filter((crop) => crop._id === x.id)[0]);
        console.log(response.data.crops.filter((crop) => crop._id === x.id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="crop-container">
      <div className="carousel">
        {Array.isArray(selectedCrop.image) ? (
          //for multiple imgs
          <div>
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {selectedCrop.image.map((image, index) => (
              <img key={index} src={image.data} className={slide === index ? "slide" : "slide slide-hidden"} />
            ))}
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

            <span className="indicators">
              {selectedCrop.image.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={slide === index ? "indicator" : "indicator indicator-inactive"}
                    onClick={() => setSlide(index)}
                  ></button>
                );
              })}
            </span>
          </div>
        ) : (
          //for single image
          <div>
            <img src={selectedCrop.image} className="Slider-img" />
          </div>
        )}
      </div>

      <div className="text-container">
        <h2
          style={{
            color: "green",
            fontFamily: "Montserrat,Helvetica,sans-serif",
            fontSize: "30px",
            paddingTop: "0px",
            fontWeight: "normal",
          }}
        >
          {selectedCrop.name}
        </h2>

        <p
          style={{
            color: "rgb(91, 91, 91)",
            fontFamily: "Montserrat,Helvetica,sans-serif ",
            fontSize: "20px",
            paddingTop: "10px",
          }}
        >
          Details: {selectedCrop.description}
        </p>

        <p
          style={{ color: "Black", fontFamily: "Montserrat", fontSize: "21px", paddingTop: "20px", fontWeight: "bold" }}
        >
          Price per kg: {selectedCrop.price}{" "}
        </p>
        <p
          style={{
            color: "Black",
            fontFamily: "Montserrat,Helvetica,sans-serif",
            fontSize: "21px",
            paddingTop: "19px",
          }}
        >
          Area: {selectedCrop.area}
        </p>
        <p
          style={{
            color: "Black",
            fontFamily: "Montserrat,Helvetica,sans-serif",
            fontSize: "21px",
            paddingTop: "16px",
            paddingBottom: "10px",
          }}
        >
          Quantity available in kg: {selectedCrop.quantity}{" "}
        </p>

        <div>
          <button className="link-no-underlined" style={{ margin: "20px", backgroundColor: "#007bff" }}>
            <Link to={"/seller"} style={{ color: "inherit", textDecoration: "none" }}>
              Back
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CropDescription;
