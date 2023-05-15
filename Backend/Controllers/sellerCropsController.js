const mongoose = require("mongoose");
const crop = require("../Models/sellerCropsModel");

exports.getCrops = async (req, res) => {
  try {
    const all_crops = await crop.find({ seller_id: "642f16aa7f471f79058063bb" });
    console.log(all_crops.map((crop) => crop.toObject()));
    res.status(200).json({
      crops: all_crops.map((crop) => crop.toObject()),
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

/* exports.createCrops = async (req, res) => {
  try {
    const all_crops = await crop.find({ seller_id: req.params.user._id });
    console.log(all_crops.map((crop) => crop.toObject()));
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
 */
