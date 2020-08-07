const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
