const express = require('express');

const app = require('../Main/app');
const addCropController = require('../Controllers/addCropController');

const router = express.Router();


router.route('/add').get().post(addCropController.createCrop);
//router.route('/:id').get().patch().delete();

router.route("*").all((req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `roter ${req.originalUrl} not found`,
    });
  });

module.exports = router;