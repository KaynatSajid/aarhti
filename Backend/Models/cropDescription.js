const mongoose = require('mongoose');

const CropDescription = new mongoose.Schema({
    name:{ type: String, required: [true]},
    price:  {type: Number, required: [true]},
    quantity: {type: Number, required: [true]},
    image:  {type: String },
    description:{ type: String },
    area:{ type: String, required: [true]}
});

const cropDes = new mongoose.model('cropDescription', CropDescription);

module.exports = cropDes;
