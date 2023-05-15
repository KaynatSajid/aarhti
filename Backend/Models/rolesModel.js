const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    buyer: { type: Boolean, required: true },
    seller: { type: Boolean, required: true },
    admin: { type: Boolean, required: true },
  });

  const roles=new mongoose.model('Roles',rolesSchema);

  module.exports=roles;