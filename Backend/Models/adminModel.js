const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  admin_id: { type: String, required: [true, 'ID is required'] },
  create: { type: Boolean, required: true },
  update: { type: Boolean, required: true },
  delete: { type: Boolean, required: true },
  insert: { type: Boolean, required: true },
});

const admin = new mongoose.model('Admin', adminSchema);

module.exports = admin;
