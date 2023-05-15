const mongoose = require('mongoose');


const landRecordSchema = new mongoose.Schema({
  sales_id: { type: Number, required: true },
  crop_type: { type: String, required: true },
  date: { type: Date, default: Date.now },
  acerage: { type: Number, required: true },
  location: { type: String, default: 'Pakistan' },
});

const landRecord=new mongoose.model('LandRecord',landRecordSchema);

module.exports=landRecord;