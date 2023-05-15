const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    data: Buffer
  });

const addCrop = new mongoose.Schema({
    name:{ type: String, required: [true]},
    type:{ type: String, required: [true]},
    quantity: {type: Number, required: [true]},
    image:  {type:[ImageSchema] },
    description:{ type: String },
    video:{ type: String, required: [false]}
});

const newCrop = new mongoose.model('addCrop', addCrop);

module.exports = newCrop;
