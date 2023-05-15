const express = require('express');
const multer=require('multer');

const app = require('../Main/app');
const util = require('util');
require('regenerator-runtime');
const yolov5 =  require('yolov5');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // specify where to save the video file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // generate a unique filename for the video file
    }
  });

  const upload = multer({ storage });

  const main = async() => {	
	let predictions;

	const yolo = yolov5;		// Create an instance of the model 
	await yolo.load();			// Load Model 

	if (yolo.model != '') {
		console.log("Model loaded \n");
		const result = await yolo.predict('wheat-1.jpg');	
        console.log('here')	// Input image must be in 640x640 format 
		predictions = yolo.getDetections(result);		// Get bounding box(s) and class data 
	} else {
		return console.error("Model not found \n");
	}

	if (predictions.length > 0) console.log("Predictions:", predictions);
	
	yolo.dispose;
};
  //const yoloModelPromise = loadModel();
 //main();
  exports.saveVideo = async (req, res) => {
    try {
      const fileUpload = util.promisify(upload.single('video'));
      await fileUpload(req, res);
      console.log(req.file); // print out information about the uploaded file
      res.status(200).send('Video file uploaded successfully!'); // send response back to frontend
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while uploading the video file.');
    }
  };
