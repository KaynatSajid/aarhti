const addCrop=require('./../Models/addCropModel');
//added commit
exports.createCrop = async (req, res) => {
    try {
      const n_crop = await addCrop.create(req.body);
      console.log(n_crop);
      res.status(200).json({
        status: 'Success',
        message: n_crop,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };