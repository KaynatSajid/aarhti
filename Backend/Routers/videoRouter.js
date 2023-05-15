const express = require('express');
const multer=require('multer');

const app = require('../Main/app');
const videoController=require('./../Controllers/videoController')
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // specify where to save the video file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // generate a unique filename for the video file
    }
  });




router.route('/').post(videoController.saveVideo);
//router.route('/:id').get().patch().delete();

router.route("*").all((req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `roter ${req.originalUrl} not found`,
    });
  });

module.exports = router;