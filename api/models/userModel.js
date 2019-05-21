'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
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
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
    }
);


// methods are functions accessible on each instance, sometimes called the
// instance methods
userSchema.methods.generateAuthToken = async function () {
    // this is the user or database instance
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'evanlucasfranangela');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token
};


// statics are functions accessible on the mondel, sometimes called the
// model methods
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if (!user) {
        throw new Error("unable to log in")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to log in')
    }

    return user
};

// has the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
});


const User = mongoose.model('User', userSchema)


module.exports = User;
