require('dotenv').config();
const mongoose = require('mongoose');
const UserSchema2 = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Checkbox: Boolean,

  Date: {
    type: Date,
    default: Date.now(),
  },
});
const UserModel = new mongoose.model(process.env.Collection2, UserSchema2);
module.exports = UserModel;
