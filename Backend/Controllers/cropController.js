const mongoose = require('mongoose');
const crop = require('../Models/cropDescription');



exports.getCrops = async (req, res) => {
  try {
    const all_crops = await crop.find();
    
    res.status(200).json({
      crops: all_crops.map((crop) => crop.toObject()),
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCrop = async (req, res) => {
  try {
    console.log(req.params.id);
    const get_crop = await crop.findById(req.params.id);
    console.log(get_crop);
    res.status(200).json({
      status: 'Success',
      message: get_crop,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCrop = async (req, res) => {
  try {
    console.log(req.body);
    const n_crop = await crop.create(req.body);
    console.log(n_crop);
    res.status(200).json({
      status: 'Success',
      message: n_crop,
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCrop = async (req, res) => {
  try {
    await crop.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'Delete Successful',
      message: 'Crop successfully deleted',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

