const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  seller_id: { type: Number, required: [true, 'ID is required'] },
  crop_sold: { type: Number, default: 0 },
  crops_for_sale: { type: Number, default: 0 },
  total_sales: { type: Number, default: 0 },
});

const seller=new mongoose.model('Seller',sellerSchema);

module.exports=seller;