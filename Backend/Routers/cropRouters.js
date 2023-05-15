const app = require('../Main/app');
const express = require('express');
const cropController = require('../Controllers/cropController');

const router = express.Router();

router.route('/').post(cropController.createCrop);
router.route('/').get(cropController.getCrops);
router.route('/:id').get(cropController.getCrop);

module.exports = router;
