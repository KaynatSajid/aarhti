const mongoose = require('mongoose');

const biddingSchema = new mongoose.Schema({
  bid_id: { type: Number, required: true },
  sales_id: { type: Number, required: true, unique: true },
  bid: { type: Number, required: true },
  highest_bid: { type: Number, required: [true, 'Phone number required'] },
  date: { type: Date, required: [true] },
});

const bid = new mongoose.model('Bid', biddingSchema);

module.exports = bid;
