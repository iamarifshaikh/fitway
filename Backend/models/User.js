const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fitness: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fitness',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
