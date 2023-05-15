const mongoose = require("mongoose");
const user = require("./userModel");

const sellerCropsSchema = new mongoose.Schema({
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  price: { type: Number, required: [true] },
  image: { type: String },
  description: { type: String },
  area: { type: String, required: [true] },
});

const sellerCrops = new mongoose.model("sellerCrops", sellerCropsSchema);

module.exports = sellerCrops;
