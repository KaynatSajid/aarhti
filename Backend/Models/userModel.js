const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
//35202-9300669-8 15 13-without dashes
const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "An email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide an email"],
  },
  password: { type: String, required: [true, "Password is required"], minLength: 8, select: false },
  confirm_password: {
    type: String,
    required: true,
    minLength: 8,
    trim: true,
    validate: {
      // This will work on save and create
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  
  role: {
    type: String,
    enum: ["Admin", "Buyer", "Seller"],
    required: true,
  },
  first_name: { type: String /* required: [true, 'Name is required'] */ },
  last_name:{ type: String /* required: [true, 'Name is required'] */ },
  cnic:{type: String, 
    minLength:13
  },
  address:{
    type:String
  },
  city: { type: String /* required: [true, 'Name is required'] */ },

  phone_number: {
    type: String,
    required: false, //03356127363
    minLength:11
    /* required: [true, 'Phone number required'], unique: true, minLength: 11, maxLength: 11 */
  },
  region:{
    type:String
  }
  
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  else {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirm_password = undefined;
    next();
  }
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const user = new mongoose.model("User", userSchema);

module.exports = user;
