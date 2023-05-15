const mongoose = require('mongoose');

const YieldSchema = new mongoose.Schema({
  est_id: { type: Number, required: true },
  sales_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  estimate_price: { type: Number, default: 0 },
  wheat_head_count: { type: Number, default: 0 },
});

const Yield=new mongoose.model('Yield',YieldSchema);

module.exports=Yield;