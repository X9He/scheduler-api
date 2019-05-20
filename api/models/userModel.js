'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// const userSchema = new mongoose.Schema(
//     {
//       name: {
//         type: String,
//         required: true
//       },
//       email: {
//         type: String,
//         required: true
//       },
//       password: {
//         type: String,
//         required: true
//       },
//       homeAddress: {
//         type: String,
//         required: true
//       },
//       workAddress: {
//         type: String,
//         required: true
//       },
//       savedAddresses: {
//         // key: category
//         // value: address
//         type: {},
//         required: true
//       }
//     }
// );


// userSchema.pre('save', async function (next) {
//   const user = this;
//
//   console.log('middleware for user is called');
//
//   next()
// });


// let UserSchema = new Schema('User', userSchema);


let UserSchema = new Schema(
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
        required: true
      },
      workAddress: {
        type: String,
        required: true
      },
      savedAddresses: {
        // key: category
        // value: address
        type: { },
        required: true
      }
    }
    );

module.exports = mongoose.model('User', UserSchema);
