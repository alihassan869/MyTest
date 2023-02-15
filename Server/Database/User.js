const mongoose = require('mongoose');
require('dotenv').config();
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  radio: String,
  City: String,
  image: String,
  Message: String,
  Checkbox: Boolean,
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const UserModel = mongoose.model(process.env.COLLECTION, UserSchema);
module.exports = UserModel;
