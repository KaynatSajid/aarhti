const mongoose = require('mongoose');

const cropsForSaleSchema = new mongoose.Schema({
  seller_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  sales_id: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const cropsForSale = new mongoose.model('cropsForSale', cropsForSaleSchema);

module.exports = cropsForSale;
