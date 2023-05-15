const mongoose = require('mongoose');

const salesRecordSchema = new mongoose.Schema({
  sales_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  buyer_id: { type: mongoose.Schema.Types.ObjectId },
  price_sold: { type: Number, default: 0 },
  expected_price: { type: Number, default: 0 },
  sold: { type: Boolean, default: false },
  date: { type: Date },
});

const SalesRecord = new mongoose.model('SalesRecord', salesRecordSchema);

module.exports = SalesRecord;
