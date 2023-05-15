const app = require('../Main/app');
const express = require('express');

const router = express.Router();

router.route('/').get().post().patch().delete();

module.exports = router;
