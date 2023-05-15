const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  buyer_id: { type: Number, required: [true, 'ID is required'] },
  money_spend: { type: Number, default: 0 },
  no_transactions: { type: Number, default: 0 },
});

const buyer = new mongoose.model('Buyer', buyerSchema);

module.exports = buyer;
