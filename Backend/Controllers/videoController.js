const express = require('express');
const multer=require('multer');
const app = require('../Main/app');
const util = require('util');
const axios=require('axios');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // specify where to save the video file
    },
    filename: function (req, file, cb) {
        const ext=file.mimetype.split('/')[1];
        console.log(ext)
      cb(null, 'video.'+ext); // generate a unique filename for the video file
    }
  });

  const upload = multer({ storage });

  
  exports.saveVideo = async (req, res) => {
    try {
      const fileUpload = util.promisify(upload.single('video'));
      await fileUpload(req, res);
      console.log(req.file); // print out information about the uploaded file
      res.status(200).json({
        status: 'Success',
        message: 'Video Upload Successful',
      }); // send response back to frontend
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while uploading the video file.');
    }
  };
