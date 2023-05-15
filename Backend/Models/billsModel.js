const mongoose = require('mongoose');


const billSchema = new mongoose.Schema({
    email:{ type: String,required: [true, 'email is required'] },
    address:{ type: String, required: [true, 'address is required']},
    city:{ type: String, required: [true,'city is required'] },
    state:{ type: String, required: [true, 'state is required'] },
    zip:{ type: String, required: [true, 'zip is required'] },
  
});

const bill = new mongoose.model('Bill', billSchema);

module.exports = bill;
