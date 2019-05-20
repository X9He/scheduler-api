'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcryptjs')

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true
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
        required: false
      },
      workAddress: {
        type: String,
        required: false
      },
      savedAddresses: {
        // key: category
        // value: address
        type: {},
        required: false
      }
    }
);


userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')){
      user.password = await bcrypt.hash(user.password, 8)
  }

  next()
});


module.exports = mongoose.model('User', userSchema);
