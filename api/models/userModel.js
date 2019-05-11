
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the user'
  }
});

module.exports = mongoose.model('User', UserSchema);