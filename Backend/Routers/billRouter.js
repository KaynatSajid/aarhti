const app = require('../Main/app');
const express = require('express');
const billControllers = require('../Controllers/billsController');
const router = express.Router();

router.route('/buy').get().post(billControllers.createBill);
//router.route('/:id').get().patch().delete();

router.route("*").all((req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `roter ${req.originalUrl} not found`,
    });
  });

module.exports = router;