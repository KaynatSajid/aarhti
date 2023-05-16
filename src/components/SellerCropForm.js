import { padding } from "@mui/system";
import React from "react";
import { useState } from "react";
import "./SellerCropForm.css";
import axios from "axios";
import { useSelector } from "react-redux";

function SellerCropForm() {
  const auth = useSelector((state) => state.auth);
  const sell_id = auth._id;
  console.log(sell_id);
  //console.log(auth)
  const [values, setValues] = useState({
    name: "",
    quantity: 0,
    type: "",
    price: 0,
    area: "",
    description: "",
    seller_id: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const detectObjects = async (file) => {
    const formData = new FormData();
    formData.append("video", file);

    const response = await axios.post("http://localhost:8500/api/v1/aarhti/videos", formData);
    console.log(response);

    const response1 = await axios.post("http://localhost:5000/detect", {});
    console.log(response1);

    // Render results in frontend
  };

  const api_call_addCrop = async () => {
    let send_data = { ...values };

    send_data.image = [
      {
        data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DUs9Wj1AR9im6WxqDnDWs0IVwB42JNiNhGGJNH_PclzgQ1Dfhx_MUuPKniMDM-Vj4Aw&usqp=CAU ",
      },
      {
        data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyyJWlGzRRtjvpfybhvJqPerGzAVr5FirEsubIOGaKrBUxZMoz4kAh7xr3U22tIhZ_LU&usqp=CAU ",
      },
      {
        data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShURksz5Mi0K8KVGHNhdJR5zLVkIul1EOJ3slO7OoVGLnR0QKXIgXSETTusGAygysEFqw&usqp=CAU ",
      },
    ];
    send_data.type = "Wheat";
    send_data.seller_id = sell_id;
    console.log(send_data);
    const res = await axios.post("http://localhost:8500/api/v1/aarhti/buyers/add", send_data);
    console.log(res);
    if (res.status == 200) {
      setValues({ name: "", quantity: 0, type: "", price: 0, area: "", description: "", seller_id: "" });
    }
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.name || !values.quantity || !values.description) {
      setErrorMsg("Fill all fields");
    } else {
      setErrorMsg("");
      await api_call_addCrop(values);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    detectObjects(file);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = [];
    console.log(files);
    files.forEach((file) => {
      const reader = new FileReader();
      const type = file.type;
      console.log(type);
      reader.onloadend = () => {
        const res = reader.result;
        selectedImages.push({ data: res });
        if (selectedImages.length === files.length) {
          setImages(selectedImages);
        }
      };
      reader.readAsDataURL(file);
      console.log(reader);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "300px",
        marginRight: "250px",
        marginTop: "30px",
        backgroundColor: "white",
        paddingBottom: "20px",
        display: "flex",
        borderRadius: "15px",
      }}
    >
      <div>
        <img
          style={{ width: "250px", height: "250px", marginLeft: "10px", marginTop: "200px", marginRight: "20px" }}
          src="../crop-description.png"
          className="img-container"
        />
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "25px",
            marginTop: "30px",
            marginLeft: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Crop Description
        </h2>
      </div>

      <div class="add-crop-box" style={{ backgroundColor: "rgba(220, 248, 231,0.5)", width: "3000px", height: "100%" }}>
        <h2>Add Your Crop Details</h2>
        <form onSubmit={handleSubmission}>
          <div>
            <label for="crop-name " style={{ padding: "10px", marginRight: "20px" }}>
              Crop Name:
            </label>
            <input
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              type="text"
              id="crop-name"
              name="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="crop-quantity" style={{ padding: "10px", marginRight: "35px" }}>
              Quantity:
            </label>
            <input
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              type="number"
              id="crop-quantity"
              name="quantity"
              min="1"
              required
              value={values.quantity}
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="crop-area" style={{ padding: "10px", marginRight: "35px" }}>
              Area:
            </label>
            <input
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              type="text"
              id="crop-area"
              name="area"
              required
              value={values.area}
              onChange={handleChange}
            />
          </div>

          <div>
            <label for="crop-price" style={{ padding: "10px", marginRight: "35px" }}>
              Price:
            </label>
            <input
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              type="text"
              id="crop-price"
              name="price"
              required
              value={values.price}
              onChange={handleChange}
            />
          </div>
          {/* <div>
    <label for="crop-type"  style={{padding:'10px', marginRight:'30px'}}>Crop Type:</label>
    <select style={{margin:'20px',marginLeft:'10px',width: '300px', paddingBottom:'20px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}} id="crop-type" name="type" required value={values.type} onChange={handleChange}>
      <option value="">Select Crop Type</option>
      <option value="Wheat">Wheat</option>
      <option value="Rice">Rice</option>
      <option value="Maize">Maize</option>
      <option value="Barley">Barley</option>
    </select>
  </div> */}
          <div>
            <label for="crop-description" style={{ padding: "10px", marginTop: "30px", marginRight: "22px" }}>
              Description:
            </label>
            <textarea
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              id="crop-description"
              name="description"
              rows="4"
              value={values.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label for="crop-image" style={{ padding: "10px", marginRight: "55px" }}>
              Image:
            </label>
            <input
              style={{
                margin: "20px",
                marginLeft: "10px",
                width: "300px",
                paddingBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              type="file"
              id="crop-image"
              name="image"
              accept="image/*"
              required
              multiple
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          {/* <div>
    <label for="crop-video"  style={{padding:'10px', marginRight:'60px'}}>Video:</label>
    <input style={{margin:'20px',marginLeft:'10px',width: '300px', paddingBottom:'20px', padding: '10px', border: '1px solid #ccc' ,borderRadius: '4px'}} type="file" id="crop-video" name="video" accept="video/*" required onChange={handleFileUpload} enctype="multipart/form-data" />
  </div> */}
          <button type="submit">Add Crop</button>

          {errorMsg && <div style={{ color: "red", margin: "0px" }}>{errorMsg}</div>}
        </form>
      </div>
    </div>
  );
}

export default SellerCropForm;
