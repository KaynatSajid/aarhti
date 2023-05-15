const app = require('../Main/app');
const express = require('express');
const sellerCropsController=require('../Controllers/sellerCropsController');
const router = express.Router();

router.route('/').get(sellerCropsController.getCrops).post().patch().delete();

module.exports = router;
