const app = require('../Main/app');
const express = require('express');
const userControllers = require('../Controllers/userControllers');
const addCropController=require('./../Controllers/addCropController');
const router = express.Router();


router.route('/add').post(addCropController.createCrop);
//router.route('/:id').get().patch().delete();
router.route("*").all((req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `roter ${req.originalUrl} not found`,
    });
  });
  
module.exports = router;
