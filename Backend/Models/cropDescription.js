const mongoose = require("mongoose");

const CropDescription = new mongoose.Schema({
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: [true] },
  type: { type: String, required: [false] },
  quantity: { type: Number, required: [true] },
  image: [
    {
      data: { type: String, required: false },
    },
  ],
  area: { type: String, required: [true] },
  price: { type: Number, required: [true] },
  description: { type: String, required: [true] },
});

const cropDes = new mongoose.model("Crops", CropDescription);

module.exports = cropDes;
