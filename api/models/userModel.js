'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the user'
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  homeAddress: {
    type: String,
    required: trues
  },
  workAddress: {
    type: String,
    required: true
  },
  savedAddresses: {
    // key: category
    // value: address
    type: {},
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
