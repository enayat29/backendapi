const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, 'Name can not be more then 50 char'],
  },
  last_name: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    maxlength: [50, 'Name can not be more then 50 char'],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Email cannot be blank'],
    match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    index: true,
  },
  phone: {
    type: String,
    unique: false,
    required: false,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
    required: false,
    unique: false,
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['guest', 'registerd'],
    default: 'guest',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
